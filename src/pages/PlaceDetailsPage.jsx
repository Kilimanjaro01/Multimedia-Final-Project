/**
 * @file PlaceDetailsPage.jsx
 * @brief Pàgina de detall d'un lloc (descripció + mapa).
 */
import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { activities } from "../data/activities";
import { formatEUR } from "../utils/format";
import MapEmbed from "../components/MapEmbed";
import { useCart } from "../context/CartContext";

export default function PlaceDetailsPage() {
  const params = useParams();
  const cart = useCart();

  const place = useMemo(() => {
    return activities.find(function (p) {
      return p.id === params.placeId;
    });
  }, [params.placeId]);

  if (!place) {
    return (
      <main className="section">
        <div className="container">
          <h1 style={{ marginTop: 0 }}>Place not found</h1>
          <p style={{ color: "var(--muted)" }}>
            The link may be wrong, or the place was removed.
          </p>
          <Link to="/" className="btn btn--accent" style={{ textDecoration: "none" }}>
            Go back home
          </Link>
        </div>
      </main>
    );
  }

  function onAdd() {
    cart.add(place);
  }

  return (
    <main className="section" style={{ paddingTop: 22 }}>
      <div className="container">
        <div style={styles.topRow}>
          <div>
            <Link to="/places" style={styles.backLink}>← Back to places</Link>
            <h1 style={styles.h1}>{place.title}</h1>

            <div style={styles.meta}>
              <span className="pill">{place.category}</span>
              <span className="pill">{place.durationHours}h</span>
              <span className="pill">{formatEUR(place.priceEUR)}</span>
              <span className="pill">{place.location}</span>
            </div>

            <p style={styles.lead}>{place.shortDescription}</p>

            <button className="btn btn--accent" type="button" onClick={onAdd}>
              Add to cart
            </button>
          </div>

          <div className="card" style={styles.imageCard}>
            <img
              src={place.image}
              alt={place.title}
              style={styles.img}
            />
            <div style={styles.badge}>BLANES</div>
          </div>
        </div>

        <div className="grid-2" style={{ marginTop: 18 }}>
          <div className="card" style={styles.textCard}>
            <h2 style={{ marginTop: 0 }}>About this place</h2>
            {place.longDescription.split("\n\n").map(function (para, idx) {
              return (
                <p key={"p-" + idx} style={styles.p}>
                  {para}
                </p>
              );
            })}

            <h3 style={{ marginBottom: 8 }}>Highlights</h3>
            <ul style={styles.ul}>
              {place.highlights.map(function (h, idx) {
                return (
                  <li key={place.id + "-hl-" + idx} style={styles.li}>
                    {h}
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h2 style={{ margin: "0 0 10px" }}>Where it is</h2>
            <p style={{ margin: "0 0 12px", color: "var(--muted)", lineHeight: 1.5 }}>
              Map centered on the place location (OpenStreetMap embed).
            </p>
            <MapEmbed lat={place.lat} lng={place.lng} />
          </div>
        </div>
      </div>
    </main>
  );
}

const styles = {
  topRow: {
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    gap: 16,
    alignItems: "start",
  },
  backLink: {
    color: "var(--accent)",
    textDecoration: "none",
    fontWeight: 800,
  },
  h1: { margin: "10px 0 10px", fontSize: 38, lineHeight: 1.08 },
  meta: { display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 },
  lead: { margin: "0 0 14px", color: "var(--muted)", lineHeight: 1.6, maxWidth: "70ch" },
  imageCard: { padding: 12, borderRadius: "var(--radius-lg)", position: "relative", overflow: "hidden" },
  img: {
    width: "100%",
    height: 320,
    objectFit: "cover",
    borderRadius: 18,
    border: "1px solid rgba(11, 27, 43, 0.12)",
    display: "block",
  },
  badge: {
    position: "absolute",
    left: 24,
    bottom: 24,
    padding: "8px 12px",
    borderRadius: 999,
    border: "1px solid rgba(11, 27, 43, 0.16)",
    background: "rgba(255,255,255,0.85)",
    fontWeight: 900,
    letterSpacing: 1.2,
  },
  textCard: { padding: 18, borderRadius: "var(--radius-lg)" },
  p: { margin: "0 0 12px", color: "var(--muted)", lineHeight: 1.7 },
  ul: { margin: 0, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.7 },
  li: { marginBottom: 4 },
};
