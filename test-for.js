let str = 'string';
let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = { a: 'one', b: 'two', c: 'three', d: 'four', e: 'five' };

console.log({ string: str, array: arr, object: obj });

let strout = '\nfor...of string: ';

for (const item of str) {
  strout += `${item} `; // Characters
}

console.log(strout, '(characters)');

strout = 'for...of array: ';

for (const item of arr) {
  strout += `${item} `; // Values
}

console.log(strout, '(values)');

//
// Can't do for...of over an object
// for (item of obj) {
//   console.log('obj item', item);
// }

console.log("\nCan't do for...of over a whole object\n");

strout = 'for...of Object.entries(obj): ';

for (const item of Object.entries(obj)) {
  strout += `[${item}] `; // [key, value]s
}

console.log(strout, '(2 element arrays)');

strout = 'for...of Object.entries(obj), dereferenced: ';

for (const [key, value] of Object.entries(obj)) {
  strout += `${key}=${value} `; // key=value
}

console.log(strout, '(key, value pairs)');

strout = 'for...of Object.keys(obj): ';

for (const item of Object.keys(obj)) {
  strout += `${item} `; // Keys
}

console.log(strout, '(keys)');

strout = 'for...of Object.values(obj): ';

for (const item of Object.values(obj)) {
  strout += `${item} `; // Values
}

console.log(strout, '(values)');

strout = '\nfor...in string: ';

for (const item in str) {
  strout += `${item} `; // Indices
}

console.log(strout, '(indices)');

strout = 'for...in array: ';

for (const item in arr) {
  strout += `${item} `; // Indices
}

console.log(strout, '(indices)');

strout = 'for...in obj: ';

for (const item in obj) {
  strout += `${item} `; // Keys
}

console.log(strout, '(keys)');

strout = '\nfor...in Object.entries: ';

for (const item in Object.entries(obj)) {
  strout += `${item} `; // Indices
}

console.log(strout, '(indices)');

strout = 'for...in Object.keys: ';

for (const item in Object.keys(obj)) {
  strout += `${item} `; // Indices
}

console.log(strout, '(indices)');

strout = 'for...in Object.values: ';

for (const item in Object.values(obj)) {
  strout += `${item} `; // Indices
}

console.log(strout, '(indices)');
