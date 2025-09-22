const { parentPort, workerData } = require('worker_threads');

const fibonacci = (n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
parentPort.postMessage(fibonacci(workerData));
