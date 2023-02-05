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
    console.log(this.name);
    console.log(this.money);
    console.log(this.capital);
  }
}

export default CreatePlayers;
