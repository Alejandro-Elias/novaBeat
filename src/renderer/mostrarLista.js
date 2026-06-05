import { listaReproduccion } from "../renderer.js";
import { playList } from "./buttons/play/loadList.js";
import { lista } from "./cargarLista.js";

export const mostrarLista = () => {
  listaReproduccion.innerHTML = " ";

  if (playList.length > 0) {
    for (let i = 0; i < playList.length; i++) {
      listaReproduccion.innerHTML += `<li class="track" ><button class="item-playlist" data-index="${i}" > ${playList[i].archivo}</button></li>`;
    }
  } else {
    for (let i = 0; i < lista.length; i++) {
      listaReproduccion.innerHTML += `<li class="track" ><button class="item-playlist" data-index="${i}"> ${lista[i].archivo}</li>`;
    }
  }
};
