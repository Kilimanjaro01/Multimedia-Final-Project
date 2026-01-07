/**
 * @file App.jsx
 * @brief Estructura principal amb rutes (home, llista de llocs, detall de lloc).
 *
 * Requisits coberts:
 * - Menú superior (Navbar)
 * - Vídeo (o animació 3D): VideoSection (Home)
 * - Imatge editada: ImageShowcase (Home)
 * - Àudio 30+ segons: AudioSection (Home)
 * - Interacció usuari: ActivitiesSection + Cart (drawer)
 * - Enllaç a pàgina de detall per cada lloc: /place/:placeId + mapa
 */
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PlacesPage from "./pages/PlacesPage";
import PlaceDetailsPage from "./pages/PlaceDetailsPage";

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  function openCart() {
    setIsCartOpen(true);
  }

  function closeCart() {
    setIsCartOpen(false);
  }

  return (
    <CartProvider>
      <BrowserRouter>
        <div>
          <Navbar onOpenCart={openCart} />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/places" element={<PlacesPage />} />
            <Route path="/place/:placeId" element={<PlaceDetailsPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>

          <Footer />
          <Cart isOpen={isCartOpen} onClose={closeCart} />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
