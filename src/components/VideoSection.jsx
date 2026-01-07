/**
 * @file VideoSection.jsx
 * @brief Secció de vídeo (compliment del requisit de vídeo o animació 3D).
 */
import React from "react";

export default function VideoSection() {
  return (
    <section id="video" className="section">
      <div className="container">
        <div className="section__head">
          <div>
            <h2 className="section__title">Blanes in 60 seconds</h2>
            <p className="section__subtitle">
              A short promo video to set the mood.
            </p>
          </div>
          <span className="pill">🎬 Video / 3D requirement</span>
        </div>

        <div className="card" style={styles.wrap}>
          <video
            controls
            preload="metadata"
            style={styles.video}
            poster="/media/blanes-edited.jpg"
          >
            <source src="/media/blanes-promo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

        </div>
      </div>
    </section>
  );
}

const styles = {
  wrap: {
    padding: 14,
    borderRadius: "var(--radius-lg)",
    background: "rgba(11, 27, 43, 0.02)",
  },
  video: {
    width: "100%",
    borderRadius: 16,
    border: "1px solid rgba(11, 27, 43, 0.12)",
    background: "rgba(11,27,43,0.03)",
    display: "block",
  },
  note: { padding: "12px 6px 0" },
  noteTitle: { margin: "8px 0 4px", fontWeight: 900 },
  noteText: { margin: 0, color: "var(--muted)", lineHeight: 1.45 },
};
