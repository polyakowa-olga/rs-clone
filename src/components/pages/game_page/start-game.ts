import Page from "../../templates/page";
import GameBoard from "./game-board";
// import { creatPlayer } from "../createJson/createJson";
// import GamePage from "../game_page/game-page";
// import { createArrayName } from "../game_page/game-page";

class StartGame extends Page {
  constructor(id: string) {
    super(id);
  }
  createGamePage() {
    const message = document.createElement("div");
    message.classList.add("message");
    // const inputfirst = document.querySelectorAll("input");
    // console.log(inputfirst[0].value);
    // console.log(inputfirst[1].value);
    // const arrayName = [`${inputfirst[0].value}`, `${inputfirst[1].value}`];
    // const arrayPlayer = ["Pavel", "Sveta", "galya", "pety"];
    // console.log(createArrayName);
    // creatPlayer(arrayName);
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
