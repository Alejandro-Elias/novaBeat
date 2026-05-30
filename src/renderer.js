import { loadData } from "./renderer/getData.js";
import { cerrarBtn } from "./renderer/buttons/cerrar.js";
import { minimizarBtn } from "./renderer/buttons/minimizar.js";
import { play } from "./renderer/buttons/play.js";
import { stop } from "./renderer/buttons/stop.js";
import { tiempos } from "./renderer/tiempos.js";
import { cambiarVolumen } from "./renderer/volumen.js";
import { folder } from "./renderer/folder.js";
import { mostrarMetadata } from "./renderer/mostrarDatos.js";
import { cargarLista } from "./renderer/cargarLista.js";

document.addEventListener("DOMContentLoaded", async () => {
  const player = document.getElementById("player");
  const playBtn = document.getElementById("playBtn");
  const stopBtn = document.getElementById("stopBtn");
  const progress = document.getElementById("progress");
  const titleEl = document.getElementById("title");
  const artistEl = document.getElementById("artist");
  const volumen = document.getElementById("volumen-control");
  const time = document.getElementById("tiempo-progreso");
  const minimizar = document.getElementById("minimizar");
  const cerrar = document.getElementById("cerrar");
  const imgCover = document.getElementById("cover");
  const volumenText = document.getElementById("volumen-texto");
  const selectFolder = document.getElementById("idFolderBtn");
  const listaReproduccion = document.getElementById("listaReproduccion");

  const data = await loadData();  

  const list = []

  cargarLista(listaReproduccion, list);
  mostrarMetadata(titleEl, artistEl, imgCover, data);
  cerrarBtn(cerrar, player);
  minimizarBtn(minimizar);
  play(playBtn, player);
  stop(stopBtn, player);
  tiempos(player, progress, time, data.duration || "00:00");
  cambiarVolumen(player, volumen, volumenText);
  folder(selectFolder, listaReproduccion, player);
});
