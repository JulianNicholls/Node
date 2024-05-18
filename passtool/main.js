const path = require('node:path');
const { app, BrowserWindow, ipcMain } = require('electron');
const bcryptjs = require('bcryptjs');

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 700,
    height: 250,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadFile('index.html');
};

app.whenReady().then(() => {
  // ipcMain.handle('ping', () => 'ping');

  ipcMain.handle('crypt:encode', async (_event, text) => {
    const salt = bcryptjs.genSaltSync();

    return bcryptjs.hashSync(text, salt);
  });

  ipcMain.handle('crypt:check', async (_event, text, hash) => {
    return bcryptjs.compareSync(text, hash);
  });

  createWindow();
});

// This maybe used to be necessary
// app.on('window-all-closed', () => {
//   if(platform.platform === 'darwin') app.quit();
// })
