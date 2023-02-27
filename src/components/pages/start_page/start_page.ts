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
    const buttonLanguage = document.createElement("button");
    blockStart.append(buttonHTML);
    blockStart.append(buttonLanguage);
    buttonHTML.href = `#${Buttons[1].id}`;
    blockStart.classList.add("block-start");
    buttonLanguage.classList.add("block-button-language");
    buttonLanguage.classList.add("en");
    buttonLanguage.addEventListener("click", () => {
      const buttonRules = document.querySelector(".button-rules") as HTMLElement;
      if (localStorage.getItem("language") === "en") {
        buttonLanguage.innerText = "En";
        localStorage.setItem("language", "ru");
        buttonLanguage.classList.add("ru");
        buttonLanguage.classList.remove("en");
        buttonHTML.innerText = "Старт Игры";
        buttonRules.innerText = "Правила игры";
      } else {
        buttonLanguage.innerText = "Ru";
        localStorage.setItem("language", "en");
        buttonLanguage.classList.add("en");
        buttonLanguage.classList.remove("ru");
        buttonHTML.innerText = "START GAME";
        buttonRules.innerText = "Rules";
      }
    });
    if (localStorage.getItem("language") === "en") {
      buttonHTML.innerText = "START GAME";
      buttonLanguage.innerText = "Ru";
    } else if (localStorage.getItem("language") === "ru") {
      buttonHTML.innerText = "Старт Игры";
      buttonLanguage.innerText = "En";
    } else {
      localStorage.setItem("language", "en");
      buttonHTML.innerText = "START GAME";
      buttonLanguage.innerText = "Ru";
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
