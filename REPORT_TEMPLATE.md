# Technical Report (1–2 pages) — Discover Blanes (v2)

## 1) Overview
This project is a React-based tourism promotion web page for **Blanes** (Costa Brava).
It includes multimedia content and an interactive cart where users select places to build a mini itinerary.
Each place also has a **detail page** with a longer description and an embedded **map**.

## 2) Page structure (wireframe)
**Top menu (Navbar)**
- Home / Places + (anchors on Home) + Cart button

**Home (`/`)**
- Hero (background: Cala Sa Forcanera image)
- Video section: `blanes-promo.mp4`
- Edited image section: `blanes-edited.jpg`
- Audio section: `blanes-soundscape.mp3` (30+ seconds)
- Places list: filters/sort + cards + add to cart + view details

**Places (`/places`)**
- Full list of places (same controls), optimized for navigation

**Place details (`/place/:placeId`)**
- Long description + highlights
- Embedded OpenStreetMap with marker (lat/lng)

**Cart drawer**
- List selected places + totals

## 3) Multimedia details
- Video: explain how you created/obtained it and how you optimized it (codec, resolution, bitrate).
- Edited image: describe the edits you made (color grading, text overlay, retouch).
- Audio: describe what it contains (ambient + narration/music), length, and edits (fade in/out, normalization).
- Home background image: explain the source and optimization of `sa-forcanera-hero.jpg`.

## 4) User interaction
The user can:
- Search / filter / sort places
- Add places to a cart (itinerary)
- Remove items, clear cart, view totals
- Open detail pages for each place to see description + map

## 5) How to run locally
```bash
npm install
npm start
```

## 6) Folder structure
- `src/components/`: modular UI components
- `src/pages/`: route pages (Home, Places, Place Details)
- `src/context/`: cart state management
- `src/data/`: places data (including coordinates)
- `public/media/`: optimized multimedia files
