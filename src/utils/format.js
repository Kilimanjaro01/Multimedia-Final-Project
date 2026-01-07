/**
 * @file format.js
 * @brief Funcions d'ajuda per formatar valors.
 */

export function formatEUR(value) {
  // Format de moneda per mostrar preus (euros).
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function clampText(text, maxLen) {
  // Retalla textos llargs per evitar que les targetes quedin massa altes.
  if (!text) return "";
  if (text.length <= maxLen) return text;
  return text.slice(0, maxLen - 1).trimEnd() + "…";
}
