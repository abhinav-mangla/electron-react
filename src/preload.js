const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('browserViewAPI', {
  openBrowserView: (url) => ipcRenderer.send('browser-view', url),
});
