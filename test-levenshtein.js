const fs = require('fs');
const levenshtein = require('js-levenshtein');

const [, , left, right, d] = process.argv;

if (left && right && d) {
  const distance = levenshtein(left, right);

  console.log(`${left} - ${right}: ${distance}`);
} else {
  const text = fs.readFileSync(right, 'utf8');
  const lines = text.split(/\n/).filter((line) => line.length > 0);

  lines.forEach((line) => {
    const distance = levenshtein(left, line);

    console.log(`${distance}  ${left} - ${line}`);
  });
}
