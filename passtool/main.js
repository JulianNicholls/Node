const path = require('node:path');
const { app, BrowserWindow, ipcMain } = require('electron');
const bcryptjs = require('bcryptjs');

require('dotenv').config();

const { StreamChat } = require('stream-chat');

const { STREAMCHAT_API_KEY, STREAMCHAT_SECRET } = process.env;

if (!STREAMCHAT_API_KEY || !STREAMCHAT_SECRET) {
  console.error('Environment variables not set');
  process.exit(-1);
}

const streamClient = new StreamChat(STREAMCHAT_API_KEY, STREAMCHAT_SECRET);

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 720,
    height: 200,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadFile('index.html');
};

app.whenReady().then(() => {
  setupIPC();

  createWindow();
});

const setupIPC = () => {
  ipcMain.handle('crypt:encode', async (_event, text) => {
    const salt = bcryptjs.genSaltSync(10);

    return bcryptjs.hashSync(text, salt);
  });

  ipcMain.handle('crypt:check', async (_event, text, hash) => {
    return bcryptjs.compareSync(text, hash);
  });

  ipcMain.handle('stream:token', async (_event, user_id) => {
    return streamClient.createToken(user_id);
  });
};

// This maybe used to be necessary
// app.on('window-all-closed', () => {
//   if(platform.platform === 'darwin') app.quit();
// })
