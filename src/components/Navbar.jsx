/**
 * @file Navbar.jsx
 * @brief Menú superior (home/places + enllaços de seccions a la home + cart).
 */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar({ onOpenCart }) {
  const cart = useCart();
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header style={styles.header}>
      <div className="container" style={styles.inner}>
        <Link to="/" style={styles.brand}>
          <span style={styles.dot} aria-hidden="true" />
          Discover Blanes
        </Link>

        <nav style={styles.nav} aria-label="Top menu">
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/places" style={styles.link}>Places</Link>

          {isHome ? (
            <>
              <a href="#video" style={styles.link}>Video</a>
              <a href="#gallery" style={styles.link}>Gallery</a>
              <a href="#audio" style={styles.link}>Audio</a>
              <a href="#activities" style={styles.link}>Activities</a>
            </>
          ) : null}
        </nav>

        <button className="btn btn--accent" onClick={onOpenCart} type="button">
          Cart • {cart.getTotalCount()}
        </button>
      </div>
    </header>
  );
}

const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 20,
    background: "rgba(255, 255, 255, 0.92)",
    borderBottom: "1px solid rgba(11, 27, 43, 0.12)",
    backdropFilter: "blur(10px)",
  },
  inner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 14,
    padding: "14px 0",
  },
  brand: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    textDecoration: "none",
    fontWeight: 900,
    letterSpacing: 0.2,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
    boxShadow: "0 0 0 4px rgba(30, 102, 255, 0.10)",
  },
  nav: {
    display: "flex",
    gap: 8,
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  link: {
    color: "rgba(11, 27, 43, 0.76)",
    textDecoration: "none",
    fontSize: 14,
    padding: "8px 10px",
    borderRadius: 999,
    border: "1px solid transparent",
    background: "transparent",
  },
};
