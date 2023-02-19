import Page from "../../templates/page";
import { rullOfGameEn, rullOfGameRu } from "./rulOfGame";

class RulesPage extends Page {
  constructor(id: string) {
    super(id);
  }
  createGamePage() {
    const rulsGame = document.createElement("div");
    const button = document.createElement("button");
    rulsGame.innerHTML = rullOfGameEn;
    rulsGame.prepend(button);
    rulsGame.classList.add("rules-game");
    button.classList.add("button-language");
    button.innerText = "Ru";
    button.classList.add("en");
    button.addEventListener("click", () => {
      if (button.classList.contains("en")) {
        rulsGame.innerHTML = rullOfGameRu;
        rulsGame.prepend(button);
        button.classList.add("ru");
        button.classList.remove("en");
        button.innerText = "En";
      } else if (button.classList.contains("ru")) {
        rulsGame.innerHTML = rullOfGameEn;
        rulsGame.prepend(button);
        button.classList.add("en");
        button.classList.remove("ru");
        button.innerText = "Ru";
      }
    });

    return rulsGame;
  }
  returnHTML() {
    const page = this.createGamePage();
    this.container.append(page);
    return this.container;
  }
}

export default RulesPage;
