// const information = document.getElementById('info');
// information.innerHTML = `This app is using:
// <ul>
//   <li>Chrome: ${versions.chrome()}</li>
//   <li>Node.js: ${versions.node()}</li>
//   <li>Electron: ${versions.electron()}</li>
//   </ul>
//   `;

const btnGenerate = document.getElementById('btnGenerate');
const btnEncode = document.getElementById('btnEncode');
const password = document.getElementById('password');
const encoded = document.getElementById('encoded');
const check = document.getElementById('check');

const encode = async () => {
  const str = password.value;

  console.log({ str });

  const hash = await window.electronAPI.encode(str);

  encoded.innerText = hash;

  const checkOK = (await window.electronAPI.check(str, hash)) ? 'OK' : 'Nope!';

  check.innerText = checkOK;
};

const generate = () => {
  const symbols = '@#!$%&*+-/?';
  const numbers = '0123456789';
  const letters = 'qwertyuiopasdfghjklzxcvbnm';

  const randChar = (list) => list[Math.floor(Math.random() * list.length)];

  const char = () => {
    const rand = Math.random();

    if (rand <= 0.1)
      // 10% symbols
      return randChar(symbols);

    if (rand <= 0.3)
      // 20% Digits
      return randChar(numbers);

    if (rand <= 0.6)
      // 30% uppercase
      return randChar(letters).toUpperCase();

    return randChar(letters); // 40% lowercase
  };

  let pw = '';
  for (let i = 0; i < 10; i++) {
    pw += char();
  }

  password.value = pw;
};

btnEncode.addEventListener('click', encode);
btnGenerate.addEventListener('click', generate);
