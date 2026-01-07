/**
 * @file PlacesPage.jsx
 * @brief Pàgina llistat de llocs (per navegar fàcilment a detalls).
 */
import React from "react";
import ActivitiesSection from "../components/ActivitiesSection";

export default function PlacesPage() {
  return (
    <main style={{ paddingTop: 12 }}>
      <section className="section" style={{ paddingTop: 22 }}>
        <div className="container">
          <div className="section__head">
            <div>
              <h1 className="section__title" style={{ fontSize: 34, marginBottom: 8 }}>Places to visit</h1>
              <p className="section__subtitle">
                Click any place to open its detail page with description and map location.
              </p>
            </div>
            <span className="pill">🧭 Navigation</span>
          </div>
        </div>
      </section>

      <ActivitiesSection forceTitle="All places" />
    </main>
  );
}
