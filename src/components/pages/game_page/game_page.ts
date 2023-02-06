
import Page from "../../templates/page";
import GameBoard from "../game_page/game-board";
import CreatePlayers from "../../player/CreatePlayers";

class GamePage extends Page {
  createPlayer = new CreatePlayers(1, "Pavel", "1500", "700", "blue");
  constructor(id: string) {
    super(id);
  }
  createGamePage() {
    const message = document.createElement("div");
    const createPlaye = this.createPlayer.createDiv();

    // message.textContent = "game page";
    message.classList.add("message");
    message.append(createPlaye);

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
