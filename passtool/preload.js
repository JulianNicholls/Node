const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,

  encode: (text) => ipcRenderer.invoke('crypt:encode', text),
  check: (text, hash) => ipcRenderer.invoke('crypt:check', text, hash),
});
