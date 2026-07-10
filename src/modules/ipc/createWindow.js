const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

let win = null;

const createWindow = () => {
  const iconPath = path.resolve(__dirname, "../../../build/icon.png");

  win = new BrowserWindow({
    width: 1300,
    height: 350,
    fullscreenable: false,
    maximizable: false,
    resizable: true,
    autoHideMenuBar: false,
    frame: false,
    transparent: true,
    icon: iconPath,
    webPreferences: {
      preload: path.join(__dirname, "../preload.js"),
    },
  });

  if (app.isPackaged) {
    win.webContents.on("before-input-event", (event, input) => {
      if (
        input.key === "F12" ||
        (input.control && input.shift && input.key.toLowerCase() === "i")
      ) {
        event.preventDefault();
      }
    });
  }

  win.on("enter-full-screen", (event) => {
    event.preventDefault();
  });

  win.setMinimumSize(1300, 100);
  win.setMaximumSize(1300, 400);

  ipcMain.on("set-compact-mode", (event, isCompact) => {
    win.setResizable(true);

    if (isCompact) {
      win.setSize(1300, 100);
    } else {
      win.setSize(1300, 392);
    }

    win.setResizable(false);
  });

  ipcMain.on("close-app", () => {
    app.quit();
  });
  ipcMain.on("minimizar", () => {
    win.minimize();
  });

  win.loadURL("http://localhost:5173");
};

module.exports = createWindow;
