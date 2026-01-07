/**
 * @file ActivitiesSection.jsx
 * @brief Secció d'activitats/llocs amb interacció (selecció + cart) i enllaç a pàgina de detall.
 */
import React, { useMemo, useState } from "react";
import ActivityCard from "./ActivityCard";
import { activities, CATEGORIES } from "../data/activities";

export default function ActivitiesSection({ forceTitle }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    // Filtrem i ordenem sense recalcular a cada render si no canvia l'entrada.
    const q = query.trim().toLowerCase();

    const list = activities.filter(function (a) {
      const matchesQuery =
        q.length === 0 ||
        a.title.toLowerCase().includes(q) ||
        a.shortDescription.toLowerCase().includes(q) ||
        a.location.toLowerCase().includes(q);

      const matchesCategory = category === "All" || a.category === category;
      return matchesQuery && matchesCategory;
    });

    if (sort === "price-asc") {
      return list.slice().sort(function (x, y) {
        return (x.priceEUR || 0) - (y.priceEUR || 0);
      });
    }

    if (sort === "duration-asc") {
      return list.slice().sort(function (x, y) {
        return (x.durationHours || 0) - (y.durationHours || 0);
      });
    }

    return list;
  }, [query, category, sort]);

  const title = forceTitle ? forceTitle : "Build your itinerary";

  return (
    <section id="activities" className="section">
      <div className="container">
        <div className="section__head">
          <div>
            <h2 className="section__title">{title}</h2>
            <p className="section__subtitle">
              Pick places you like, add them to your cart, and open the detail page to see the map and a longer description.
            </p>
          </div>
          <span className="pill">🧩 User interaction</span>
        </div>

        <div className="card" style={styles.controls}>
          <div style={styles.row}>
            <label style={styles.label}>
              Search
              <input
                value={query}
                onChange={function (e) { setQuery(e.target.value); }}
                placeholder="Beach, garden, viewpoint…"
                style={styles.input}
              />
            </label>

            <label style={styles.label}>
              Category
              <select
                value={category}
                onChange={function (e) { setCategory(e.target.value); }}
                style={styles.input}
              >
                <option value="All">All</option>
                {CATEGORIES.map(function (c) {
                  return (
                    <option key={"cat-" + c} value={c}>
                      {c}
                    </option>
                  );
                })}
              </select>
            </label>

            <label style={styles.label}>
              Sort
              <select
                value={sort}
                onChange={function (e) { setSort(e.target.value); }}
                style={styles.input}
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price (low → high)</option>
                <option value="duration-asc">Duration (short → long)</option>
              </select>
            </label>
          </div>

          <p style={styles.count}>
            Showing <strong>{filtered.length}</strong> places.
          </p>
        </div>

        <div style={styles.list}>
          {filtered.map(function (a) {
            return <ActivityCard key={a.id} activity={a} />;
          })}
        </div>
      </div>
    </section>
  );
}

const styles = {
  controls: {
    padding: 14,
    borderRadius: "var(--radius-lg)",
    marginBottom: 14,
    background: "rgba(11, 27, 43, 0.02)",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr 1fr",
    gap: 12,
  },
  label: { display: "flex", flexDirection: "column", gap: 8, color: "var(--muted)", fontSize: 13 },
  input: {
    borderRadius: 14,
    padding: "10px 12px",
    border: "1px solid rgba(11, 27, 43, 0.16)",
    background: "#fff",
    color: "var(--text)",
    outline: "none",
  },
  count: { margin: "10px 0 0", color: "var(--muted)" },
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 12,
  },
};
