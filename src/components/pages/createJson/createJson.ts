/* eslint-disable prettier/prettier */
import ShowPlayer from "../../player/ShowPlayer";

export async function creatPlayer(arrayPlayer: string[]) {
  const DB = await (await fetch("../../../assets/players-data.json")).json();
  const message = document.getElementById("game-page") as HTMLDivElement;
  const blockPlayers = document.createElement("div") as HTMLDivElement;
  message.prepend(blockPlayers);
  blockPlayers.classList.add("players");

  for (let i = 0; i < DB.players.length; i++) {
    for (let j = 0; j < arrayPlayer.length; j++) {
      DB.players[j].name = arrayPlayer[j];
      const createPlayer = new ShowPlayer(DB.players[j]);
      const createBlockPlayer = createPlayer.createDiv();
      blockPlayers.append(createBlockPlayer);
    }
    console.log(DB.players);
    return;
  }

  return message;
}
