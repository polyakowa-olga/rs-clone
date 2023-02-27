import Element from ".././templates/element";
import { PageIds } from "../app";
import RulesPage from "../pages/rules_page/rules_page";

export enum PageNames {
  StartPage = "Start Page",
  GamePage = "Game Page"
}

export const Buttons = [
  {
    id: PageIds.StartPage,
    content: PageNames.StartPage
  },
  {
    id: PageIds.GamePage,
    content: PageNames.GamePage
  }
];

class Header extends Element {
  constructor(tag: string, classes: string[]) {
    super(tag, classes);
  }

  createPageButtons() {
    const pageButtonsBox = document.createElement("div");
    const blockButtonSound = document.createElement("div");
    const buttonRules = document.createElement("div");
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
    pageButtonsBox.append(buttonRules);
    blockButtonSound.append(buttonSound);
    blockButtonSound.classList.add("block-button-sound");
    buttonRules.classList.add("button-rules");
    buttonSound.classList.add("button-sound");
    buttonSound.classList.toggle("active");
    if (localStorage.getItem("language") === "en") {
      buttonRules.innerText = "Rules";
    } else if (localStorage.getItem("language") === "ru") {
      buttonRules.innerText = "Правила игры";
    } else {
      buttonRules.innerText = "Rules";
    }
    buttonSound.src = "../assets/img/SoundOn.jpg";
    buttonSound.addEventListener("click", () => {
      buttonSound.classList.toggle("active");
    });
    buttonRules.addEventListener("click", () => {
      const rulesGame = document.querySelector(".rules-game");
      if (rulesGame) {
        rulesGame.remove();
      }
      const blockRules = RulesPage.createBlockRules();
      pageButtonsBox.append(blockRules);
    });
    return pageButtonsBox;
  }

  returnHTML() {
    this.container.append(this.createPageButtons());
    return this.container;
  }
}

export default Header;
