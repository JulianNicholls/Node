#! /usr/bin/env node

const md5 = require('md5');

if (!process.argv[2] || process.argv[2] === '-h') {
  console.log('Usage:\nmd5text [text]');
  process.exit(0);
}

console.log(md5(process.argv[2]));
