import { play } from "./buttons/play.js";
import { cargarLista } from "./cargarLista.js";
import { setCurrent } from "./currentTrack.js";
import { loadData } from "./getData.js";
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

    const path = `${playList[indexCurrent].carpeta}/${playList[indexCurrent].archivo}`

    player.src = path;

    setCurrent({path: path})

    player.load();
    loadData()
  });
};
