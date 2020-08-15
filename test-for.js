let str = 'string';
let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = { a: 'one', b: 'two', c: 'three', d: 'four', e: 'five' };

console.log({string: str, array: arr, object: obj});

let strout = '\nfor...of str: ';

for (item of str) {
  strout += `${item} `;                       // Characters
}

console.log(strout, '(characters)');

strout = 'for...of arr: ';

for (item of arr) {
  strout += `${item} `;                       // Values
}

console.log(strout, '(values)');

//
// Can't do for...of over an object
// for (item of obj) {
//   console.log('obj item', item);
// }

console.log("\nCan't do for...of over a whole object\n");

strout = 'for...of Object.entries: ';

for (item of Object.entries(obj)) {
  strout += `[${item}] `;                       // [key, value]s
}

console.log(strout, '(key, value pairs)');

strout = 'for...of Object.keys: ';

for (item of Object.keys(obj)) {              
  strout += `${item} `;                       // Keys
}

console.log(strout, '(keys)');

strout = '\nfor...in str: ';

for (item in str) {
  strout += `${item} `;                       // Indices
}

console.log(strout, '(indices)');

strout = 'for...in arr: ';

for (item in arr) {
  strout += `${item} `;                       // Indices
}

console.log(strout, '(indices)');

strout = 'for...in obj: ';

for (item in obj) {
  strout += `${item} `;                       // Keys
}

console.log(strout, '(keys)');

strout = 'for...in Object.entries: ';

for (item in Object.entries(obj)) {
  strout += `${item} `;                       // Indices
}

console.log(strout, '(indices)');

strout = 'for...in Object.keys: ';

for (item in Object.keys(obj)) {
  strout += `${item} `;                       // Indices
}

console.log(strout, '(indices)');

