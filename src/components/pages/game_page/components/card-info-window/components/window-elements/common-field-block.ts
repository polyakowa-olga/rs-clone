import Element from "../../../../../../templates/element";
import { ICardData } from "../../index";
import WindowCreator from "../window-creator";

class CommonFieldBlockCreator extends Element {
  choosedField: ICardData;
  constructor(tag: string, classes: string[], choosedField: ICardData) {
    super(tag, classes);
    this.choosedField = choosedField;
  }

  createBlock() {
    const { name, description } = this.choosedField;

    const nameBox = WindowCreator.createElement(["i-com-name"], name);

    const text = WindowCreator.createElement(["i-com-text"], description);

    const block = new DocumentFragment();
    block.append(nameBox, text);

    return block;
  }

  run() {
    this.container.append(this.createBlock());
    return this.container;
  }
}

export default CommonFieldBlockCreator;
