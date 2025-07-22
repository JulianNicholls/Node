const { parseFile } = require('@fast-csv/parse');
const { ljust, rjust } = require('justify-text');

const records = [];

const adjustedRecord = (row) => {
  const adjustedRow = { ...row };

  adjustedRow.Timestamp = new Date(adjustedRow.Timestamp);
  adjustedRow.Distance = Number(adjustedRow.Distance);
  adjustedRow.Ping = Number(adjustedRow.Ping);
  adjustedRow.Download = Number(adjustedRow.Download);
  adjustedRow.Upload = Number(adjustedRow.Upload);

  for (const fieldName of Object.keys(adjustedRow)) {
    const unspaced = fieldName.replace(/ /g, '');

    if (unspaced !== fieldName) {
      adjustedRow[unspaced] = adjustedRow[fieldName];
      delete adjustedRow[fieldName];
    }
  }

  return adjustedRow;
};

function normalised(value) {
  return (value / 1_024_000).toFixed(1);
}

function collectRecord(row) {
  records.push(adjustedRecord(row));
}

function processRecords() {
  for (const rec of records) {
    const date = rec.Timestamp.toLocaleDateString('en-GB', {
        day: '2-digit', month: 'short', year: 'numeric',
      });

    console.log( `${ljust(date + ':', 14)}  ${ljust(rec.Sponsor, 30)}  ${ljust(
        rec.ServerName + ' (' + Math.round(rec.Distance) + 'Km)',
        22
      )}  ${rjust(rec.Ping.toFixed(1), 5)}ms ${rjust(normalised(rec.Download), 5)}MBit/s ${rjust(
        normalised(rec.Upload),
        5
      )}MBit/s`
    );
  }
}

function main(filename) {
  parseFile(filename, { headers: true })
    .on('error', (err) => {
      console.error(err);
      process.exit(1);
    })
    .on('end', processRecords)
    .on('data', collectRecord);
}

const [, , filename = '/Users/julian/speedtest.csv'] = process.argv;
main(filename);
