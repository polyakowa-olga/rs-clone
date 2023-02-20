import Element from "../../../../../templates/element";
import { ICardData } from "../index";
import CommonInfoBlockCreator from "./window-elements/common-info-block";
import CommonFieldBlockCreator from "./window-elements/common-field-block";
import ValueBlockCreator from "./window-elements/value-block";
import YieldBlockCreator from "./window-elements/yield-block";

class WindowCreator extends Element {
  id: string;
  choosedField: ICardData;
  constructor(
    tag: string,
    classes: string[],
    id: string,
    choosedField: ICardData
  ) {
    super(tag, classes);
    this.id = id;
    this.choosedField = choosedField;
  }
  static createElement(classes: string[], content?: string, tag?: string) {
    const elTag = tag ?? "div";
    const element = document.createElement(elTag);
    element.classList.add(...classes);
    element.textContent = content ? content : "";
    return element;
  }

  static createContainer(
    classes: string[],
    contentElements: HTMLElement[],
    id?: string
  ) {
    const element = document.createElement("div");
    element.classList.add(...classes);
    if (id) element.id = id;
    contentElements.forEach((el) => {
      element.append(el);
    });
    return element;
  }

  static changeValueView(value: number) {
    return `$${value}K`;
  }

  createCrossBlock() {
    const cross = WindowCreator.createElement(["i-cross"]);
    cross.style.backgroundImage = "url('../assets/icons/cross.png')";

    return cross;
  }

  run() {
    this.container.prepend(this.createCrossBlock());

    if (this.choosedField.type === "common") {
      const commonFieldBlock = new CommonFieldBlockCreator(
        "div",
        ["com-field-i-block"],
        this.choosedField
      ).run();
      this.container.append(commonFieldBlock);
    } else {
      const commonInfoBlock = new CommonInfoBlockCreator(
        "div",
        ["com-i-block"],
        this.choosedField
      ).run();
      const yieldBlock = new YieldBlockCreator(
        "div",
        ["yield-box"],
        this.choosedField
      ).run();
      const rightBlock = new ValueBlockCreator(
        "div",
        ["right-part"],
        this.choosedField
      ).run();
      rightBlock.append(yieldBlock);
      this.container.append(commonInfoBlock, rightBlock);
    }
    this.container.id = this.id;

    return this.container;
  }
}

export default WindowCreator;
