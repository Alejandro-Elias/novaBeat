import { listaReproduccion } from "../renderer.js";
import { playSelectItem } from "./buttons/play.js";
import { setindexCurrent } from "./indexCurrent.js";

export const selectPLayList = () => {
  listaReproduccion.addEventListener("click", (e) => {
    const button = e.target.closest("button");

    if (!button) return;

    const index = Number(button.dataset.index);

    setindexCurrent(index);

    playSelectItem()
  });
};
