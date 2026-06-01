import { cerrarBtn } from "./renderer/buttons/cerrar.js";
import { minimizarBtn } from "./renderer/buttons/minimizar.js";
import { play } from "./renderer/buttons/play.js";
import { stop } from "./renderer/buttons/stop.js";
import { tiempos } from "./renderer/tiempos.js";
import { cambiarVolumen } from "./renderer/volumen.js";
import { folder } from "./renderer/folder.js";
import { mostrarMetadata } from "./renderer/mostrarDatos.js";
import { cargarLista } from "./renderer/cargarLista.js";
  
  export const player = document.getElementById("player");
  const playBtn = document.getElementById("playBtn");
  const stopBtn = document.getElementById("stopBtn");
  export const progress = document.getElementById("progress");
  export const titleEl = document.getElementById("title");
  export const artistEl = document.getElementById("artist");
  const volumen = document.getElementById("volumen-control");
  export const time = document.getElementById("tiempo-progreso");
  const minimizar = document.getElementById("minimizar");
  const cerrar = document.getElementById("cerrar");
  export const imgCover = document.getElementById("cover");
  const volumenText = document.getElementById("volumen-texto");
  const selectFolder = document.getElementById("idFolderBtn");
  const listaReproduccion = document.getElementById("listaReproduccion");
  export const nextBtn = document.getElementById("nextBtn");
  

  const list = [];

  cargarLista(listaReproduccion, list);
  mostrarMetadata(titleEl, artistEl, imgCover);
  cerrarBtn(cerrar, player);
  minimizarBtn(minimizar);
  play(playBtn, player, nextBtn);
  stop(stopBtn, player);
  cambiarVolumen(player, volumen, volumenText);
  folder(selectFolder, listaReproduccion, player);