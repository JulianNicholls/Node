const numbers = new Array(20).fill(0).map((e, i) => i);

console.log(numbers);

// Conditionally returning an entry puts undefined
// in for the rest.
const mapped = numbers.map((num) => {
  if (num % 3 == 0) return num;
});

console.log(mapped);

const mappedNull = numbers.map((num) => {
  if (num % 3 == 0) return num;
  return null;
});

console.log(mappedNull);
