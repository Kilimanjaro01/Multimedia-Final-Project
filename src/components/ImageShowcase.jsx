/**
 * @file ImageShowcase.jsx
 * @brief Secció d'imatge editada (compliment del requisit d'edició d'imatge).
 */
import React from "react";

export default function ImageShowcase() {
  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="section__head">
          <div>
            <h2 className="section__title">Edited photo highlight</h2>
            <p className="section__subtitle">
              Showcase one edited image (color grading, text overlay, composition, etc.).
            </p>
          </div>
          <span className="pill">🖼️ Edited image requirement</span>
        </div>

        <div className="grid-2">
          <div className="card" style={styles.imageCard}>
            <img
              src="/media/blanes-edited.jpg"
              alt="Edited photo of Blanes (replace with your own edited image)"
              style={styles.img}
            />
            <div style={styles.overlay}>
              <div style={styles.overlayTitle}>BLANES</div>
              <div style={styles.overlaySub}>Blue & yellow palette</div>
            </div>
          </div>

          <div className="card" style={styles.textCard}>
            <h3 style={styles.h3}>Info of editing</h3>
            <ul style={styles.ul}>
              <li>Color correction / grading (contrast, temperature, tone curves)</li>
              <li>Text overlay (title, location pin, caption)</li>
              <li>Retouch (remove distractions, blur at the edges)</li>
              <li>Composition tweaks (crop, vignette, selective blur)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  imageCard: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "var(--radius-lg)",
    padding: 12,
    background: "rgba(11, 27, 43, 0.02)",
  },
  img: {
    width: "100%",
    height: 360,
    objectFit: "cover",
    borderRadius: 18,
    border: "1px solid rgba(11,27,43,0.12)",
    display: "block",
    filter: "contrast(1.05) saturate(1.02)",
  },
  overlay: {
    position: "absolute",
    left: 24,
    bottom: 24,
    padding: "12px 14px",
    borderRadius: 16,
    border: "1px solid rgba(11,27,43,0.16)",
    background: "rgba(255,255,255,0.85)",
    backdropFilter: "blur(8px)",
  },
  overlayTitle: { fontWeight: 1000, letterSpacing: 2, fontSize: 18 },
  overlaySub: { color: "rgba(11,27,43,0.70)", marginTop: 2, fontSize: 13 },
  textCard: { padding: 18, borderRadius: "var(--radius-lg)" },
  h3: { margin: "0 0 10px" },
  ul: { margin: 0, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.6 },
  p: { margin: "14px 0 0", color: "var(--muted)", lineHeight: 1.55 },
};
