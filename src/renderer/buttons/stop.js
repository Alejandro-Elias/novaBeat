export const stop = (stopBtn, player) => {
  stopBtn.addEventListener("click", () => {
    player.pause();
    player.currentTime = 0;
    playBtn.innerHTML = '<i class="fa-solid fa-circle-play play"></i>';
  });
};
