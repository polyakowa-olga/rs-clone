import Page from "../../templates/page";
import { rullOfGame } from "./rulOfGame";

class RulesPage extends Page {
  constructor(id: string) {
    super(id);
  }
  createGamePage() {
    const rulsGame = document.createElement("div");
    rulsGame.innerHTML = rullOfGame;
    rulsGame.classList.add("rules-game");
    return rulsGame;
  }
  returnHTML() {
    const page = this.createGamePage();
    this.container.append(page);
    return this.container;
  }
}

export default RulesPage;
