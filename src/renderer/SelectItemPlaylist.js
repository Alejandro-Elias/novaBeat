import { listaReproduccion } from "../renderer.js";
import { playSelectItem } from "./buttons/play.js";
import { eliminarTrack } from "./eliminarTrack.js";
import { setindexCurrent } from "./indexCurrent.js";

export const selectPLayList = () => {
  listaReproduccion.addEventListener("click", (e) => {
    const button = e.target.closest("button");

    if (!button) return;

    const index = Number(button.dataset.index);
    const id = Number(button.dataset.id);
    const action = button.dataset.action;

    if (action === "seleccionar") {
      setindexCurrent(index);

      playSelectItem();
    }
    if (action === 'eliminar') {
      eliminarTrack(id)      
    }
  });
};
