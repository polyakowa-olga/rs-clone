/* eslint-disable */
import Page from "../../templates/page";
import GameBoard from "../game_page/game-board";
import { creatPlayerJson } from "../getJson/getJson";


class GamePage extends Page {
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

export default GamePage;
