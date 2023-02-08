import Element from "../../templates/element";
import Dice from "./create-dice";

class DicesWindow extends Element {
  private diceOne: Dice;
  private diceTwo: Dice;

  constructor(tag: string, classes: string[]) {
    super(tag, classes);
    this.diceOne = new Dice("div", ["dice"], "dice-one");
    this.diceTwo = new Dice("div", ["dice"], "dice-two");
  }

  returnHTML() {
    this.container.append(this.diceOne.returnHTML(), this.diceTwo.returnHTML());
    return this.container;
  }
}

export default DicesWindow;
