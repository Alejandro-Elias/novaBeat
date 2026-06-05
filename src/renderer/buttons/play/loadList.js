import { cargarLista } from "../../cargarLista.js";
import { getPlayList } from "../../leerStorage.js";
import { mostrarLista } from "../../mostrarLista.js";

const suffle = document.getElementById("suffle");

export let playList = [];
let playListNormal = [];
let playListSuffle = [];
let playListRandon = false

export const loadList = () => {
  let playListStorage = JSON.parse(localStorage.getItem("playList")) || [];
  playListNormal =
    playListStorage.length <= 0 ? getPlayList() : playListStorage;

  let randomIndexes = [];
  let randomIndex = 0

  while (randomIndexes.length < playListNormal.length) {
    randomIndex = Math.floor(Math.random() * playListNormal.length);

    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex);
    }
  }

  playListSuffle = randomIndexes.map((index) => playListNormal[index]);

  playListRandon ? playList = playListSuffle : playList = playListNormal;

  mostrarLista()
};

suffle.addEventListener('click', () => {
  if (suffle.classList[2] === 'suffleNoActive') {
    suffle.classList.remove('suffleNoActive') 
    suffle.classList.add('suffleActive')
    playList = playListSuffle 
    playListRandon = true
    mostrarLista()
  } else {
    suffle.classList.remove('suffleActive') 
    suffle.classList.add('suffleNoActive')
    playList = playListNormal 
    playListRandon = false
    mostrarLista()
    }
})