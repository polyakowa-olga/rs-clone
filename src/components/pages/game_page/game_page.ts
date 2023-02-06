/* eslint-disable prettier/prettier */
import Page from "../../templates/page";
import CreatePlayers from "../../player/CreatePlayers";

class GamePage extends Page {
  createPlayer = new CreatePlayers(1, "Pavel", '1500', '700', "blue");
  constructor(id: string) {
    super(id);
  }
  createGamePage() {
    const message = document.createElement("div");

    const createPlaye = this.createPlayer.createDiv();
    message.classList.add("message");
    message.append(createPlaye);

    return message;
  }
  returnHTML() {
    const page = this.createGamePage();
    this.container.append(page);
    return this.container;
  }
}

export default GamePage;
