import { nextIndex, resetIndex, indexCurrent } from "../indexCurrent.js";
import { getPlayList } from "../leerStorage.js";
import { setTruck } from "../setTrack.js";

export const play = (playBtn, player) => {
  let playListStorage = JSON.parse(localStorage.getItem('playList'))  || [];

  let playList = []

  const loadList = () => {
    playList = playListStorage.length <= 0 ? getPlayList(indexCurrent, player) : playListStorage;
  };

  loadList()

  playBtn.addEventListener("click", () => {
    loadList();

    if (!playList || playList.length === 0) {
      alert("debe seleccionar una carpeta primero");
      return;
    }

    if (player.paused) {
      setTruck(player, playList, indexCurrent)
      player.play();
      playBtn.innerHTML = '<i class="fa-solid fa-circle-pause play"></i>';
    } else {
      player.pause();
      playBtn.innerHTML = '<i class="fa-solid fa-circle-play play"></i>';
    }
  });

  player.addEventListener("ended", () => {
    if (!playList || playList.length === 0) return;

    nextIndex()

    if (indexCurrent >= playList.length) {
      resetIndex();
    }

    player.src = `${playList[indexCurrent].carpeta}/${playList[indexCurrent].archivo}`;
    player.play();
  });
};