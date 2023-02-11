/* eslint-disable prettier/prettier */
import CreatePlayers from "../../player/CreatePlayers";

export async function creatPlayerJson() {
  const DB = await (await fetch("../../../assets/players-data.json")).json();
  const message = document.querySelector(".message") as HTMLDivElement;

  const arrayPlayerJson = [];
  DB.players.forEach((e: CreatePlayers) => {
    const createPlayer = new CreatePlayers(e);
    const createPlaye = createPlayer.createDiv();
    message.append(createPlaye);
  });

  return message;
}
