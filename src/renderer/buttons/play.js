import { getStorage } from "../../localStorage.js";
import { playBtn, player } from "../../renderer.js";
import { listaNueva } from "../folder.js";
import { loadData } from "../getData.js";
import { indexCurrent } from "../indexCurrent.js";
import { updateActiveTrack } from "../resaltarTrack.js";
import { setTrack } from "../setTrack.js";
import { loadList } from "./play/loadList.js";

const playList = getStorage("playList")

export const ejecutarPlay = async () => {

  const listaNueva = getStorage("listaNueva")
  
  if (listaNueva) {
    loadList();
  }

  if (!playList || playList.length === 0) {
    alert("debe seleccionar una carpeta primero");
    return;
  }

  if (!player.src || player.src === "") {
    await setTrack(player, playList, indexCurrent);
  }

  updateActiveTrack();
  loadData();
  player.play();
  playBtn.innerHTML = '<i class="fa-solid fa-circle-pause play i-color"></i>';
};

export const playSelectItem = async () => {
  await setTrack(player, playList, indexCurrent);

  updateActiveTrack();
  player.play();
  playBtn.innerHTML = '<i class="fa-solid fa-circle-pause play i-color"></i>';
};

const ejecutarPause = () => {
  player.pause();
  playBtn.innerHTML = '<i class="fa-solid fa-circle-play play"></i>';
};

export const play = () => {
  if (listaNueva) {
    loadList();
  }

  playBtn.addEventListener("click", () => {
    if (player.paused) {
      ejecutarPlay();
    } else {
      ejecutarPause();
    }
  });

  navigator.mediaSession.setActionHandler("play", () => {
    ejecutarPlay();
    navigator.mediaSession.playbackState = "playing";
  });

  navigator.mediaSession.setActionHandler("pause", () => {
    ejecutarPause();
    navigator.mediaSession.playbackState = "paused";
  });
};
