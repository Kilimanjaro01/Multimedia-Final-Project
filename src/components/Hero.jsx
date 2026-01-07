/**
 * @file Hero.jsx
 * @brief Hero apaisat amb carrusel horitzontal i botons esquerra/dreta.
 *
 * Comentaris en català, codi i textos en anglès.
 */
import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const heroImages = [
    "/media/hero-forcanera-1.jpg",
    "/media/hero-forcanera-2.jpg",
    "/media/hero-forcanera-3.jpg",
    "/media/hero-forcanera-4.jpg",
  ];

  // Fons del hero (imatge real a public/media/)
  const bgUrl = process.env.PUBLIC_URL + "/media/sa-forcanera-hero.jpg";

  // Referència al contenidor scrollable del carrusel
  const railRef = useRef(null);

  function scrollByOne(direction) {
    // Fem scroll “a salts” (una targeta per click aproximadament)
    const el = railRef.current;
    if (!el) return;

    // Agafem l'amplada de la primera imatge per calcular el salt
    const firstImg = el.querySelector("img");
    const imgWidth = firstImg ? firstImg.getBoundingClientRect().width : 320;
    const gap = 12; // ha de coincidir amb el gap del CSS

    el.scrollBy({
      left: direction * (imgWidth + gap),
      behavior: "smooth",
    });
  }

  return (
    <section id="top" className="heroSection">
      <div className="container">
        <div
          className="heroCard"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.80) 60%, rgba(255,255,255,0.60) 100%), url(" +
              bgUrl +
              ")",
          }}
        >
          {/* Columna esquerra: text */}
          <div className="heroLeft">
            <div className="pill">🌊 Costa Brava • Girona • Catalonia</div>

            <h1 className="heroTitle">Blanes, sea, gardens and viewpoints.</h1>

            <p className="heroText">
              Start with the classics: Marimurtra, Sa Palomera, and a hidden cove like Cala Sa
              Forcanera. Pick your favorite places and save them to your cart as a mini itinerary.
            </p>

            <div className="heroActions">
              <Link className="btn btn--accent" to="/places">
                Explore places
              </Link>
              <a className="btn" href="#video">
                Watch the video
              </a>
            </div>
          </div>

          {/* Columna dreta: carrusel amb botons */}
          <div className="heroRight">
            <div className="heroRailWrap" aria-label="Blanes photo carousel">
              <button
                type="button"
                className="heroNavBtn heroNavBtn--left"
                onClick={function () {
                  scrollByOne(-1);
                }}
                aria-label="Previous image"
              >
                ‹
              </button>

              <div className="heroRail" ref={railRef}>
                {heroImages.map(function (src, idx) {
                  return (
                    <img
                      key={"hero-img-" + idx}
                      src={process.env.PUBLIC_URL + src}
                      alt={"Blanes hero photo " + (idx + 1)}
                      className="heroRailImg"
                      loading="lazy"
                    />
                  );
                })}
              </div>

              <button
                type="button"
                className="heroNavBtn heroNavBtn--right"
                onClick={function () {
                  scrollByOne(1);
                }}
                aria-label="Next image"
              >
                ›
              </button>
            </div>

            <p className="heroHint">Use the arrows to browse the photos.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
