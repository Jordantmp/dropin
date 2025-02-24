const { app, BrowserWindow, Tray, Menu, nativeImage } = require('electron');
const path = require('path');

let mainWindow;
let tray;

app.on('ready', () => {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 300,
    height: 200,
    resizable: false,
    frame: false,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // Load the UI
  mainWindow.loadFile('index.html');

  // Create a system tray icon
  const iconPath = path.join(__dirname, 'icon.png'); // Add a 16x16 icon.png file to your project
  tray = new Tray(nativeImage.createFromPath(iconPath));

  // Add a context menu to the tray icon
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Quit', click: () => app.quit() },
  ]);
  tray.setContextMenu(contextMenu);

  // Show the window when the tray icon is clicked
  tray.on('click', () => {
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
  });

  // Hide the window when it loses focus
  mainWindow.on('blur', () => {
    mainWindow.hide();
  });
});
