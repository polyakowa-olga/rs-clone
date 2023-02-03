class CreatePlayers {
  name: string;
  money: number;
  capital: number;

  constructor(name: string, money: number, capital: number) {
    this.name = name;
    this.money = money;
    this.capital = capital;
  }

  createDiv() {
    return console.log("hello");
  }
}

export default CreatePlayers;
