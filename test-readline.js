const readline = require('node:readline');
const util = require('node:util');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  const question = util.promisify(rl.question).bind(rl);

  const answer = await question('What now?');

  console.log(answer);
}
// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

main();
