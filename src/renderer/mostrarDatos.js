export const mostrarMetadata = (titleEl, artistEl, imgCover, data) => {
  titleEl.textContent = data.title || "Sin título";
  artistEl.textContent = data.artist || "Artista desconocido";
  imgCover.src =
    `file://${data.cover}` ||
    "./image/679bf7bb-2170-4d54-9485-240baa4ae33c.webp";
};
