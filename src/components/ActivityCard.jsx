/**
 * @file ActivityCard.jsx
 * @brief Targeta d'activitat/lloc (afegir al cart + enllaç a la pàgina de detall).
 */
import React from "react";
import { Link } from "react-router-dom";
import { formatEUR, clampText } from "../utils/format";
import { useCart } from "../context/CartContext";

export default function ActivityCard({ activity }) {
  const cart = useCart();

  function onAdd() {
    // Afegim el lloc seleccionat al cart.
    cart.add(activity);
  }

  return (
    <article className="card" style={styles.card}>
      <Link to={"/place/" + activity.id} style={styles.imageLink} aria-label={"Open details for " + activity.title}>
        <img
          src={activity.image}
          alt={activity.title}
          style={styles.img}
          loading="lazy"
        />
      </Link>

      <div style={styles.body}>
        <div style={styles.top}>
          <div style={styles.meta}>
            <span className="pill">{activity.category}</span>
            <span className="pill">{activity.durationHours}h</span>
            <span className="pill">{formatEUR(activity.priceEUR)}</span>
          </div>

          <h3 style={styles.h3}>
            <Link to={"/place/" + activity.id} style={styles.titleLink}>
              {activity.title}
            </Link>
          </h3>

          <p style={styles.p}>{clampText(activity.shortDescription, 120)}</p>

          <div style={styles.actionsRow}>
            <Link to={"/place/" + activity.id} className="btn" style={{ textDecoration: "none" }}>
              View details
            </Link>
            <button className="btn btn--accent" onClick={onAdd} type="button">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

const styles = {
  card: {
    overflow: "hidden",
    borderRadius: "var(--radius-lg)",
    display: "grid",
    gridTemplateColumns: "160px 1fr",
    gap: 12,
    padding: 12,
    alignItems: "stretch",
  },
  imageLink: { display: "block" },
  img: {
    width: "100%",
    height: "100%",
    minHeight: 140,
    objectFit: "cover",
    borderRadius: 16,
    border: "1px solid rgba(11, 27, 43, 0.12)",
    display: "block",
  },
  body: { display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 10 },
  top: { minWidth: 0 },
  meta: { display: "flex", gap: 8, flexWrap: "wrap" },
  h3: { margin: "10px 0 6px", fontSize: 18, lineHeight: 1.2 },
  titleLink: { textDecoration: "none", color: "var(--text)" },
  p: { margin: 0, color: "var(--muted)", lineHeight: 1.45 },
  actionsRow: { marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" },
};
