const fs = require('fs');

function toString(fn) {
  const text = fs.readFileSync(fn, 'utf8');
  const lines = text.split(/\n/);

  const htmlText = lines
    .filter(line => line)
    .map(line => line.replace(/"/g, '\\"'))
    .map(line => `"${line}"`)
    .join('\n');

  return `const char html[] = ${htmlText};\n`;
}

const filename = process.argv[2] || 'index.html';

console.log(toString(filename));
