const socket = io({
  auth: {
    serverOffset: 0,
  },
  // enable retries
  ackTimeout: 10000,
  retries: 3,
});

const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');
// const toggleBtn = document.getElementById('toggle-btn');

let counter = 0;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (input.value) {
    // Compute a unique offset
    const clientOffset = `${socket.id}-${counter++}`;

    socket.emit('chat message', input.value, clientOffset);
    input.value = '';
  }
});

// This is no use, an explicit disconnect disables the connection recovery.
// toggleBtn.addEventListener('click', (e) => {
//   e.preventDefault();

//   if (socket.connected) {
//     toggleBtn.innerText = 'Connect';
//     socket.disconnect();
//   } else {
//     toggleBtn.innerText = 'Disconnect';
//     socket.connect();
//   }
// });

socket.on('chat message', (msg, serverOffset) => {
  const item = document.createElement('li');
  item.textContent = msg;
  messages.appendChild(item);

  window.scrollTo(0, document.body.scrollHeight);

  socket.auth.serverOffset = serverOffset;
});
