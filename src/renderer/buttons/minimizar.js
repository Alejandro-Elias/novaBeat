export const minimizarBtn = (propMinimizar) => {
  propMinimizar.addEventListener("click", () => {
    window.electronAPI.minimizar();
  });
};
