import { indexCurrent } from "./indexCurrent.js";

export const updateActiveTrack = () => {
    const tracks = document.querySelectorAll(".track");

    tracks.forEach((track, index) => {
        track.classList.toggle("active", index === indexCurrent);
    });
}