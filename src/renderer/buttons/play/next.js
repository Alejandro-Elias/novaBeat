import { getStorage, setStorage } from "../../../localStorage.js";
import { player } from "../../../renderer.js";
import { loadData } from "../../getData.js";
import {
  indexCurrent,
  nextIndex,
  resetIndex,
  setindexCurrent,
} from "../../indexCurrent.js";
import { updateActiveTrack } from "../../resaltarTrack.js";
import { setTrack } from "../../setTrack.js";
import { ejecutarPlay, playSelectItem } from "../play.js";
import { playList } from "./loadList.js";

let repeatCondition = "repeat-normal";

export const setRepeatCondition = (condition) => {
  repeatCondition = condition;
};

export const nextTrack = () => {
  const next = () => {
    const listaNueva = getStorage("listaNueva");
    if (listaNueva) {
      resetIndex();
      setStorage("listaNueva", false);
      updateActiveTrack();
    } else {
      if (repeatCondition === "repeat-one") {
        setindexCurrent(indexCurrent);
      } else {
        nextIndex();
      }      

      if (indexCurrent >= playList.length) {
        if (repeatCondition === "repeat-normal") {
          resetIndex();
        } else if (repeatCondition === "repeat-all") {
          resetIndex();
          setStorage("indexCurrent", 0);
          ejecutarPlay();
        }
      }
    }

    setTrack(player, playList, indexCurrent);
    ejecutarPlay();
  };

  player.addEventListener("ended", () => {
    if (!playList || playList.length === 0) return;
    next();
  });

  nextBtn.addEventListener("click", () => {
    if (!playList || playList.length === 0) return;
    next();
  });

  if ("mediaSession" in navigator) {
    navigator.mediaSession.setActionHandler("nexttrack", () => {
      next();
    });
  }
};
