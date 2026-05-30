export const setTruck = (player, playList, indexCurrrent) => {
  if (!playList.length) {
    player.src = "";
    return;
  }

  player.src =
    playList.length > 0
      ? `${playList[indexCurrrent].carpeta}/${playList[indexCurrrent].archivo}`
      : "";
};
