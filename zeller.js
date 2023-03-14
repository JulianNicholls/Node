const { rjust } = require('justify-text');

const zDays = [
  'Saturday',
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
];

// Algorithm here: https://en.wikipedia.org/wiki/Zeller%27s_congruence
// 0 = Saturday, 1 = Sunday etc
function zeller(day, month, year) {
  // 0..31, 1..12, full year
  const m = month < 3 ? month + 12 : month; // First 2 months of a year...
  const y = month < 3 ? year - 1 : year; // Work as 13 & 14 of the previous year
  const leap = Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400);

  const h = day + Math.floor((13 * (m + 1)) / 5) + y + leap;

  return h % 7;
}

// Same, but for Julian Dates.
// Many countries changed beginning 4/10/1582-15/10/1582.
// UK changed 02/09/1752-14/09/1752
function zellerJulian(day, month, year) {
  const m = month < 3 ? month + 12 : month;
  const y = month < 3 ? year - 1 : year;
  const leap = Math.floor(y / 4);

  const h = day + Math.floor((13 * (m + 1)) / 5) + y + leap + 5;

  return h % 7;
}

const tests = [
  [18, 3, 1967],
  [15, 6, 2020],
  [23, 1, 1997],
  [3, 9, 1939],
  [18, 11, 1970],
  [1, 1, 2000],
  [1, 3, 2000],
  [1, 1, 2020],
  [1, 3, 2020],
];

for (let item of tests) {
  const z2 = zeller(...item);

  console.log(
    `${rjust(item[0], 2, '0')}/${rjust(item[1], 2, '0')}/${item[2]}: ${z2} - ${
      zDays[z2]
    }`
  );
}

// Check 1752 (UK centric)
let z2 = zellerJulian(1, 1, 1752);
console.log(`\n01/01/1752 (Julian): ${z2} - ${zDays[z2]}`);

z2 = zellerJulian(2, 9, 1752);
console.log(`02/09/1752 (Julian): ${z2} - ${zDays[z2]}`);

z2 = zeller(14, 9, 1752);
console.log(`14/09/1752: ${z2} - ${zDays[z2]}`);

// Today
const today = new Date();
const [d, m, y] = [today.getDate(), today.getMonth() + 1, today.getFullYear()];
z2 = zeller(d, m, y);

console.log(`\nToday: (${('0' + d).slice(-2)}/${('0' + m).slice(-2)}/${y}) ${z2} - ${zDays[z2]}`);
