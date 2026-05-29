const { app } = require("electron");

const { carpetaALista, devolverLista } = require("./ipc/seleccionarCarpeta");
const createWindow = require("./ipc/createWindow");
const registerIpc = require("./ipc/registerIpc");

app.whenReady().then(() => {
  registerIpc();
  createWindow();
  carpetaALista();
  devolverLista();
});
