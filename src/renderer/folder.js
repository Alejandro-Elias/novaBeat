import { removeItemStorage, setStorage } from "../localStorage.js";
import { selectFolder } from "../renderer.js";
import { suffle } from "../suffle.js";
import { loadList } from "./buttons/play/loadList.js";
import { setCurrent } from "./currentTrack.js";
import { loadData } from "./getData.js";
import { resetIndex, indexCurrent } from "./indexCurrent.js";
import { mostrarLista } from "./mostrarLista.js";
import { updateActiveTrack } from "./resaltarTrack.js";

export let listaNueva = false;

export const setListaNueva = (nuevaCondicion) => {
  listaNueva = nuevaCondicion;
};

export const folder = () => {
  selectFolder.addEventListener("click", async () => {
    await window.electronAPI.carpetaALista();

    const playList = await window.electronAPI.devolverLista();
    if (playList.length > 0) {
      removeItemStorage("playList")

      setStorage("playList", playList)

      mostrarLista();

      resetIndex();

      const path = `${playList[indexCurrent].carpeta}/${playList[indexCurrent].archivo}`;

      setCurrent({ path: path });

      loadList();
      loadData();
      setListaNueva(true);
      setStorage("listaNueva", true)
      updateActiveTrack();
      suffle()
      
    }
  });
};
