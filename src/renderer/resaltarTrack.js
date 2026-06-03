import { indexCurrent } from "./indexCurrent.js";

export const updateActiveTrack = () => {
    const tracks = document.querySelectorAll(".track");
        console.log(tracks[0].classList[1]);

    tracks.forEach((track, index) => {
        track.classList.toggle("active", index === indexCurrent);
        
    });
}