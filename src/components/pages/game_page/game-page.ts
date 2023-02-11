/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import Page from "../../templates/page";
import { creatPlayer } from "../createJson/createJson";
// import StartGame from "./start-game";

class GamePage extends Page {
  static createArrayName: string[];
  constructor(id: string) {
    super(id);
  }

  createArrayName() {
    let arraname = [];
    const inputfirst = document.querySelectorAll("input");
    // console.log(inputfirst[0].value);
    // console.log(inputfirst[1].value);
    arraname = [inputfirst[0].value, inputfirst[1].value]
    return arraname;
  }

  createGamePage() {
    const message = document.createElement("div");
    message.classList.add("message");
    const button = document.createElement("button");
    const link = document.createElement("form");
    const inputFirstName = document.createElement('input');
    inputFirstName.type = "text";
    const inputSecondName = document.createElement('input');
    inputSecondName.type = "text";
    link.append(inputFirstName);
    link.append(inputSecondName);
    link.append(button);
    link.action = "#start-game";
    message.append(link);
    button.innerText = "click";
    button.addEventListener("click", () => {
      const arrayPlayer = [inputFirstName.value, inputSecondName.value]
      console.log(arrayPlayer);
      creatPlayer(arrayPlayer);
    })
    return message;
  }

  returnHTML() {
    const page = this.createGamePage();
    this.container.append(page);
    return this.container;
  }
}

export default GamePage;
