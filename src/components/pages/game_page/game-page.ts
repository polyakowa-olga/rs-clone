/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { IPlayer } from "../../interfaces/interfaces";
import Page from "../../templates/page";
import { creatPlayer } from "../createJson/createJson";
import GameBoard from "./game-board";
import { Game } from './init-game';
class GamePage extends Page {
  static createArrayName: string[];
  static createInput: HTMLInputElement;
  constructor(id: string) {
    super(id);
  }

  createInput() {
    const inputBlock = document.createElement("div");
    const inputName = document.createElement('input');
    const addInput = document.createElement("div");

    inputBlock.append(inputName);
    inputBlock.append(addInput);

    inputName.type = "text";
    inputName.placeholder = "Please, enter your name";
    inputName.classList.add("input");
    inputBlock.classList.add("input-block");
    addInput.classList.add("addInput");

    addInput.addEventListener("click", () => {
      const allInputs = document.querySelectorAll("input");
      const buttonAddInputs = document.querySelector(".form-add") as HTMLElement;
      if (allInputs.length > 2) {
        buttonAddInputs.classList.remove("no-add");
        inputBlock.remove();
      }
    })

    return inputBlock;
  }


  createArrayName() {
    const arraname = [];
    const inputfirst = document.querySelectorAll("input");
    for (let i = 0; i < inputfirst.length; i++) {
      inputfirst[i];
      arraname.push(inputfirst[i].value);
    }
    return arraname;
  }


  createGamePage() {
    const message = document.createElement("div");
    message.classList.add("message");
    const blockPlayers = document.createElement("div");
    const textforBlock = document.createElement("h2");
    const button = document.createElement("button");
    const link = document.createElement("form");
    message.append(blockPlayers);
    link.append(button);
    blockPlayers.append(textforBlock);
    blockPlayers.classList.add("block-players");
    textforBlock.classList.add("text-form");
    blockPlayers.append(link);
    link.classList.add("form");
    const buttonAddInputs = document.createElement("div");
    buttonAddInputs.classList.add("form-add");
    buttonAddInputs.innerText = "Add player";
    textforBlock.innerText = "Please, choose from 2 to 5 players..."
    buttonAddInputs.addEventListener("click", () => {
      const allInputs = document.querySelectorAll("input")
      if (allInputs.length < 4) {
        const input = this.createInput();
        link.append(input);
      } else if (allInputs.length < 5) {
        const input = this.createInput();
        link.append(input);
        buttonAddInputs.classList.add("no-add");
      }
    })
    const input = this.createInput();
    link.append(input);
    const input2 = this.createInput();
    link.append(input2);
    // const input2 = this.createInput();
    blockPlayers.append(buttonAddInputs);

    //link.action = "#start-game";
    button.innerText = "Start game";
    button.classList.add("button-start-game");
    button.addEventListener("click", async () => {
      const names = this.createArrayName()
      await creatPlayer(names);
      // console.log(this.createArrayName());

      const container = document.querySelector('main');
      const gameBoard = new GameBoard().init();
      (container as HTMLDivElement).innerHTML = '';
      container?.append(gameBoard);
      const playersToPlay = [{
        "id": 1,
        "name": "Pavel",
        "money": 1500,
        "capital": 1500,
        "color": "red",
        "currentPosition": 1
      },
      {
        "id": 2,
        "name": "Kolya",
        "money": 1500,
        "capital": 1500,
        "color": "purple",
        "currentPosition": 1
      }, {
        "id": 3,
        "name": "Petya",
        "money": 1500,
        "capital": 1500,
        "color": "green",
        "currentPosition": 1,
      },
      {
        "id": 4,
        "name": "Vasya",
        "money": 1500,
        "capital": 1500,
        "color": "yellow",
        "currentPosition": 1
      },
      {
        "id": 5,
        "name": "Vasya",
        "money": 1500,
        "capital": 1500,
        "color": "yellow",
        "currentPosition": 1
      }]
      playersToPlay.forEach((player, i) => {
        player.name = names[i]
      })
      playersToPlay.length = names.length
      console.log('final players:', playersToPlay);

      const game = new Game(playersToPlay)
      game.init()
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
