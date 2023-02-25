import Page from "../../templates/page";
import { Buttons } from "../../header/header";

class StartPage extends Page {
  constructor(id: string) {
    super(id);
  }

  createPageButton() {
    const buttonHTML = document.createElement("a");
    buttonHTML.href = `#${Buttons[1].id}`;
    buttonHTML.innerText = "START GAME";
    buttonHTML.classList.add("button", `${Buttons[1].id}-button`);
    return buttonHTML;
  }
  returnHTML() {
    const button = this.createPageButton();
    this.container.append(button);
    return this.container;
  }
}

export default StartPage;
