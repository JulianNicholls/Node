const bcrypt = require('bcryptjs');

const password = process.argv[2];

const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(password, salt);

console.log(password, '=>', hash);
console.log('OK:', bcrypt.compareSync(password, hash));
