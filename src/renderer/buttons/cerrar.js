export const cerrarBtn = (propCerrar) => {
  propCerrar.addEventListener("click", () => {
    window.electronAPI.closeApp();
  });
};
