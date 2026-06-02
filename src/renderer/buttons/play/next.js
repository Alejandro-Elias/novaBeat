import { player } from "../../../renderer.js";
import { setCurrent } from "../../currentTrack.js";
import { loadData } from "../../getData.js";
import { indexCurrent, nextIndex, resetIndex } from "../../indexCurrent.js";
import { updateActiveTrack } from "../../resaltarTrack.js";
import { playList } from "./loadList.js";

export const nextTrack = () => {
  const next = () => {
    nextIndex();
    updateActiveTrack();

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
};
