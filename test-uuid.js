const { v1: uuidv1 } = require('uuid');

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const raw = async () => {
  console.log('No options');

  for (let idx = 0; idx < 10; ++idx) {
    const id = uuidv1();
    console.log(`${idx}: ${id}`);
    await sleep(500);
  }
}

const optioned = async () => {
  console.log('\nWith options');

  const options = {
    clockseq: 0x3421
  };

  for (let idx = 0; idx < 10; ++idx) {
    const id = uuidv1(options);
    console.log(`${idx}: ${id}`);
    await sleep(500);
  }
}

const main = async () => {
  await raw();
  await optioned();
}

main();
