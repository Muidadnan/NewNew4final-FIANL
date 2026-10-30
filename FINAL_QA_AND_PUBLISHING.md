# The Aisle Effect — technical and source notes

**Published website:** https://muidadnan.github.io/NewNew4final-FIANL/

## Project structure

The root contains `index.html`, `style.css`, `scripts/main.js`, fourteen human-readable `charts/NN.json` files and source/derived CSV tables in `data/`. GitHub Pages serves the one-page site directly from `main`.

## Visualisation design

The first chapter distinguishes absolute outlet counts from population-adjusted rates with a choropleth, ranking slopegraph, circle cartogram and dot-density map. The second chapter compares the retailers with grouped bars, connected dots, a population scatterplot, a genuine retailer-first hierarchical treemap and parallel coordinates. The third chapter explains historical national grocery-sales shares with a waffle chart and two comparison charts. The fourth chapter uses a line chart and heatmap for ABS food-retailing turnover.

## Data definitions

- Woolworths: 1,142 recorded supermarket locations in the 2026 state snapshots.
- Coles: 878 recorded supermarket locations in the same eight jurisdictions.
- Combined: 2,020 recorded two-chain locations.
- Population-adjusted rate: two-chain outlets divided by ABS March 2026 population, multiplied by 100,000.
- ACCC FY2022–23 national take-home food and grocery sales: Woolworths 32.5% plus Coles 24.8% equals 57.3%. This is distinct from the ACCC's approximately 67% estimate using a narrower supermarket-retail-sales denominator.
- ABS monthly food-retailing turnover is seasonally adjusted and expressed in current-price AUD millions; it includes more than supermarkets and does not measure real quantities purchased.

## Technical choices

The charts use Vega or Vega-Lite and SVG rendering. Data sources are named alongside the graphics and listed with URLs in `data/SOURCES.md`. A local CSV hierarchy supports the nested treemap; the circle cartogram and equal-area tile positions are explicitly schematic. Hover tooltips and limited selections supplement, rather than replace, the written narrative. The site footer records authorship, date and ChatGPT assistance.

## Reproducibility boundaries

The source JSON and CSV files are publicly available in the repository. Geographic maps use an external Australian state-boundary GeoJSON; the chart libraries are served from a public CDN. These are runtime dependencies, and the source files alone do not constitute an independent live-browser test.
