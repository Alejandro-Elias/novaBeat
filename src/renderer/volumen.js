export const cambiarVolumen = (player, volumen, volumenText) => {
  volumen.addEventListener("input", () => {
    player.volume = volumen.value;
    const cantidadVolumen = Math.floor(volumen.value * 100);
    volumenText.innerHTML = `<span class="volumen-cantidad" >${cantidadVolumen}</span>`;
  });
};
