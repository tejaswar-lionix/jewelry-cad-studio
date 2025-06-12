# Jewelry CAD Studio — Collaborative Parametric Jewelry Design

Niche CAD for custom jewelry: parametric shanks, gem settings, real-time PBR, collaborative editing with OT, versioned branches.

## Architecture
- **Backend:** Django 4.2 + DRF + Celery, PostgreSQL (sqlite fallback)
- **Frontend:** React 18 + Vite + Three.js (mock), Canvas
- **15 Apps:** canvas, geometry, shank, head, gem, metal, rendering, collab, versioning, constraints, catalog, export, simulation, pricing, frontend

## Install
```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
npm install
```

## Build
```bash
make build
docker build -t jewelry-cad .
npm run build
```

## Run
```bash
python manage.py migrate --run-syncdb
python manage.py runserver 0.0.0.0:8000
npm run dev
docker-compose up
```

## Tests
```bash
pytest -q
pytest --cov=apps --cov-report=xml
npm test
```

## Features
- **Parametric shank:** round/flat/knife-edge/tapered profiles, sizes 4-13, widths 1.5-8mm
- **Heads:** prong/bezel/halo/tension with prong count, stone security
- **Gem:** round/princess/oval/emerald cuts, carat/clarity/color, placement
- **Metal:** 14k/18k/platinum/rose, finish polished/matte
- **Rendering:** PBR + HDRI real-time preview
- **Collab:** OT, live cursors, comments
- **Versioning:** branch `feature/halo-setting`, visual diff, merge
- **Export:** STL/DXF/3MF/PDF/G-code for casting

## License
Proprietary — All rights reserved (Atelier Labs).
