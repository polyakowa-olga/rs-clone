/* eslint-disable prettier/prettier */
import Element from "../../templates/element";

const sideData = {
  commonClass: "dice-side",
  indivClasses: ["dice-front", "dice-back", "dice-left", "dice-right", "dice-top", "dice-bottom"]
}

class Dice extends Element {
  private id: string
  constructor(tag: string, classes: string[], id: string) {
    super(tag, classes);
    this.id = id
  }

  createDice() {

    const sidesBox = document.createDocumentFragment();
    for (let i = 0; i < sideData.indivClasses.length; i++) {
      const indivClass = sideData.indivClasses[i];
      const side = document.createElement("div");
      side.classList.add(`${sideData.commonClass}`, `${indivClass}`);
      side.id = `${this.id}${indivClass.slice(4)}`;
      side.textContent = `${indivClass.slice(5)}`;
      sidesBox.append(side);
    }
    return sidesBox;
  }

  returnHTML() {
    this.container.id = this.id
    this.container.append(this.createDice());
    return this.container;
  }
}

export default Dice;
