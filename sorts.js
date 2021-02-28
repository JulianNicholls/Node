const { rjust } = require('justify-text');

const { formatns } = require('./times');

const RANDOM = 0;
const SORTED = 1;
const REVERSE = 2;

const TYPES = ['Random', 'Already Sorted', 'Reverse Order'];

let testarray;

function shellsort(a) {
  const len = a.length;
  let stride = len;
  let done = false;

  while (!done) {
    let swapped;
    stride = Math.floor(stride / 2);

    do {
      swapped = false;

      for (let i = 0; i < len - stride; ++i) {
        if (a[i] > a[i + stride]) {
          swap(a, i, i + stride);
          swapped = true;
        }
      }
    } while (swapped);

    if (stride === 1) done = true;
  }
}

// Call with mergesort(array)
function mergesort(a) {
  const b = [...a];
  mergeSplit(b, 0, a.length, a);
}

function mergeSplit(b, begin, end, a) {
  if (end - begin < 2) return;

  const middle = Math.floor((end + begin) / 2);

  mergeSplit(a, begin, middle, b);
  mergeSplit(a, middle, end, b);

  merge(b, begin, middle, end, a);
}

function merge(a, begin, middle, end, b) {
  let i = begin;
  let j = middle;

  for (let k = begin; k < end; ++k) {
    if (i < middle && (j >= end || a[i] <= a[j])) {
      b[k] = a[i];
      ++i;
    } else {
      b[k] = a[j];
      ++j;
    }
  }
}

// Call with quicksort(array, 0, length - 1)
function quicksort(a, lo, hi) {
  if (lo < hi) {
    const p = partition(a, lo, hi);

    quicksort(a, lo, p);
    quicksort(a, p + 1, hi);
  }
}

function partition(a, lo, hi) {
  const pivot = a[Math.floor((lo + hi) / 2)];
  let i = lo - 1;
  let j = hi + 1;

  for (;;) {
    ++i;
    --j;
    while (a[i] < pivot) ++i;
    while (a[j] > pivot) --j;

    if (i >= j) return j;

    swap(a, i, j);
  }
}

function swap(a, i1, i2) {
  const tmp = a[i1];
  a[i1] = a[i2];
  a[i2] = tmp;
}

function checkSorted(a, silent = true) {
  const len = a.length;

  for (let i = 0; i < len - 1; ++i) {
    if (a[i] > a[i + 1]) {
      console.error('NOT SORTED!');
      return;
    }
  }

  if (!silent) console.log('Sorted\n');
}

function showGC() {
  const formatMemory = (value) => {
    const k = value / 1024;

    if (k < 1024) return Math.floor(k) + 'K';

    const m = Math.round(k / 102);

    return m / 10 + 'M';
  };

  const { rss, heapTotal, heapUsed } = process.memoryUsage();

  console.info(
    `RSS: ${formatMemory(rss)}, Heap: ${formatMemory(heapUsed)} of ${formatMemory(
      heapTotal
    )}`
  );
}

function newArray(size, type = RANDOM) {
  if (type === RANDOM)
    return new Array(size).fill(0).map(() => Math.floor(Math.random() * size));

  const array = new Array(size).fill(0).map((_, idx) => idx); // Sorted array

  if (type === REVERSE) return array.reverse();

  return array;
}

// Small test (default 10000 items)
function smallTest(size = 10000) {
  testarray = newArray(size, RANDOM);
  console.log(`Shellsort ${size} items.`);
  let start = process.hrtime.bigint();
  shellsort(testarray);
  const shellEnd = process.hrtime.bigint() - start;
  checkSorted(testarray, false);
  console.log(formatns(shellEnd));
}

// Full test (100000-50000000 items)
function fullTest(sizes = 8) {
  const coeffs = [2, 2.5, 2];

  for (let type = 0; type < TYPES.length; ++type) {
    console.log(`\n\t${TYPES[type]}`);
    let size = 100_000;

    console.log('            ShellSort  MergeSort  QuickSort  JS sort()');

    for (let i = 0; i < sizes; ++i) {
      testarray = newArray(size, type);
      let start = process.hrtime.bigint();
      mergesort(testarray);
      const mergeEnd = process.hrtime.bigint() - start;
      checkSorted(testarray);

      testarray = newArray(size, type);
      start = process.hrtime.bigint();
      shellsort(testarray);
      const shellEnd = process.hrtime.bigint() - start;
      checkSorted(testarray);

      testarray = newArray(size, type);
      start = process.hrtime.bigint();
      quicksort(testarray, 0, testarray.length - 1);
      const q2End = process.hrtime.bigint() - start;
      checkSorted(testarray);

      testarray = newArray(size, type);
      start = process.hrtime.bigint();
      testarray.sort((a, b) => a - b);
      const sortEnd = process.hrtime.bigint() - start;
      checkSorted(testarray);

      let min = 'QuickSort';

      if (mergeEnd < q2End && mergeEnd < sortEnd) min = 'MergeSort';
      else if (sortEnd < q2End && sortEnd < mergeEnd) min = 'JS sort()';

      console.log(
        `${rjust(size.toString(), 9)}: ${formatns(shellEnd, 9)}  ${formatns(
          mergeEnd,
          9
        )}  ${formatns(q2End, 9)}  ${formatns(sortEnd, 9)}    Fastest: ${min}`
      );

      size *= coeffs[i % 3];
    }
  }
}

smallTest(10_000_000);

// fullTest(5);
