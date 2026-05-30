import { resetIndex } from "../indexCurrent.js";

export const cerrarBtn = (propCerrar, player) => {
  propCerrar.addEventListener("click", () => {
    player.pause()
    resetIndex()
    window.electronAPI.closeApp();
  });
};
