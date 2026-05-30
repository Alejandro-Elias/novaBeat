import { cargarLista } from "./cargarLista.js";

export const folder = (selectFolder, listaReproduccion) => {
  localStorage.removeItem("playList");
  selectFolder.addEventListener("click", async () => {
    await window.electronAPI.carpetaALista();

    const playList = await window.electronAPI.devolverLista();

    localStorage.setItem("playList", JSON.stringify(playList));

    cargarLista(listaReproduccion, playList)

  });
};
