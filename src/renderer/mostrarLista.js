import { getStorage } from "../localStorage.js";
import { listaReproduccion } from "../renderer.js";
import { playList } from "./buttons/play/loadList.js";

export const mostrarLista = () => {
  listaReproduccion.innerHTML = " ";
  const lista = getStorage('playList') || [] 

  if (playList.length > 0) {
    for (let i = 0; i < playList.length; i++) {
      listaReproduccion.innerHTML += `<li class="track" ><button class="item-playlist" data-action="seleccionar" data-index="${i}" data-id="${playList[i].id}" > ${playList[i].track.archivo}</button><button id="eliminar" data-action="eliminar" class="eliminar" data-id="${playList[i].id}"><i class="fa-solid fa-square-xmark eliminarBtn"></i></button></li>`;
    }
  } else if (lista.length > 0) {
    for (let i = 0; i < lista.length; i++) {
      listaReproduccion.innerHTML += `<li class="track" ><button class="item-playlist" data-action="seleccionar" data-index="${i}" data-id="${lista[i].id}"> ${lista[i].track.archivo}</button><button id="eliminar" data-action="eliminar" class="eliminar" data-id="${lista[i].id}"><i class="fa-solid fa-square-xmark eliminarBtn"></i></button></li>`;
    }
  }
};
