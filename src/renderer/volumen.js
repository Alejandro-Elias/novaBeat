import { getStorage, setStorage } from "../localStorage.js";
import { player, volumen, volumenText } from "../renderer.js";

export const cambiarVolumen = () => {
  volumen.addEventListener("input", () => {
    player.volume = volumen.value;
    const cantidadVolumen = Math.floor(volumen.value * 100);
    volumenText.innerHTML = `<span class="volumen-cantidad" >${cantidadVolumen}</span>`;
    setStorage("volumen", cantidadVolumen);
  });
  const volumenStorage = getStorage("volumen");
  if (volumenStorage !== null) {
    volumen.value = volumenStorage / 100;
    player.volume = volumenStorage / 100;
    volumenText.innerHTML = `<span class="volumen-cantidad" >${volumenStorage}</span>`;
  }
};
