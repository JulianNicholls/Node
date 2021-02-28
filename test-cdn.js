const { solve_numbers } = require('./cd-numbers');

for (let i = 101; i <= 140; ++i) {
  console.log(solve_numbers([3, 7, 8, 10, 5, 9], i));
}
