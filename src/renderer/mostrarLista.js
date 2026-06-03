import { listaReproduccion } from "../renderer.js";
import { playList } from "./buttons/play/loadList.js";
import { lista } from "./cargarLista.js";

export const mostrarLista = () => {
  listaReproduccion.innerHTML = " ";

  if (playList.length > 0) {
    for (let i = 0; i < playList.length - 1; i++) {
      listaReproduccion.innerHTML += `<li class="track" >${i + 1} ${playList[i].archivo}</li>`;
    }
  } else {
    for (let i = 0; i < lista.length - 1; i++) {
      listaReproduccion.innerHTML += `<li class="track" >${i + 1} ${lista[i].archivo}</li>`;
    }
  }
};
