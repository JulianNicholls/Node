function dateFormat(date) {
    return date.getFullYear() + 
        ("0" + (date.getMonth() + 1)).slice(-2) +
        ("0" + (date.getUTCDate())).slice(-2) +
        ("0" + (date.getHours())).slice(-2) +
        ("0" + (date.getMinutes())).slice(-2);
}

const startStr = '2020-11-11T01:02:03.000Z'
const endStr = '2020-11-18T06:04:05.000Z';

const startDate = new Date(startStr);
const endDate = new Date(endStr);

const startStamp = dateFormat(startDate);
const endStamp = dateFormat(endDate);

console.log(startStr, startStamp);
console.log(endStr, endStamp);


const now = Math.floor(Date.now() / 1000);
console.log('Now:', now, now.toString(16));
