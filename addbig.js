const add = (astr, bstr) => {
  const maxLen = Math.max(astr.length, bstr.length);
  const a = [...astr.padStart(maxLen, '0')];
  const b = [...bstr.padStart(maxLen, '0')];

  const result = a.reduceRight(
    (acc, digit, idx) => {
      const sum = +digit + +b[idx] + acc.carry;

      return { sum: (sum % 10) + acc.sum, carry: Math.floor(sum / 10) };
    },
    { sum: '', carry: 0 }
  );

  return result.carry ? '1' + result.sum : result.sum;
};

console.assert(add('456', '123') === '579');
console.assert(add('456', '545') === '1001');

let result = add(
  '1999999999999999994926543050000000000000000001',
  '9000000000000000006000008456593280000000000001'
);

console.assert(
  result === '11000000000000000000926551506593280000000000002',
  result
);

result = add(
  '6576540967436508695743605478685904365743865043675468058476509473658409367549067543609574',
  '7527501254319058473584093257439205743895043574309257439025473259043275439025754875380243'
);

console.assert(
  result ===
    '14104042221755567169327698736125110109638908617984725497501982732701684806574822418989817',
  result
);
