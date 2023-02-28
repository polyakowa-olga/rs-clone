/* eslint-disable prettier/prettier */
import Page from "../../templates/page";
import { Buttons } from "../../header/header";

class StartPage extends Page {
  constructor(id: string) {
    super(id);
  }

  createPageButton() {
    const blockStart = document.createElement("div");
    const buttonHTML = document.createElement("a");
    const buttonLanguage = document.createElement("img");
    blockStart.append(buttonHTML);
    blockStart.append(buttonLanguage);
    buttonHTML.href = `#${Buttons[1].id}`;
    blockStart.classList.add("block-start");
    buttonLanguage.classList.add("block-button-language");
    buttonLanguage.classList.add("en");
    buttonLanguage.addEventListener("click", () => {
      const buttonRules = document.querySelector(".button-rules") as HTMLElement;
      if (localStorage.getItem("language") === "en") {
        buttonLanguage.src = "../../../../assets/icons/icon-united-kingdom.png";
        localStorage.setItem("language", "ru");
        buttonLanguage.classList.add("ru");
        buttonLanguage.classList.remove("en");
        buttonHTML.innerText = "Старт Игры";
        buttonRules.innerText = "Правила игры";
      } else {
        buttonLanguage.src = "../../../../assets/icons/icon-russia.png";
        localStorage.setItem("language", "en");
        buttonLanguage.classList.add("en");
        buttonLanguage.classList.remove("ru");
        buttonHTML.innerText = "START GAME";
        buttonRules.innerText = "Rules";
      }
    });
    if (localStorage.getItem("language") === "en") {
      buttonHTML.innerText = "START GAME";
      buttonLanguage.src = "../../../../assets/icons/icon-russia.png";
    } else if (localStorage.getItem("language") === "ru") {
      buttonHTML.innerText = "Старт Игры";
      buttonLanguage.src = "../../../../assets/icons/icon-united-kingdom.png";
    } else {
      localStorage.setItem("language", "en");
      buttonHTML.innerText = "START GAME";
      buttonLanguage.src = "../../../../assets/icons/icon-russia.png";
    }
    buttonHTML.classList.add("button", `${Buttons[1].id}-button`);
    return blockStart;
  }
  returnHTML() {
    const button = this.createPageButton();
    this.container.append(button);
    return this.container;
  }
}

export default StartPage;
