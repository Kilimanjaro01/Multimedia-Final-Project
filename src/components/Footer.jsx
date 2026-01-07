/**
 * @file Footer.jsx
 * @brief Peu de pàgina.
 */
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.inner}>
        <div>
          <div style={styles.title}>Discover Blanes</div>
          <div style={styles.meta}>
            React tourism promo • Multimedia + interactive cart + place pages
          </div>
        </div>

        <div style={styles.links}>
          <Link to="/" style={styles.a}>Home</Link>
          <Link to="/places" style={styles.a}>Places</Link>
          <a href="#audio" style={styles.a}>Audio</a>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    padding: "34px 0 48px",
    borderTop: "1px solid rgba(11, 27, 43, 0.12)",
    background: "rgba(11, 27, 43, 0.02)",
  },
  inner: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 14, flexWrap: "wrap" },
  title: { fontWeight: 1000, letterSpacing: 0.2 },
  meta: { marginTop: 4, color: "var(--muted)", fontSize: 13 },
  links: { display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" },
  a: {
    color: "rgba(11,27,43,0.76)",
    textDecoration: "none",
    padding: "8px 10px",
    borderRadius: 999,
    border: "1px solid rgba(11,27,43,0.12)",
    background: "rgba(255,255,255,0.65)",
  },
};
