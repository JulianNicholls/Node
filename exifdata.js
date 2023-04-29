const ExifReader = require('exifreader');

const interestingTags = [
  'GPSLatitude',
  'GPSLongitude',
  'GPSImgDirection',
  'GPSDestBearing',
  'GPSDateStamp',
];

async function main(filename) {
  const tags = await ExifReader.load(filename);

  for (const name of interestingTags) {
    console.log({ [name]: JSON.stringify(tags[name]) });
  }
}

const [, , filename = '/Users/julian/Pictures/IMG_0709.HEIC'] = process.argv;

main(filename);
