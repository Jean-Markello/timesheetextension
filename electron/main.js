const { app, BrowserWindow, dialog, ipcMain } = require('electron');
const WebSocket = require('ws');
const path = require('path');

let mainWindow;

// Setup WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log("Client connected to WebSocket");

  ws.on('message', async (message) => {
    const { action } = JSON.parse(message);

    if (action === 'openFile') {
      // Open file dialog
      const result = await dialog.showOpenDialog(mainWindow, {
        properties: ['openFile'],
        filters: [{ name: 'Excel Files', extensions: ['xlsx', 'xls'] }],
      });

      if (!result.canceled && result.filePaths.length > 0) {
        // Send the selected file path back to the client
        ws.send(JSON.stringify({ filePath: result.filePaths[0] }));
      } else {
        ws.send(JSON.stringify({ error: 'No file selected' }));
      }
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected from WebSocket');
  });
});

// Add IPC handler for direct renderer process communication
ipcMain.handle('open-file-dialog', async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    properties: ['openFile'],
    filters: [{ name: 'Excel Files', extensions: ['xlsx', 'xls'] }],
  });

  return result.canceled || result.filePaths.length === 0
    ? null
    : result.filePaths[0];
});

// Create Electron window
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'), // Optional for secure IPC
    },
    alwaysOnTop: true,  // Keeps the window always on top
    focusable: true,    // Ensure the window can get focus
  });

  mainWindow.loadURL('http://127.0.0.1:5173'); // Point to your React app
  mainWindow.focus();  // Focus the window immediately
}

app.whenReady().then(() => {
  createWindow();
}); 

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
