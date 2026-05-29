const { ipcMain, dialog, BrowserWindow } = require("electron");
const fs = require("fs");

let lista = [];

function carpetaALista() {
  ipcMain.handle("seleccionar-carpeta", async () => {
    const ventana = BrowserWindow.getFocusedWindow();

    const resultado = await dialog.showOpenDialog(ventana, {
      properties: ["openDirectory"],
    });

    if (resultado.canceled) {
      return [];
    }

    lista = [];

    const carpeta = resultado.filePaths[0];

    const archivos = fs.readdirSync(carpeta);

    archivos
      .filter((archivo) => archivo.endsWith(".mp3"))
      .forEach((archivo) =>
        lista.push({
          carpeta: carpeta,
          archivo: archivo,
        }),
      );
  });
}

// `${carpeta}/${archivo}`

function devolverLista() {
  ipcMain.handle("devolver-lista", async () => {
    return lista;
  });
}

module.exports = {
  carpetaALista,
  devolverLista,
};
