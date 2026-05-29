export const play = (playBtn, player) => {
  playBtn.addEventListener("click", () => {
    if (playList.length <= 0) {
      alert("debe seleccionar una carpeta primero");
    } else {
      if (player.paused) {
        player.play();
        playBtn.innerHTML = '<i class="fa-solid fa-circle-pause play"></i>';
      } else {
        player.pause();
        playBtn.innerHTML = '<i class="fa-solid fa-circle-play play"></i>';
      }
    }
  });

  let indexCurrrent = 0;

  const playList = JSON.parse(localStorage.getItem("playList")) || [];
  player.src =
    playList.length > 0
      ? `${playList[indexCurrrent].carpeta}/${playList[indexCurrrent].archivo}`
      : "";

  player.addEventListener("ended", () => {
    indexCurrrent++;

    if (indexCurrrent >= playList.length) {
      indexCurrrent = 0;
    }

    player.src = `${playList[indexCurrrent].carpeta}/${playList[indexCurrrent].archivo}`;

    player.play();
  });
};
