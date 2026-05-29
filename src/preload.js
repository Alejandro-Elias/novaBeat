const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  getMetaData: () => {
    return ipcRenderer.invoke("get-metadata");
  },
  closeApp: () => {
    ipcRenderer.send("close-app");
  },
  minimizar: () => {
    ipcRenderer.send("minimizar");
  },
  carpetaALista: () => {
    return ipcRenderer.invoke("seleccionar-carpeta");
  },
  devolverLista: () => {
    return ipcRenderer.invoke("devolver-lista")
  }
});
