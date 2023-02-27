/* eslint-disable prettier/prettier */
import { rullOfGameEn, rullOfGameRu } from "./rulOfGame";

class RulesPage {

  public static createBlockRules() {
    const rulsGameShadow = document.createElement("div");
    const rulsGame = document.createElement("div");
    const button = document.createElement("button");
    const buttonDelete = document.createElement("button");
    rulsGameShadow.append(rulsGame);
    if (localStorage.getItem("language") === "en") {
      rulsGame.innerHTML = rullOfGameEn;
      button.innerText = "Ru";
      button.classList.add("en");
    } if (localStorage.getItem("language") === "ru") {
      rulsGame.innerHTML = rullOfGameRu;
      button.innerText = "En";
      button.classList.add("ru");
    } else {
      rulsGame.innerHTML = rullOfGameEn;
      button.innerText = "Ru";
      button.classList.add("en");
    }
    rulsGame.prepend(button);
    rulsGame.prepend(buttonDelete);
    rulsGameShadow.classList.add("rules-game-shadow");
    rulsGame.classList.add("rules-game");
    button.classList.add("button-language");
    buttonDelete.classList.add("button-delete");

    button.addEventListener("click", () => {
      if (button.classList.contains("en")) {
        rulsGame.innerHTML = rullOfGameRu;
        rulsGame.prepend(button);
        button.classList.add("ru");
        button.classList.remove("en");
        button.innerText = "En";
        rulsGame.prepend(buttonDelete);
        buttonDelete.classList.add("button-delete");
      } else if (button.classList.contains("ru")) {
        rulsGame.innerHTML = rullOfGameEn;
        rulsGame.prepend(button);
        button.classList.add("en");
        button.classList.remove("ru");
        button.innerText = "Ru";
        rulsGame.prepend(buttonDelete);
        buttonDelete.classList.add("button-delete");
      }
    });
    buttonDelete.addEventListener("click", () => {
      rulsGameShadow.remove();
    });

    return rulsGameShadow;
  }
  // returnHTML() {
  //   const main = document.querySelector("main");
  //   const blockRules = this.createBlockRules();
  //   main?.append(blockRules);
  //   return blockRules;
  // }
}

export default RulesPage;
