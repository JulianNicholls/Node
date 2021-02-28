/* eslint-disable @typescript-eslint/no-var-requires */
const { rjust } = require('justify-text');

exports.formatns = (value, size = 0) => {
  const us = Number(value / 1000n); // Convert to us
  let fs;

  if (us > 1_000_000) {
    fs = (us / 1_000_000).toFixed(3) + ' s';
  } else if (us > 1000) {
    fs = (us / 1000).toFixed(1) + 'ms';
  } else fs = us.toFixed(1) + 'ns';

  if (size === 0) return fs;

  return rjust(fs, size);
};
