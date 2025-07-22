#! node

const [, , date] = process.argv;

console.log(date, '=>', (new Date(date).getTime()/1000).toString(16).padEnd(24, '0'));
