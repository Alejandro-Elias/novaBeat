import { playBtn, player } from "../../renderer.js";
import { indexCurrent } from "../indexCurrent.js";
import { updateActiveTrack } from "../resaltarTrack.js";
import { setTrack } from "../setTrack.js";
import { loadList, playList } from "./play/loadList.js";

export const play = () => {
  loadList();

  playBtn.addEventListener("click", () => {
    loadList();

    if (!playList || playList.length === 0) {
      alert("debe seleccionar una carpeta primero");
      return;
    }

    if (player.paused) {
      if (!player.src) {
        setTrack(player, playList, indexCurrent);
        updateActiveTrack();
      }
      player.play();
      playBtn.innerHTML =
        '<i class="fa-solid fa-circle-pause play i-color"></i>';
    } else {
      player.pause();
      playBtn.innerHTML = '<i class="fa-solid fa-circle-play play"></i>';
    }
  });
};
