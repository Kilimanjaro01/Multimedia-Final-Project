/**
 * @file HomePage.jsx
 * @brief Pàgina principal (home) amb seccions multimèdia i activitats.
 */
import React from "react";
import Hero from "../components/Hero";
import VideoSection from "../components/VideoSection";
import ImageShowcase from "../components/ImageShowcase";
import AudioSection from "../components/AudioSection";
import ActivitiesSection from "../components/ActivitiesSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <VideoSection />
      <ImageShowcase />
      <AudioSection />
      <ActivitiesSection />
    </main>
  );
}
