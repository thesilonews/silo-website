const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/**
 * Formats a Date as "Month D, YYYY" in America/Denver time.
 * Uses manual UTC math rather than Intl to avoid server/client locale drift.
 */
export function formatStoryDate(date: Date): string {
  const utcYear = date.getUTCFullYear();
  // MDT (UTC-6): 2nd Sunday of March at 02:00 MST = 09:00 UTC
  // MST (UTC-7): 1st Sunday of November at 02:00 MDT = 08:00 UTC
  const mdtStart = nthSundayUTC(utcYear, 2, 2, 9);  // March, 2nd Sunday, 09:00 UTC
  const mstStart = nthSundayUTC(utcYear, 10, 1, 8); // November, 1st Sunday, 08:00 UTC
  const offsetMin = date >= mdtStart && date < mstStart ? -6 * 60 : -7 * 60;

  const local = new Date(date.getTime() + offsetMin * 60_000);
  return `${MONTHS[local.getUTCMonth()]} ${local.getUTCDate()}, ${local.getUTCFullYear()}`;
}

/** Returns the Nth (1-based) Sunday of the given UTC month/year at the given UTC hour. */
function nthSundayUTC(year: number, month: number, nth: number, utcHour: number): Date {
  const firstOfMonth = new Date(Date.UTC(year, month, 1));
  const daysToSunday = (7 - firstOfMonth.getUTCDay()) % 7;
  const day = 1 + daysToSunday + (nth - 1) * 7;
  return new Date(Date.UTC(year, month, day, utcHour));
}
