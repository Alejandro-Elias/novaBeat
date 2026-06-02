import { getPlayList } from "../../leerStorage.js";

export let playList = [];

export const loadList = () => {
  let playListStorage = JSON.parse(localStorage.getItem("playList")) || [];
  playList = playListStorage.length <= 0 ? getPlayList() : playListStorage;
};
