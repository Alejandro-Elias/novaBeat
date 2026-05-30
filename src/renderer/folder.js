import { cargarLista } from "./cargarLista.js";
import { resetIndex, indexCurrent } from "./indexCurrent.js";
import { getPlayList } from "./leerStorage.js";

export const folder = (selectFolder, listaReproduccion, player) => {
  selectFolder.addEventListener("click", async () => {
  localStorage.removeItem("playList");
    await window.electronAPI.carpetaALista();

    const playList = await window.electronAPI.devolverLista();

    localStorage.setItem("playList", JSON.stringify(playList));

    cargarLista(listaReproduccion, playList);

    resetIndex()

    player.src = `${playList[indexCurrent].carpeta}/${playList[indexCurrent].archivo}`;
    player.load();
  });
};
