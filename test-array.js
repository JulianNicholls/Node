const { formatns } = require('./times');

const start1 = process.hrtime.bigint();

let a1 = [];

for (let i = 0; i < 10_000_000; ++i)
  a1.push(i);

const end1 = process.hrtime.bigint() - start1;


const start3 = process.hrtime.bigint();
a1 = new Array(10_000_000);
const end3 = process.hrtime.bigint() - start3;

const start2 = process.hrtime.bigint();

for (let i = 0; i < 10_000_000; ++i)
  a1.push(i);

const end2 = process.hrtime.bigint() - start2;

console.log(`Array 1 fill: ${formatns(end1)}
Array 2 allocation: ${formatns(end3)}
Array 2 fill: ${formatns(end2)}`);

