const imageToAscii = require('image-to-ascii');

const fileURL =
  process.argv[2] ||
  'https://d2vqpl3tx84ay5.cloudfront.net/500x/tumblr_lsus01g1ik1qies3uo1_400.png';

imageToAscii(
  fileURL,
  {
    colored: true,
  },
  (err, converted) => {
    console.log(err || converted);
  }
);
