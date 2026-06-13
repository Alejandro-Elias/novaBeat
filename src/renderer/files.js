import { getStorage, setStorage } from "../localStorage.js";
import { selectFiles } from "../renderer.js";
import { suffle } from "../suffle.js";
import { loadList } from "./buttons/play/loadList.js";
import { mostrarLista } from "./mostrarLista.js";

export const files = async () => {
  selectFiles.addEventListener("click", async () => {
    await window.electronAPI.archivoALista();

    const nuevosArchivos = await window.electronAPI.devolverArchivos();

    if (nuevosArchivos.length > 0) {

      let nuevaPlaylist = getStorage("playList")

      nuevosArchivos.forEach((track, index) => {
        const song = {
          id: index,
          track: track
        }        
        nuevaPlaylist.push(song)
      });

      setStorage("playList", nuevaPlaylist)

      suffle()   
      mostrarLista()
      loadList()  
    }
  });
};
