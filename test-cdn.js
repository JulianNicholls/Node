const { serialisedResult, solve_numbers } = require('./cd-numbers');

const [, , n1, n2, n3, n4, n5, n6, target] = process.argv;

if (n1) {
  const numbers = [n1, n2, n3, n4, n5, n6].map((i) => parseInt(i, 10));
  console.log(serialisedResult(numbers, parseInt(target, 10)));
  console.log(solve_numbers(numbers, parseInt(target, 10)));
}
else
  for (let i = 101; i <= 999; ++i) {
    console.log(solve_numbers([3, 7, 25, 50, 75, 100], i));
  }
