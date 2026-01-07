/**
 * @file Cart.jsx
 * @brief Cart lateral (drawer) amb els llocs seleccionats.
 */
import React from "react";
import { useCart } from "../context/CartContext";
import { formatEUR } from "../utils/format";
import { Link } from "react-router-dom";

export default function Cart({ isOpen, onClose }) {
  const cart = useCart();
  const lineItems = cart.getLineItems();
  const total = cart.getTotalPriceEUR();

  return (
    <>
      {isOpen ? <div style={styles.backdrop} onClick={onClose} /> : null}

      <aside
        aria-label="Selected places cart"
        style={{
          ...styles.panel,
          transform: isOpen ? "translateX(0)" : "translateX(105%)",
        }}
      >
        <div style={styles.header}>
          <div>
            <div style={styles.title}>Your cart</div>
            <div style={styles.sub}>
              {lineItems.length === 0
                ? "No places selected yet."
                : "Your draft itinerary for Blanes."}
            </div>
          </div>

          <button className="btn" onClick={onClose} type="button">
            Close
          </button>
        </div>

        <div style={styles.body}>
          {lineItems.length === 0 ? (
            <div className="card" style={styles.empty}>
              <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.5 }}>
                Go to <Link to="/places" onClick={onClose} style={{ color: "var(--accent)", fontWeight: 900 }}>Places</Link> and click <strong>Add to cart</strong>.
              </p>
            </div>
          ) : (
            <div style={styles.items}>
              {lineItems.map(function (line) {
                return (
                  <div className="card" key={"line-" + line.activity.id} style={styles.item}>
                    <img
                      src={line.activity.image}
                      alt={line.activity.title}
                      style={styles.thumb}
                    />
                    <div style={styles.itemText}>
                      <div style={styles.itemTop}>
                        <div style={styles.itemTitle}>{line.activity.title}</div>
                        <div style={styles.itemPrice}>
                          {formatEUR((line.activity.priceEUR || 0) * line.qty)}
                        </div>
                      </div>

                      <div style={styles.itemMeta}>
                        <span className="pill">{line.activity.category}</span>
                        <span className="pill">{line.activity.durationHours}h</span>
                        <span className="pill">Qty: {line.qty}</span>
                      </div>

                      <div style={styles.itemActions}>
                        <button
                          className="btn"
                          type="button"
                          onClick={function () { cart.remove(line.activity.id); }}
                        >
                          Remove
                        </button>
                        <button
                          className="btn btn--accent"
                          type="button"
                          onClick={function () { cart.add(line.activity); }}
                        >
                          Add one more
                        </button>

                        <Link
                          to={"/place/" + line.activity.id}
                          className="btn"
                          onClick={onClose}
                          style={{ textDecoration: "none" }}
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div style={styles.footer}>
          <div style={styles.totalRow}>
            <span style={{ color: "var(--muted)" }}>Estimated total</span>
            <strong>{formatEUR(total)}</strong>
          </div>

          <div style={styles.footerActions}>
            <button className="btn" type="button" onClick={cart.clear} disabled={lineItems.length === 0}>
              Clear
            </button>
            <button className="btn btn--accent" type="button" disabled={lineItems.length === 0}>
              Save itinerary
            </button>
          </div>

        </div>
      </aside>
    </>
  );
}

const styles = {
  backdrop: {
    position: "fixed",
    inset: 0,
    background: "rgba(11,27,43,0.30)",
    zIndex: 40,
  },
  panel: {
    position: "fixed",
    top: 0,
    right: 0,
    height: "100vh",
    width: "min(460px, 92vw)",
    background: "rgba(255, 255, 255, 0.95)",
    borderLeft: "1px solid rgba(11, 27, 43, 0.12)",
    backdropFilter: "blur(10px)",
    zIndex: 50,
    display: "flex",
    flexDirection: "column",
    transition: "transform 180ms ease",
  },
  header: {
    padding: 16,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 12,
    borderBottom: "1px solid rgba(11, 27, 43, 0.12)",
  },
  title: { fontWeight: 1000, fontSize: 18 },
  sub: { color: "var(--muted)", fontSize: 13, marginTop: 2, lineHeight: 1.4 },
  body: { padding: 16, overflow: "auto", flex: 1 },
  empty: { padding: 14, borderRadius: 18 },
  items: { display: "flex", flexDirection: "column", gap: 12 },
  item: { padding: 12, borderRadius: 18, display: "grid", gridTemplateColumns: "84px 1fr", gap: 10 },
  thumb: {
    width: 84,
    height: 84,
    borderRadius: 14,
    objectFit: "cover",
    border: "1px solid rgba(11, 27, 43, 0.12)",
  },
  itemText: { minWidth: 0 },
  itemTop: { display: "flex", justifyContent: "space-between", gap: 10, alignItems: "baseline" },
  itemTitle: { fontWeight: 900, lineHeight: 1.2 },
  itemPrice: { color: "var(--muted)", fontSize: 13 },
  itemMeta: { marginTop: 8, display: "flex", gap: 8, flexWrap: "wrap" },
  itemActions: { marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" },
  footer: {
    padding: 16,
    borderTop: "1px solid rgba(11, 27, 43, 0.12)",
    background: "rgba(11, 27, 43, 0.02)",
  },
  totalRow: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  footerActions: { marginTop: 12, display: "flex", gap: 10 },
  disclaimer: { margin: "10px 0 0", color: "var(--muted)", fontSize: 12, lineHeight: 1.45 },
};
