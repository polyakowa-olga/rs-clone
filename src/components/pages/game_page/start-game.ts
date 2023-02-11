import Page from "../../templates/page";
import GameBoard from "./game-board";
import { creatPlayerJson } from "../getJson/getJson";

class StartGame extends Page {
  constructor(id: string) {
    super(id);
  }
  createGamePage() {
    const message = document.createElement("div");
    message.classList.add("message");
    creatPlayerJson();
    return message;
  }
  returnHTML() {
    const page = this.createGamePage();
    this.container.append(page);

    const gameBoard = new GameBoard().init();
    this.container.append(gameBoard);

    return this.container;
  }
}

export default StartGame;
