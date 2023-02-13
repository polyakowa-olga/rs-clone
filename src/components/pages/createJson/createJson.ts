/* eslint-disable prettier/prettier */
import ShowPlayers from "../../player/ShowPlayers";

export async function creatPlayer(arrayPlayer: string[]) {
  const DB = await (await fetch("../../../assets/players-data.json")).json();
  const message = document.querySelector(".message") as HTMLDivElement;



  for (let i = 0; i < DB.players.length; i++) {
    for (let j = 0; j < arrayPlayer.length; j++) {
      DB.players[j].name = arrayPlayer[j];
      const createPlayer = new ShowPlayers(DB.players[j]);
      const createPlaye = createPlayer.createDiv();
      message.append(createPlaye);
    }
    console.log(DB.players);
    return;
  }

  return message;
}
