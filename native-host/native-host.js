const { app, dialog } = require('electron');
const fs = require('fs');

function sendMessage(message) {
  const buffer = Buffer.from(JSON.stringify(message));
  const header = Buffer.alloc(4);
  header.writeUInt32LE(buffer.length, 0);
  process.stdout.write(header);
  process.stdout.write(buffer);
}

function processMessage(message) {
  if (message.action === 'openFile') {
    dialog.showOpenDialog({
      properties: ['openFile'],
      filters: [
        { name: 'Excel Files', extensions: ['xlsx', 'xls'] }
      ]
    }).then(result => {
      if (!result.canceled && result.filePaths.length > 0) {
        sendMessage({ filePath: result.filePaths[0] });
      } else {
        sendMessage({ error: 'No file selected' });
      }
    }).catch(err => {
      sendMessage({ error: err.message });
    });
  }
}

function readMessage() {
  const header = Buffer.alloc(4);
  fs.readSync(0, header, 0, 4);
  const size = header.readUInt32LE(0);
  const buffer = Buffer.alloc(size);
  fs.readSync(0, buffer, 0, size);
  return JSON.parse(buffer.toString());
}

app.on('ready', () => {
  process.stdin.on('readable', () => {
    try {
      const message = readMessage();
      processMessage(message);
    } catch (error) {
      console.error('Error processing message:', error);
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

