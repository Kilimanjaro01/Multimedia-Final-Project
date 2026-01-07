/**
 * @file index.js
 * @brief Punt d'entrada de React.
 *
 * Comentaris en català, codi i identificadors en anglès.
 */
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
