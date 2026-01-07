# Blanes — Tourism Promotion Web Page (React)

A modular React web page that promotes **Blanes** (Costa Brava).
It includes required multimedia (video, edited image, sec audio) and user interaction
(select places + cart), plus **detail pages** with **map locations**.

## How to run (local) in my case

Requirements:
- Node.js 18+ recommended
- npm

Steps:
```bash
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force
npm install
npm start
```

Then open: http://localhost:3000

## Pages / routes

- `/` — Home (multimedia sections + places list)
- `/places` — All places (list)
- `/place/:placeId` — Place details (description + map)

## Where to put the media files

Add on pucblic/media/ all the files
