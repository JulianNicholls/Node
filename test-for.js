let str = 'string';
let arr = [1, 2, 3, 4, 5];
let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };

for (item of str) {
  console.log('of str item', item);           // Characters
}

for (item of arr) {
  console.log('of arr item', item);           // Values
}

// Can't do for...of over an object
// for (item of obj) {
//   console.log('obj item', item);
// }

for (item of Object.entries(obj)) {
  console.log('of obj entry item', item);     // [key, value]s
}

for (item of Object.keys(obj)) {              // Keys
  console.log('of obj entry item', item);
}


for (item in str) {
  console.log('in str item', item);           // Indices
}

for (item in arr) {
  console.log('in arr item', item);           // Indices
}

for (item in obj) {
  console.log('in obj item', item);           // Keys
}

for (item in Object.entries(obj)) {
  console.log('in obj entry item', item);     // Indices
}

for (item in Object.keys(obj)) {
  console.log('in obj entry item', item);     // Indices
}

