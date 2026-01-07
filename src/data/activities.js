/**
 * @file activities.js
 * @brief Llista de llocs/activitats de Blanes amb dades per a la pàgina de detall.
 *
 * Nota: coordenades aproximades basades en fonts públiques (OSM/Wikimedia/altres).
 */

export const CATEGORIES = [
  "Beaches",
  "Nature",
  "Viewpoints",
  "Culture",
  "Town",
];

/**
 * Cada element és un "place" visitable.
 * - `id` s'utilitza a la ruta: /place/:placeId
 * - `lat`/`lng` s'utilitzen per incrustar un mapa (OpenStreetMap)
 */
export const activities = [
  {
    id: "marimurtra",
    title: "Marimurtra Botanical Garden",
    category: "Nature",
    priceEUR: 10,
    durationHours: 2,
    location: "Passeig de Carles Faust, 9",
    shortDescription:
      "Clifftop gardens with Mediterranean and exotic plants, plus iconic sea views.",
    longDescription:
      "Marimurtra is one of the most famous spots in Blanes. The garden sits above the sea and combines Mediterranean landscapes with exotic plants.\n\nTake your time to walk the paths, stop at viewpoints, and enjoy the calm atmosphere. It’s a great plan for late afternoon light and photos.",
    highlights: ["Sea viewpoints", "Easy walk", "Photo-friendly"],
    image: "/media/marimurtra.jpg",
    lat: 41.676667,
    lng: 2.801944,
  },
  {
    id: "cala-sa-forcanera",
    title: "Cala Sa Forcanera",
    category: "Beaches",
    priceEUR: 0,
    durationHours: 2,
    location: "Cala Sa Forcanera, Blanes",
    shortDescription:
      "A small rocky cove with clear water, hidden near the botanical area.",
    longDescription:
      "Cala Sa Forcanera is a small cove known for its rocky coastline and clear water. It feels more “hidden” than the big beaches, so it’s perfect if you want a quieter swim.\n\nBring water shoes and keep an eye on the sea conditions. Early morning is usually the most peaceful time.",
    highlights: ["Clear water", "Hidden vibe", "Short escape"],
    image: "/media/sa-forcanera-hero.jpg",
    lat: 41.67563521808122,
    lng: 2.802885924984185,
  },
  {
    id: "s-abanell",
    title: "S'Abanell Beach",
    category: "Beaches",
    priceEUR: 0,
    durationHours: 3,
    location: "Platja de S'Abanell",
    shortDescription:
      "A long sandy beach perfect for a relaxed swim and a slow seaside stroll.",
    longDescription:
      "S'Abanell is a long sandy beach with plenty of space to walk, chill, and swim. It’s a solid “easy plan” if you want a simple beach day without overthinking it.\n\nIf you like sunsets, the horizon here looks great, especially with calm sea conditions.",
    highlights: ["Wide beach", "Great for walks", "Accessible"],
    image: "/media/sabanell.jpg",
    lat: 41.66143157875107,
    lng: 2.783585995949165,
  },
  {
    id: "sa-palomera",
    title: "Sa Palomera Rock",
    category: "Viewpoints",
    priceEUR: 0,
    durationHours: 0.75,
    location: "Passeig de la Marina",
    shortDescription:
      "The symbolic rock that marks the start of the Costa Brava, right by the beach.",
    longDescription:
      "Sa Palomera is the iconic rock at the beach edge that many people consider the “start of the Costa Brava”. It’s an easy stop with a classic photo spot.\n\nIt’s especially nice at golden hour. You can combine it with a walk along the seafront.",
    highlights: ["Iconic photo spot", "Seafront walk", "Golden hour"],
    image: "/media/palomera.jpg",
    lat: 41.67077,
    lng: 2.79166,
  },
  {
    id: "castell-sant-joan",
    title: "Sant Joan Castle Viewpoint",
    category: "Viewpoints",
    priceEUR: 0,
    durationHours: 1.5,
    location: "Turó de Sant Joan",
    shortDescription:
      "A hilltop viewpoint with panoramic views over Blanes and the coastline.",
    longDescription:
      "The Sant Joan castle area sits on a hill above Blanes. The main reason to go is the panoramic view: sea, town, and coastline.\n\nWear comfortable shoes (it’s uphill) and bring a bit of water. On clear days you get a huge view and great photos.",
    highlights: ["Panoramic views", "Short hike", "Best on clear days"],
    image: "/media/santjoan.jpg",
    lat: 41.679085,
    lng: 2.798343,
  },
  {
    id: "blanes-old-town",
    title: "Blanes Old Town Walk",
    category: "Town",
    priceEUR: 0,
    durationHours: 1.5,
    location: "Historic center",
    shortDescription:
      "Streets, small squares and local shops: a simple walk to feel the town vibe.",
    longDescription:
      "The old town is ideal for a short self-guided walk. You’ll find small streets, local squares and everyday Blanes life away from the beach front.\n\nA good idea is to start near the center, wander without a strict plan, and finish back by the sea.",
    highlights: ["Local vibe", "Short route", "Shops and squares"],
    image: "/media/oldblanes.jpg",
    lat: 41.676,
    lng: 2.793,
  },
];
