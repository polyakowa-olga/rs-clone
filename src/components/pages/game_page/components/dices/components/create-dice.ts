/* eslint-disable prettier/prettier */
import Element from "../../../../../templates/element";

const sideData = {
  commonClass: "dice-side",
  indivClasses: [
    "dice-front",
    "dice-back",
    "dice-left",
    "dice-right",
    "dice-top",
    "dice-bottom"
  ],
  imgSrc: [
    'url("../assets/img/dice-1.png")',
    'url("../assets/img/dice-2.png")',
    'url("../assets/img/dice-3.png")',
    'url("../assets/img/dice-4.png")',
    'url("../assets/img/dice-5.png")',
    'url("../assets/img/dice-6.png")'
  ]
};

class Dice extends Element {
  private id: string;
  constructor(tag: string, classes: string[], id: string) {
    super(tag, classes);
    this.id = id;
  }

  createDice(diceSidesSet?: number[]) {
    const sidesBox = document.createDocumentFragment();

    console.log(diceSidesSet);
    for (let i = 0; i < sideData.indivClasses.length; i++) {
      const indivClass = sideData.indivClasses[i];
      const side = document.createElement("div");
      side.classList.add(`${sideData.commonClass}`, `${indivClass}`);
      side.id = `${this.id}${indivClass.slice(4)}`;
      if (diceSidesSet) {
        side.style.backgroundImage = sideData.imgSrc[diceSidesSet[i]];
      }
      sidesBox.append(side);
    }

    return sidesBox;
  }

  returnHTML(diceSidesSet?: number[]) {
    this.container.id = this.id;
    this.container.append(this.createDice(diceSidesSet));
    return this.container;
  }
}

export default Dice;
