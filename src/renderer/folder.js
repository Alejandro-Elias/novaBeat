export const folder = (selectFolder, player) => {
  localStorage.removeItem("playList");
  selectFolder.addEventListener("click", async () => {
    await window.electronAPI.carpetaALista();

    const playList = await window.electronAPI.devolverLista();

    localStorage.setItem("playList", JSON.stringify(playList));
  });
};
