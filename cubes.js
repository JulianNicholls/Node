const { rjust } = require('justify-text');

for (let i = 11; i < 100; ++i) {
  console.log(`${i}: ${rjust((i ** 3).toString(), 7)}`);
}
