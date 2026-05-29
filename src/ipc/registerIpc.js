const { ipcMain } = require("electron");
const mm = require("music-metadata");
const path = require("path");
const fs = require("fs");
const os = require("os");

const songPath = path.join(
  __dirname,
  "../music",
  "02 Queen - A Kind of Magic.mp3",
);

function registerIpc() {
  ipcMain.handle("get-metadata", async () => {
    const metadata = await mm.parseFile(songPath);

    const picture = metadata.common.picture?.[0];

    let cover = "";

    if (picture) {
      const tempCoverPath = path.join(os.tmpdir(), `${Date.now()}-cover.jpg`);

      fs.writeFileSync(tempCoverPath, picture.data);

      cover = tempCoverPath;
    }

    const segundos = metadata.format.duration;

    const minutos = Math.floor(segundos / 60);
    const restoSegundos = Math.floor(segundos % 60);

    return {
      title: metadata.common.title,
      artist: metadata.common.artist,
      duration: `${minutos.toString().padStart(2, "0")}:${restoSegundos.toString().padStart(2, "0")}`,
      cover,
    };
  });
}

module.exports = registerIpc;
