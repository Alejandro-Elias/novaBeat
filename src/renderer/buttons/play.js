import { nextBtn, previousBtn } from "../../renderer.js";
import { cargarLista } from "../cargarLista.js";
import { setCurrent } from "../currentTrack.js";
import { loadData } from "../getData.js";
import {
  nextIndex,
  resetIndex,
  indexCurrent,
  previusIndex,
} from "../indexCurrent.js";
import { getPlayList } from "../leerStorage.js";
import { updateActiveTrack } from "../resaltarTrack.js";
import { setTruck } from "../setTrack.js";

export const play = (playBtn, player) => {
  let playList = [];

  const loadList = () => {
    let playListStorage = JSON.parse(localStorage.getItem("playList")) || [];
    playList = playListStorage.length <= 0 ? getPlayList() : playListStorage;
  };

  loadList();

  playBtn.addEventListener("click", () => {
    loadList();

    if (!playList || playList.length === 0) {
      alert("debe seleccionar una carpeta primero");
      return;
    }

    if (player.paused) {
      if (!player.src) {
        setTruck(player, playList, indexCurrent);
        updateActiveTrack()
      }
      player.play();
      playBtn.innerHTML = '<i class="fa-solid fa-circle-pause play i-color"></i>';
    } else {
      player.pause();
      playBtn.innerHTML = '<i class="fa-solid fa-circle-play play"></i>';
    }
  });

  const next = () => {
    nextIndex();
    updateActiveTrack()

    if (indexCurrent >= playList.length) {
      resetIndex();
    }

    const currentPlay = `${playList[indexCurrent].carpeta}/${playList[indexCurrent].archivo}`;

    player.src = currentPlay;
    setCurrent({ path: currentPlay });
    loadData();
    player.play();
  };

  player.addEventListener("ended", () => {
    if (!playList || playList.length === 0) return;
    next();
  });

  nextBtn.addEventListener("click", () => {
    if (!playList || playList.length === 0) return;
    next();
  });

  previousBtn.addEventListener("click",
    () => {
      if (indexCurrent > 0) {
        previusIndex();
      }

      updateActiveTrack()

      const currentPlay = `${playList[indexCurrent].carpeta}/${playList[indexCurrent].archivo}`;

      player.src = currentPlay;
      setCurrent({ path: currentPlay });
      loadData();
      player.play();
    });
};
