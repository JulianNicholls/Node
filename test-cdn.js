const { solve_numbers } = require('./cd-numbers');

const [, , n1, n2, n3, n4, n5, n6, target] = process.argv;

if (n1) {
  const numbers = [n1, n2, n3, n4, n5, n6].map((i) => parseInt(i, 10));
  console.log(solve_numbers(numbers, target));
}
else
  for (let i = 101; i <= 140; ++i) {
    console.log(solve_numbers([3, 7, 8, 10, 5, 9], i));
  }
