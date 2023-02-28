/* eslint-disable prettier/prettier */
import { IPlayer } from "../interfaces/interfaces";

class ShowPlayer {
  id: number;
  name: string;
  money: number;
  capital: number;
  color: string;

  constructor(player: IPlayer) {
    this.id = player.id;
    this.name = player.name;
    this.money = player.money;
    this.capital = player.capital;
    this.color = player.color;
  }

  createDiv() {
    const block = document.createElement("div");
    const pictureBlock = document.createElement("div");
    const picturePlayerBlock = document.createElement("div");
    const picturePlayer = document.createElement("img");
    const nameChipBlock = document.createElement("div");
    const nameChip = document.createElement("img");
    const discriptionPlayerBlock = document.createElement("div");
    const nameBlock = document.createElement("div");
    const name = document.createElement("h1");
    const moneyBlock = document.createElement("h3");
    const moneyBlockSpan = document.createElement("span");
    const capitalBlock = document.createElement("h3");
    const capitalBlockSpan = document.createElement("span");

    block.append(pictureBlock);
    pictureBlock.append(picturePlayerBlock);
    pictureBlock.append(nameChipBlock);
    picturePlayerBlock.append(picturePlayer);
    nameChipBlock.append(nameChip);
    block.append(nameBlock);
    nameBlock.append(name);
    block.append(discriptionPlayerBlock);
    discriptionPlayerBlock.append(moneyBlock);
    discriptionPlayerBlock.append(capitalBlock);

    block.classList.add("player");
    pictureBlock.classList.add("picture-block");
    nameBlock.classList.add("name-block");
    name.classList.add("name");
    nameChipBlock.classList.add("name-chip-block");
    nameChip.classList.add(`${this.color}-chip`);
    picturePlayerBlock.classList.add("picture-player-block");
    picturePlayer.classList.add(`${this.color}`);
    picturePlayer.classList.add("picture-player");
    discriptionPlayerBlock.classList.add("description-player");
    block.id = this.id.toString();
    nameChip.src = "../../assets/img/chips_hall.png";
    picturePlayer.src = "../../assets/img/unknownPlayer.jpg";
    name.innerText = this.name;
    moneyBlockSpan.id = `money-${this.id}`;
    moneyBlockSpan.innerText = this.money.toString();
    moneyBlock.innerHTML = moneyBlock.innerText = `Money: $${moneyBlockSpan.outerHTML}K`;
    if (localStorage.getItem("language") === "ru") {
      moneyBlock.innerHTML = moneyBlock.innerText = `Деньги: $${moneyBlockSpan.outerHTML}K`;
    }
    capitalBlockSpan.id = `capital-${this.id}`;
    capitalBlockSpan.innerHTML = this.capital.toString();
    capitalBlock.innerHTML = capitalBlock.innerText = `Capital: $${capitalBlockSpan.outerHTML}K`;
    if (localStorage.getItem("language") === "ru") {
      capitalBlock.innerHTML = capitalBlock.innerText = `Капитал: $${capitalBlockSpan.outerHTML}K`;
    }
    return block;
  }
}

export default ShowPlayer;
