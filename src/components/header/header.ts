import Element from ".././templates/element";
import { PageIds } from "../app";

export enum PageNames {
  StartPage = "Start Page",
  GamePage = "Game Page",
  RulesPage = "Rules Page"
}

export const Buttons = [
  {
    id: PageIds.StartPage,
    content: PageNames.StartPage
  },
  {
    id: PageIds.GamePage,
    content: PageNames.GamePage
  },
  {
    id: PageIds.RulesPage,
    content: PageNames.RulesPage
  }
];

class Header extends Element {
  constructor(tag: string, classes: string[]) {
    super(tag, classes);
  }

  createPageButtons() {
    const pageButtonsBox = document.createElement("div");
    const blockButtonSound = document.createElement("div");
    const buttonSound = document.createElement("img");
    pageButtonsBox.classList.add("page-button-box");
    Buttons.forEach((button) => {
      if (button.id !== PageIds.StartPage && button.id !== PageIds.GamePage) {
        const buttonHTML = document.createElement("a");
        buttonHTML.href = `#${button.id}`;
        buttonHTML.innerText = button.content;
        buttonHTML.classList.add("button", `#${button.id}-button`);
        pageButtonsBox.append(buttonHTML);
      }
    });
    pageButtonsBox.append(blockButtonSound);
    blockButtonSound.append(buttonSound);
    blockButtonSound.classList.add("block-button-sound");
    buttonSound.classList.add("button-sound");
    buttonSound.classList.toggle("active");
    buttonSound.src = "../assets/img/SoundOn.jpg";
    buttonSound.addEventListener("click", () => {
      buttonSound.classList.toggle("active");
    });
    return pageButtonsBox;
  }

  returnHTML() {
    this.container.append(this.createPageButtons());
    return this.container;
  }
}

export default Header;
