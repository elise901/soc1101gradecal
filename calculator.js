/* Course policy: 11 online classes worth 30 points total, 13 attendance points. */
function calculateGrade(x, y, z) {
  if (![x, y, z].every(Number.isFinite) || x < 0 || x > 100 || !Number.isInteger(y) || y < 0 || y > 11 || !Number.isInteger(z) || z < 0 || z > 13) throw new RangeError('Check your entries.');
  const baseline = x * 0.6 + (11 - y) * (30 / 11) + (13 - z);
  const maximum = x * 0.35 + 30 + (13 - z) + 25;
  const cap = n => Math.max(0, Math.min(100, n));
  return { baseline, low: cap(baseline - 9), high: cap(baseline + 2), hours: y * 1.5, points: y * (30 / 11), maximum: cap(maximum) };
}
if (typeof module !== 'undefined') module.exports = { calculateGrade };
