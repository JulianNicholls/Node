let triangle = [1n, 1n];
let oddcount = 3;
let numcount = 3;

console.log('[1]\n[1, 1]');

const rows = process.argv[2] > 1 ? parseInt(process.argv[2], 10) : 128;

for(let i = 2; i < rows; ++i) {
  const nextline = [1n];

  for(let j = 0; j < triangle.length - 1; ++j) {
    const sum = triangle[j] + triangle[j + 1];

    ++numcount;
    if(sum % 2n === 1n) ++oddcount;
    nextline.push(sum)
  }

  nextline.push(1n);

  numcount += 2;
  oddcount += 2;

  triangle = nextline;
  console.log(triangle)
}

console.log(`
Rows:    ${rows}
Numbers: ${numcount}
Odd:     ${oddcount}
Percent: ${(oddcount / numcount) * 100}
`);
