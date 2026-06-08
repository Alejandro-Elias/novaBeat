export const getPlayList = () => {
  const playList = JSON.parse(localStorage.getItem("playList")) || [];
  return playList;
};
