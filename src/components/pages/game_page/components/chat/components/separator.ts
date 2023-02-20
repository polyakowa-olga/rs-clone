/* eslint-disable */
import Element from "../../../../../templates/element";

class Separator extends Element {
  constructor(
    tag: string,
    classes: string[]
  ) {
    super(tag, classes);
  }

  createSeparator() {
    return "- ||| -";
  }

  returnHTML() {
    const separator = this.createSeparator();
    this.container.textContent = separator;
    return this.container;
  }
}

export default Separator;
