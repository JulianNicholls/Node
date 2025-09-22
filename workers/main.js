const { Worker } = require('worker_threads');

const computeFibonacci = (num) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./fib.js', { workerData: num });

    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
};

async function main() {
  const results = await Promise.all([
    computeFibonacci(45),
    computeFibonacci(43),
    computeFibonacci(44),
    computeFibonacci(45),
    computeFibonacci(42),
  ]);
  console.log(results);
}

main();
