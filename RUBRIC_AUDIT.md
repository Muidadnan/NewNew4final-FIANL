# FIT3179 DV2 — high-distinction target audit

Source: official FIT3179 Data Visualisation 2 v1.2 rubric, pp. 5–6. This is not a mark guarantee.

| Category | Max | Status |
|---|---:|---|
| Sketch | 2% | **Student action**: original hand-drawn A4, four clear sections, screenshot/PDF link. Not possible to substitute a digitally generated sketch. |
| Idioms/complexity | 8% | 14 panels, at least 8 strong advanced idioms (3 maps, treemap, parallel-coordinates, waffle, bump, heatmap) without relying on the supplementary tile map or connected-dot classification, 3 distinct maps; validate suitability/individual chart counting with tutor. |
| Layout / colour / figure-ground | 3% | New themed editorial layout; columns, alignment, card containment, warm/blue chapter contrast, fewer empty spaces, consistent retailer colour across charts. |
| Typography | 2% | Fraunces headline, Space Grotesk headings, DM Sans text, consistent hierarchy and responsive sizing. |
| Storytelling / annotation / style | 5% | Four chapters, 14 visible evidence notes with quantified findings, 14 chart-specific why-this-idiom rationales, 14 expandable implementation/limitations explanations, and a compact 6-term glossary, top-level claims and compact conclusions; grammar and data dates labelled. |
| Domain / Who / What / Why / How | 2% | Australian supermarket shopping / average Australian / reliable state counts, population, historic sales shares, food turnover / compare extent, concentration, money over time / targeted idioms and explanatory annotations. |
| Interview | 3% | Student must explain code, sources, visual channels, use of AI, and limitations. |

**Specific design/data fixes:**

- One sequential palette for yearly growth heatmap; negative values can be low on same scale. If strong symmetric positive/negative changes were central, a diverging scale would normally be appropriate, but here the data are mostly positive.
- Vega treemap requires a real hierarchy (`All stores` → retailer → state). The data contain each state count exactly once as a leaf. Sum Woolworths=1142, Coles=878, total=2020.
- Waffle 57 cells communicates rounded 57.3% (FY2022–23). The chart does **not** imply a 2026 share.
- Avoid misleading area chart with non-zero baseline; nominal turnover is shown with a line.
- Added distinct questions: absolute count versus population.
- Preserved all three different map idioms: actual state polygon choropleth, geographic symbol map, schematic circle cartogram. Fourth tile map is extra.

**External dependency warning:** Vega libraries are loaded from jsDelivr and Australian boundary GeoJSON from GitHub; the offline execution environment cannot fully render these assets. Check the live deployed page for errors.

**Student completion:** draft domain description/Who/Why/What/How in `SUBMISSION_NOTES.md`; user must supply sketch, author info, full-page screenshot and verify deployed link. User must not claim copied inspiration sites' code or other people's charts as their own.

## Final QA results — 28 Oct 2026

- 14 chart JSON files parse successfully; every local CSV reference is present.
- Figures cross-check: Woolworths **1,142** + Coles **878** = **2,020** outlets; market shares sum to 100%; Woolworths 32.5% + Coles 24.8% = 57.3%.
- Per-capita state rates and shares recomputed independently to within rounding precision.
- Year-on-year ABS turnover calculations recomputed against corresponding month of prior year.
- Cartogram circles do not overlap in configured coordinates when scaled by pixel area.
- 14 explicit analytical explanations, 14 source citations and chart JSON links, 14 method notes, four chapter-level analysis sections, six glossary entries.
- Responsive layout inspected with placeholder SVGs at 1440, 900, 680 and 390px; no horizontal overflow. **This did not verify live Vega rendering or external data downloads.**
- Three clearly separated principal maps: geographic choropleth, proportional symbols on geographic map, manually arranged geographic-approximate non-overlapping circle cartogram. Equal-size tile-grid map is additional.

**Academic integrity/marking:** Only the marker can determine chart complexity and the final mark. The student still must submit their genuinely hand-drawn sketch and verify the published charts in a normal online browser.


## Additional rubric audit update

The 29 October story/clarity revision is documented in `RUBRIC_AUDIT_2026_FINAL_REVIEW.md` and `STORY_AND_INTERVIEW_GUIDE.md`. It tightens claim scope and improving legibility of charts 03, 07, and 09. It does **not** verify full live Vega rendering, the hand-drawn sketch, or interview performance.

## Final 28 October corrections

The final source/visual review corrected a stale Coles source URL (the correct page is the September 28 snapshot), separated the ACCC's take-home grocery-sales share of 57.3% from its separate ~67% supermarket retail-sales estimate, made chart 07's pooled-rate line independent of the scatter observations, and fixed chart 14's small negative labels. The exported HTML is now readable for the interview. See `FINAL_QA_AND_PUBLISHING.md` for validation outcomes and unverified live-rendering items.
