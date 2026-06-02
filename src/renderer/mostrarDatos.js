import { getCurrent } from "./currentTrack.js";

export const mostrarMetadata = (titleEl, artistEl, imgCover) => {
  const metadatos = getCurrent()   

  document.title = `${metadatos.metadata.artist} - ${metadatos.metadata.title}`

  titleEl.textContent = metadatos.metadata.title || "NovaBets";
  artistEl.textContent = metadatos.metadata.artist || "Music Player";
  imgCover.src = metadatos.metadata.cover ? `file://${metadatos.metadata.cover}` : "./image/novaPortada.png";
};
