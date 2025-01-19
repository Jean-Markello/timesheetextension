chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'openFile') {
      chrome.runtime.sendNativeMessage(
        'com.example.electron_bridge',
        { action: 'openFile' },
        (response) => {
          if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
            sendResponse({ error: chrome.runtime.lastError.message });
          } else {
            sendResponse(response);
          }
        }
      );
      return true; // Keep the message channel open for async response
    }
  });
  