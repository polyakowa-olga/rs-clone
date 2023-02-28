/* eslint-disable */
import Element from "../../../../../../templates/element";
import { ICardData } from "../../index";
import WindowCreator from "../window-creator";

class CommonInfoBlockCreator extends Element {
  choosedField: ICardData;
  constructor(tag: string, classes: string[], choosedField: ICardData) {
    super(tag, classes);
    this.choosedField = choosedField;
  }

  createBlock() {
    const { name, country, countryName, web, images, description } = this.choosedField;

    const nameBox = WindowCreator.createElement(["i-name"], name);
    let countryBox = WindowCreator.createElement(["i-country"], country);
    if (localStorage.getItem("language") === "ru") {
      countryBox = WindowCreator.createElement(["i-country"], countryName);
    }
    const webBox = WindowCreator.createElement(
      ["i-web"],
      web,
      "a"
    ) as HTMLAnchorElement;
    if (web) webBox.href = web;

    const titleBox = WindowCreator.createContainer(
      ["i-title"],
      [nameBox, countryBox, webBox]
    );

    const logoBox = WindowCreator.createElement(["i-logo"]);
    logoBox.style.backgroundImage = images ? `url(${images})` : "";

    const caption = WindowCreator.createContainer(
      ["i-title"],
      [logoBox, titleBox]
    );

    const text = WindowCreator.createElement(["i-text"], description);

    const block = new DocumentFragment();
    block.append(caption, text);

    return block;
  }

  run() {
    this.container.append(this.createBlock());
    return this.container;
  }
}

export default CommonInfoBlockCreator;
