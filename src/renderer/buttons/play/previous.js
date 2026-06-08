import { getStorage } from "../../../localStorage.js";
import { player, previousBtn } from "../../../renderer.js";
import { setCurrent } from "../../currentTrack.js";
import { indexCurrent, previousIndex } from "../../indexCurrent.js";
import { setTrack } from "../../setTrack.js";
import { ejecutarPlay } from "../play.js";

export const previousTrack = () => {
  const previous = () => {
    const playList = getStorage("playList")
    if (indexCurrent > 0) {
      previousIndex();
    }

    setTrack(player, playList, indexCurrent);
    ejecutarPlay();
  };

  previousBtn.addEventListener("click", () => {
    previous();
  });
  if ("mediaSession" in navigator) {
    navigator.mediaSession.setActionHandler("previoustrack", () => {
      previous();
    });
  }
};
