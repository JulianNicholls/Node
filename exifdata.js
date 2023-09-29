const ExifReader = require('exifreader');

const interestingTags = [
  'GPSAltitude',
  'GPSLatitude',
  'GPSLongitude',
  'GPSImgDirection',
  'GPSDestBearing',
  'GPSDateStamp',
  'DateCreated',
  'Make',
  'Model',
];

async function main(filename, all) {
  try {
    const tags = await ExifReader.load(filename);
    const tagList = all ? Object.keys(tags).sort() : interestingTags;

    for (const name of tagList) {
      console.log({ [name]: JSON.stringify(tags[name]) });
    }

    if (all === 'json') {
      console.log('Stringified:\n');
      console.log(JSON.stringify(tags));
    }
  } catch (err) {
    console.error(err);
  }
}

const [, , filename = '/Users/julian/Pictures/IMG_0709.HEIC', all = ''] = process.argv;

main(filename, all);
