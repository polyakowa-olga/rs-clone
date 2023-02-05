class CreatePlayers {
  name: string;
  money: string;
  capital: string;

  constructor(name: string, money: string, capital: string) {
    this.name = name;
    this.money = money;
    this.capital = capital;
  }

  createDiv() {
    const block = document.createElement("div");
    const nameBlock = document.createElement("h1");
    const moneyBlock = document.createElement("h3");
    const moneyBlockSpan = document.createElement("span");
    const capitalBlock = document.createElement("h3");
    const capitalBlockSpan = document.createElement("span");

    nameBlock.innerText = this.name;
    moneyBlockSpan.innerText = this.money;
    moneyBlock.innerHTML = moneyBlock.innerText =
      `Money : ` + moneyBlockSpan.outerHTML;
    capitalBlockSpan.innerHTML = this.capital;
    capitalBlock.innerHTML = capitalBlock.innerText =
      `Capital : ` + capitalBlockSpan.outerHTML;
    return block;
  }
}

export default CreatePlayers;
