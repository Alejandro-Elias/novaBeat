import { nextBtn, previousBtn } from "../../renderer.js";
import { cargarLista } from "../cargarLista.js";
import { setCurrent } from "../currentTrack.js";
import { loadData } from "../getData.js";
import {
  nextIndex,
  resetIndex,
  indexCurrent,
} from "../indexCurrent.js";
import { getPlayList } from "../leerStorage.js";
import { updateActiveTrack } from "../resaltarTrack.js";
import { setTruck } from "../setTrack.js";
import { loadList, playList } from "./play/loadList.js";

export const play = (playBtn, player) => {

  

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
}

  
