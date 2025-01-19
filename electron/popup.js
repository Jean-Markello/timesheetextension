document.getElementById('openFileButton').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'openFile' }, (response) => {
      if (response?.filePath) {
        console.log("File selected:", response.filePath);
        alert(`Selected file: ${response.filePath}`);
      } else if (response?.error) {
        console.error(response.error);
        alert(`Error: ${response.error}`);
      }
    });
  });
  