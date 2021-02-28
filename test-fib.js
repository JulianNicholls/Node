const { rjust } = require('justify-text');
const { formatns } = require('./times');

const memo = [0n, 1n, 1n];

const fibRec = (number) => {
  if (number < 2) return 1n;

  return fibRec(number - 1) + fibRec(number - 2);
};

const fibMemo = (number) => {
  if (memo[number]) return memo[number];

  memo[number] = fibMemo(number - 1) + fibMemo(number - 2);
  return memo[number];
};

const test = (value = 0) => {
  if (value != 0) {
    const start = process.hrtime.bigint();
    const fi = fibMemo(value);
    const recEnd = process.hrtime.bigint() - start;

    return console.log(`${rjust(value, 4)} (${formatns(recEnd)}): ${fi}`);
  }

  for (let i = 200; i <= 300; i += 10) {
    const start = process.hrtime.bigint();
    const fi = fibMemo(i);
    const recEnd = process.hrtime.bigint() - start;

    console.log(`${rjust(i, 5)}  ${rjust(fi, 70)}  ${formatns(recEnd, 9)}`);
  }
};

const [, , value] = process.argv;

if (value) test(value);
else test();
