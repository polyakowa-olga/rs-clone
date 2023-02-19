/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
// import { IPlayer } from "../../interfaces/interfaces";
import ShowPlayer from "../../player/ShowPlayer";
import Page from "../../templates/page";
// import { creatPlayer } from "../createJson/createJson";
import GameBoard from "./game-board";
import { Game } from './init-game';
class GamePage extends Page {
  static createArrayName: string[];
  static createInput: HTMLInputElement;
  constructor(id: string) {
    super(id);
  }

  createImg() {
    const allImg = document.querySelectorAll(".input-img");
    console.log(allImg);
    for (let i = 0; i < allImg.length; ++i) {
      const e = allImg[i] as HTMLImageElement;
      e.src = "../../../assets/img/chips_hall.png";
    }
    if (allImg[0]) {
      allImg[0].classList.remove("blue-chip");
      allImg[0].classList.remove("green-chip");
      allImg[0].classList.remove("yellow-chip");
      allImg[0].classList.remove("pink-chip");
      allImg[0].classList.add("red-chip");
    }
    if (allImg[1]) {
      allImg[1].classList.remove("red-chip");
      allImg[1].classList.remove("green-chip")
      allImg[1].classList.remove("yellow-chip");
      allImg[1].classList.remove("pink-chip");
      allImg[1].classList.add("blue-chip");
    }
    if (allImg[2]) {
      allImg[2].classList.remove("red-chip");
      allImg[2].classList.remove("blue-chip")
      allImg[2].classList.remove("yellow-chip");
      allImg[2].classList.remove("pink-chip");
      allImg[2].classList.add("green-chip");
    }
    if (allImg[3]) {
      allImg[3].classList.remove("red-chip");
      allImg[3].classList.remove("blue-chip")
      allImg[3].classList.remove("green-chip");
      allImg[3].classList.remove("pink-chip");
      allImg[3].classList.add("yellow-chip");
    }
    if (allImg[4]) {
      allImg[4].classList.remove("red-chip");
      allImg[4].classList.remove("blue-chip")
      allImg[4].classList.remove("green-chip");
      allImg[4].classList.remove("yellow-chip");
      allImg[4].classList.add("pink-chip");
    }
  }

  createInput() {
    const inputBlock = document.createElement("div");
    const inputBlockImg = document.createElement("div");
    const inputImg = document.createElement("img");
    const inputName = document.createElement('input');
    const addInput = document.createElement("div");

    inputBlock.append(inputBlockImg);
    inputBlockImg.append(inputImg);
    inputBlock.append(inputName);
    inputBlock.append(addInput);

    inputName.type = "text";
    inputName.placeholder = "Please, enter your name";
    inputName.classList.add("input");
    inputBlock.classList.add("input-block");
    addInput.classList.add("addInput");
    inputImg.classList.add("input-img");
    inputBlockImg.classList.add("input-block-img");
    inputImg.src = "../../../assets/img/chips_hall.png";

    addInput.addEventListener("click", () => {
      const allInputs = document.querySelectorAll("input");
      const buttonAddInputs = document.querySelector(".form-add") as HTMLElement;
      if (allInputs.length > 2) {
        buttonAddInputs.classList.remove("no-add");
        inputBlock.remove();
        this.createImg();
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
    buttonAddInputs.innerText = "+";
    textforBlock.innerText = "Please, add player from 2 till 5";
    buttonAddInputs.addEventListener("click", () => {
      const allInputs = document.querySelectorAll("input")
      if (allInputs.length < 4) {
        const input = this.createInput();
        link.prepend(input);
        this.createImg();
        button.classList.remove("no-add");
      } else if (allInputs.length < 5) {
        const input = this.createInput();
        link.prepend(input);
        buttonAddInputs.classList.add("no-add");
        this.createImg();
      }
    })
    link.prepend(buttonAddInputs);
    const input = this.createInput();
    link.prepend(input);
    button.innerText = "Start game";
    button.classList.add("button-start-game");
    button.classList.add("no-add");
    button.addEventListener("click", async () => {
      const names = this.createArrayName();

      const container = document.querySelector('main');
      const gameBoard = new GameBoard().init();
      (container as HTMLDivElement).innerHTML = '';
      container?.append(gameBoard);

      const message = document.getElementById("game-page") as HTMLDivElement;
      const blockPlayers = document.createElement("div") as HTMLDivElement;
      message.prepend(blockPlayers);
      blockPlayers.classList.add("players");
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
        "color": "blue",
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
        "color": "pink",
        "currentPosition": 1
      }]
      playersToPlay.forEach((player, i) => {
        player.name = names[i];
      })
      playersToPlay.length = names.length
      console.log('final players:', playersToPlay);
      playersToPlay.forEach((player, i) => {
        const createPlayer = new ShowPlayer(player);
        const createBlockPlayer = createPlayer.createDiv();
        blockPlayers.append(createBlockPlayer);
      })
      // 

      const game = new Game(playersToPlay)
      game.init();
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
