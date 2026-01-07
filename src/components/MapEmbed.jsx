/**
 * @file MapEmbed.jsx
 * @brief Component per incrustar un mapa d'OpenStreetMap amb marcador.
 */
import React, { useMemo } from "react";

export default function MapEmbed({ lat, lng, zoomDelta }) {
  const delta = typeof zoomDelta === "number" ? zoomDelta : 0.01;

  const src = useMemo(() => {
    // Construïm la URL d'embed amb bbox + marker.
    const left = lng - delta;
    const right = lng + delta;
    const top = lat + delta;
    const bottom = lat - delta;

    const bbox = [left, bottom, right, top].join(",");
    const marker = [lat, lng].join(",");
    return "https://www.openstreetmap.org/export/embed.html?bbox=" + encodeURIComponent(bbox) +
      "&layer=mapnik&marker=" + encodeURIComponent(marker);
  }, [lat, lng, delta]);

  return (
    <div className="card" style={styles.card}>
      <iframe
        title="OpenStreetMap"
        src={src}
        style={styles.iframe}
        loading="lazy"
      />
      <div style={styles.footer}>
        <a
          href={"https://www.openstreetmap.org/?mlat=" + lat + "&mlon=" + lng + "#map=16/" + lat + "/" + lng}
          target="_blank"
          rel="noreferrer"
          style={styles.link}
        >
          Open full map
        </a>
      </div>
    </div>
  );
}

const styles = {
  card: { overflow: "hidden", borderRadius: "var(--radius-lg)" },
  iframe: { width: "100%", height: 360, border: 0, display: "block" },
  footer: {
    padding: "10px 12px",
    borderTop: "1px solid var(--border)",
    background: "rgba(11, 27, 43, 0.02)",
    display: "flex",
    justifyContent: "flex-end",
  },
  link: { color: "var(--accent)", textDecoration: "none", fontWeight: 700 },
};
