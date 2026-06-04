import { player } from "../../../renderer.js";
import { setCurrent } from "../../currentTrack.js";
import { loadData } from "../../getData.js";
import { indexCurrent, nextIndex, resetIndex, setindexCurrent } from "../../indexCurrent.js";
import { updateActiveTrack } from "../../resaltarTrack.js";
import { playList } from "./loadList.js";

let repeatCondition = "repeat-normal";

export const setRepeatCondition = (condition) => {
  repeatCondition = condition
}

export const nextTrack = () => {
  const next = () => {
    if (repeatCondition === "repeat-one") {
      setindexCurrent(indexCurrent);
    } else {
      nextIndex();
    }
    updateActiveTrack();

    if (indexCurrent >= playList.length) {
      if (repeatCondition === "repeat-normal") {
        resetIndex();
      } else if (repeatCondition === "repeat-all") {
        resetIndex();
        player.play();
      }
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
