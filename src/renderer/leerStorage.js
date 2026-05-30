export const getPlayList = (indexCurrrent, player) => {
  const playList = JSON.parse(localStorage.getItem("playList")) || [];

  return playList;
};
