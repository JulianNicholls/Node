const fs = require('fs');

const content = fs.readFileSync('test-rfs.js');

try {
  const bad = fs.readFileSync('notafile.txt');
}
catch(err) {
  console.error('could not read notafile.txt');
}

