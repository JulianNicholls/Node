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
const copyPassword = document.getElementById('copy-password');
const encoded = document.getElementById('encoded');
const copyEncoded = document.getElementById('copy-encoded');
const check = document.getElementById('check');
const copied = document.getElementById('copied');

const encode = async () => {
  const str = password.value;

  console.log({ str });

  const hash = await window.electronAPI.encode(str);

  encoded.value = hash;

  const checkOK = (await window.electronAPI.check(str, hash)) ? 'OK' : 'Nope!';

  check.innerText = checkOK;

  copyEncoded.style.display = 'block';
};

const generate = () => {
  const symbols = '@#!$%&*+-/?';
  const numbers = '0123456789';
  const letters = 'qwertyuiopasdfghjklzxcvbnm';

  const randChar = (list) => list[Math.floor(Math.random() * list.length)];

  const char = () => {
    const rand = Math.random();

    // 10% symbols
    if (rand <= 0.1) return randChar(symbols);

    // 20% Digits
    if (rand <= 0.3) return randChar(numbers);

    // 30% uppercase
    if (rand <= 0.6) return randChar(letters).toUpperCase();

    // 40% lowercase
    return randChar(letters);
  };

  let pw = '';

  for (let i = 0; i < 10; i++) {
    pw += char();
  }

  password.value = pw;

  // It makes sense to encode it automatically when it's generated.
  encode();
};

const copyToClipboard = (element) => {
  // Select the text field
  element.select();
  element.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(element.value);

  copied.style.display = 'block';

  setTimeout(() => {
    copied.style.display = 'none';
  }, 1000);
};

btnEncode.addEventListener('click', encode);
btnGenerate.addEventListener('click', generate);

copyPassword.addEventListener('click', () => copyToClipboard(password));
copyEncoded.addEventListener('click', () => copyToClipboard(encoded));
