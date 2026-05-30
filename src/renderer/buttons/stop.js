import { resetIndex } from "../indexCurrent.js";


export const stop = (stopBtn, player) => {
  stopBtn.addEventListener("click", () => {
    player.pause();
    resetIndex
    playBtn.innerHTML = '<i class="fa-solid fa-circle-play play"></i>';
  });
};
