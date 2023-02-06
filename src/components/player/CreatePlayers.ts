class CreatePlayers {
  id: number;
  name: string;
  money: string;
  capital: string;
  color: string;

  constructor(
    id: number,
    name: string,
    money: string,
    capital: string,
    color: string
  ) {
    this.id = id;
    this.name = name;
    this.money = money;
    this.capital = capital;
    this.color = color;
  }

  createDiv() {
    const block = document.createElement("div");
    const picturePlayerBlock = document.createElement("div");
    const picturePlayer = document.createElement("img");
    const discriptionPlayerBlock = document.createElement("div");
    const nameBlock = document.createElement("div");
    const nameChipBlock = document.createElement("div");
    const nameChip = document.createElement("img");
    const name = document.createElement("h1");
    const moneyBlock = document.createElement("h3");
    const moneyBlockSpan = document.createElement("span");
    const capitalBlock = document.createElement("h3");
    const capitalBlockSpan = document.createElement("span");

    block.append(nameBlock);
    nameBlock.append(name);
    nameBlock.append(nameChipBlock);
    nameChipBlock.append(nameChip);
    block.append(picturePlayerBlock);
    picturePlayerBlock.append(picturePlayer);
    block.append(discriptionPlayerBlock);
    discriptionPlayerBlock.append(capitalBlock);
    discriptionPlayerBlock.append(moneyBlock);

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
    moneyBlockSpan.innerText = this.money;
    moneyBlock.innerHTML = moneyBlock.innerText = `Money : &#8364${moneyBlockSpan.outerHTML} $`;
    capitalBlockSpan.innerHTML = this.capital;
    capitalBlock.innerHTML = capitalBlock.innerText = `Capital : &#x20ac${capitalBlockSpan.outerHTML} $`;
    return block;
  }
}

export default CreatePlayers;
