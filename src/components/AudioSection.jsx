/**
 * @file AudioSection.jsx
 * @brief Secció d'àudio (mínim 30 segons).
 */
import React from "react";

export default function AudioSection() {
  return (
    <section id="audio" className="section">
      <div className="container">
        <div className="section__head">
          <div>
            <h2 className="section__title">Sound of Blanes</h2>
            <p className="section__subtitle">
              An audio clip (ambient + music, or a short narrated guide).
            </p>
          </div>
          <span className="pill">🎧 Audio requirement</span>
        </div>

        <div className="card" style={styles.card}>
          <div style={styles.left}>
            <p style={styles.label}>Press play</p>

            <audio controls preload="metadata" style={styles.audio}>
              <source
                src={process.env.PUBLIC_URL + "/media/audio-project.mp3"}
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>
          </div>

          <div style={styles.right} aria-hidden="true">
            <div style={styles.equalizer}>
              <span style={styles.bar} />
              <span style={styles.bar2} />
              <span style={styles.bar3} />
              <span style={styles.bar4} />
              <span style={styles.bar5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  card: {
    padding: 18,
    borderRadius: "var(--radius-lg)",
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: 16,
    alignItems: "center",
    background: "rgba(11, 27, 43, 0.02)",
  },
  left: {},
  right: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 10,
  },
  label: { margin: 0, fontWeight: 900, letterSpacing: 0.2 },
  audio: { width: "100%", marginTop: 10 },
  equalizer: {
    width: 240,
    height: 120,
    borderRadius: 18,
    border: "1px solid rgba(11, 27, 43, 0.12)",
    background: "rgba(255,255,255,0.70)",
    display: "flex",
    gap: 10,
    alignItems: "flex-end",
    justifyContent: "center",
    padding: 14,
  },
  bar: {
    width: 18,
    height: 40,
    borderRadius: 12,
    background: "rgba(30, 102, 255, 0.55)",
    animation: "pulse 1.1s ease-in-out infinite",
  },
  bar2: {
    width: 18,
    height: 65,
    borderRadius: 12,
    background: "rgba(11,27,43,0.22)",
    animation: "pulse 0.9s ease-in-out infinite",
  },
  bar3: {
    width: 18,
    height: 52,
    borderRadius: 12,
    background: "rgba(255, 208, 0, 0.55)",
    animation: "pulse 1.0s ease-in-out infinite",
  },
  bar4: {
    width: 18,
    height: 74,
    borderRadius: 12,
    background: "rgba(30, 102, 255, 0.35)",
    animation: "pulse 0.8s ease-in-out infinite",
  },
  bar5: {
    width: 18,
    height: 46,
    borderRadius: 12,
    background: "rgba(255, 208, 0, 0.35)",
    animation: "pulse 1.2s ease-in-out infinite",
  },
};
