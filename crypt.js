const bcrypt = require('bcryptjs');

const [, , password, otherHash] = process.argv;

const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(password, salt);

console.log(password, '=>', hash);
console.log('OK:', bcrypt.compareSync(password, hash));
if (otherHash) console.log(`${otherHash} OK:`, bcrypt.compareSync(password, otherHash));
