/* eslint-disable prettier/prettier */
import Element from "../../../../../templates/element";
import Dice from "./create-dice";

class DicesWindow extends Element {
  private diceOne: Dice;
  private diceTwo: Dice;
  diceOneSidesSet: number[];
  diceTwoSidesSet: number[];

  constructor(
    tag: string,
    classes: string[],
    diceOneSidesSet: number[],
    diceTwoSidesSet: number[]
  ) {
    super(tag, classes);
    this.diceOne = new Dice("div", ["dice"], "dice-one");
    this.diceTwo = new Dice("div", ["dice"], "dice-two");
    this.diceOneSidesSet = diceOneSidesSet;
    this.diceTwoSidesSet = diceTwoSidesSet;
  }

  returnHTML() {
    this.container.append(
      this.diceOne.returnHTML(this.diceOneSidesSet),
      this.diceTwo.returnHTML(this.diceTwoSidesSet)
    );
    return this.container;
  }
}

export default DicesWindow;
