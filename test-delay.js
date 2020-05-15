async function delay(time = 1000) {
  await new Promise(resolve => setTimeout(resolve, time));
}

async function testDelay() {
  await delay(2000);
}

console.log('Timing 2s...');
const start = process.hrtime.bigint();

testDelay().then(() => {
  const end = process.hrtime.bigint() - start;

  const ms = Number(end / 10000n);
  const secs = ms / 100;

  console.log(`end: ${secs.toFixed(1)}ms`);
});

