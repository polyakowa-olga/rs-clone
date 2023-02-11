/* eslint-disable prettier/prettier */
import Page from "../../templates/page";
// import StartGame from "./start-game";

class GamePage extends Page {
  constructor(id: string) {
    super(id);
  }
  createGamePage() {
    const message = document.createElement("div");
    message.classList.add("message");
    const button = document.createElement("button");
    const link = document.createElement("form");
    link.append(button);
    link.action = "#start-game";
    message.append(link);
    button.innerText = "click";
    return message;
  }
  returnHTML() {
    const page = this.createGamePage();
    this.container.append(page);
    // const startGame = new StartGame();
    // this.container.append(startGame);
    return this.container;
  }
}

export default GamePage;
