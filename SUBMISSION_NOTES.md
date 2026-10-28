# FIT3179 DV2 — Moodle submission draft (customise before submitting)

**Do not submit this Markdown file as the required Moodle template.** Copy the appropriate answers into the official `DV2 - Assignment Template v3.0` and fill the placeholders.

## Part A — Public URL

`[INSERT PUBLIC GITHUB PAGES URL AFTER UPLOADING THIS PROJECT]`

Check in an incognito browser: the page and all 14 charts must be accessible without signing in.

## Part B — Domain, Who, Why, What, How

**Domain.** Supermarket Shopping, within the Shopping & Consumer Life domain. My visualisation focuses on the physical distribution of Coles and Woolworths stores in Australia, the national market for take-home food and grocery sales, and changes in food-retailing turnover.

**Who.** The intended audience is an interested Australian shopper without specialist knowledge of statistics or data visualisation. The visualisation uses familiar brands and state names, plain-language explanations, and interactive tooltips.

**Why.** The aim is to show why a large number of stores does not necessarily mean better access for residents, and why store counts are different from market share. Readers can compare absolute and population-adjusted footprints, see historical sales concentration, and distinguish nominal food-retailing turnover from the amount of food bought.

**What.** I combined several public datasets. ScrapeHero's September–October 2026 state-level store-count snapshots cover Woolworths and Coles supermarkets. ABS March 2026 population estimates provide denominators for stores per 100,000 residents. ACCC estimates describe the shares of national take-home food and grocery sales in 2002–03, 2006–07 and 2022–23. ABS Retail Trade monthly seasonally adjusted food-retailing turnover covers June 2020 to June 2025. I derived combined totals, store-density ratios, a brand→state hierarchy, percentage-point differences, ranking tables, a rounded 100-cell waffle representation and year-on-year percentage changes. The visualisation distinguishes these measures and periods; no observational data were invented.

**How.** Three primary map idioms show the same store-count data from different perspectives: a choropleth uses sequential colour for outlets per 100,000 residents, a proportional-symbol map uses circle area for absolute state totals, and a Dorling-style cartogram replaces polygons with non-overlapping circles to compare totals without land-area dominance. An additional schematic equal-tile map gives every state equal visual area. Grouped bars show absolute retailer counts, while connected dots compare two population-normalised densities in each state. A population-versus-store-count scatterplot compares state totals against the nationwide average rate, while a genuine nested treemap encodes a brand→state hierarchy using rectangle area proportional to store count; parallel coordinates compare the four state indicators on independently normalised axes, while a 100-cell waffle communicates a rounded part-to-whole sales share. A bump chart highlights historical rank changes and a diverging bar chart shows percentage-point shifts. Finally, a monthly line chart communicates nominal turnover over time and a year-month heatmap reveals recurring variation. Tooltips and click-to-highlight legends provide focused exploration. A warm editorial layout, clear captions and data cautions guide the reader from geographic footprint to market structure and spending.

**AI acknowledgement.** OpenAI ChatGPT (October 2026) assisted with coding, Vega/Vega-Lite specifications, visual-design revisions, derived-data checks, editorial text and critique. I reviewed the project and checked source figures against the attributed datasets. **Edit this statement to reflect the work you actually performed.**

## Part C — Hand-drawn sketch

`[INSERT LINK TO YOUR OWN SCANNED HAND-DRAWN A4 SKETCH PDF IN YOUR GITHUB REPOSITORY]`

Insert the sketch image in the template. The rubric says digitally produced sketches score zero. See `SKETCH_GUIDE.md` for a paper sketch plan.

## Part D — Full-page screenshot

`[INSERT FULL-PAGE SCREENSHOT OF YOUR LIVE GITHUB PAGES WEBSITE]`

## Interview practice

1. Why do absolute state store counts and per-capita rates tell different stories?
2. Explain the differences among a choropleth, proportional-symbol map, Dorling-style cartogram and schematic tile map.
3. What makes chart 08 a genuine treemap rather than just a collection of rectangles?
4. What is the hierarchy in chart 08, and what determines a rectangle's area?
5. Why is the 57.3% sales share not the same as the two chains' share of stores?
6. Why did you round 57.3% to 57 cells in the waffle chart?
7. Why is a line more appropriate than a truncated-baseline area chart for the ABS turnover series?
8. What do the marks, channels, interactions and data transformations in your charts mean?
9. Which data sources and time periods do you use, and what are their limitations?
10. How does `fetch()` plus `vegaEmbed()` turn JSON chart specifications into graphics on your website?
