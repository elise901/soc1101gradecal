# soc1101gradecal
A small gadget to calculate your grade and estimated work

Open `index.html` to use the calculator. Keep `calculator.js` beside it. Upload both files to your GitHub Pages publishing folder. No build step, external libraries, tracking, or server is required.

The 11 online classes together are worth 30%: each contributes exactly 30/11 course points. Catch-up credit is y × (30/11). Calculations retain full precision and results display one decimal place. The supplied scoring components can total 103; displayed grades are capped at 100, with the lower estimate floored at zero. No letter-grade thresholds have been assumed.

The future assessment in the first scenario is interpreted as the final exam (the midterm is already entered). The maximum scenario holds the writing assignment at the midterm score and assumes a perfect final exam. Catch-up credit assumes full credit for completed online work.

Entries are held only in the page; there is no storage or submission. Refreshing clears them.
