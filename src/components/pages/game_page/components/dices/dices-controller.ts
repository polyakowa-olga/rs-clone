import DicesWindow from "./components/throw-dices-window";
import DiceAnimator from "./dices-animation/dice-animator";
import throwSettings from "./dices-animation/throw-settings";
import dices from "./components/dice-params";

class DicesController {
  throwDices() {
    const diceAnimator = new DiceAnimator();
    diceAnimator.throwDice(dices[0], throwSettings[0]);
    diceAnimator.throwDice(dices[1], throwSettings[1]);
  }
  run(diceOneSidesSet: number[], diceTwoSidesSet: number[]) {
    console.log(diceOneSidesSet, diceTwoSidesSet);
    const dicesWindowBox = document.querySelector(".playerMainView");
    const button = document.createElement("button");
    button.classList.add("throw-dices-btn", "button");
    button.textContent = "throw dices";
    if (dicesWindowBox) {
      dicesWindowBox.append(button);

      const dicesWindow = new DicesWindow(
        "div",
        ["dices-box"],
        diceOneSidesSet,
        diceTwoSidesSet
      );
      const dicesWindowHTML = dicesWindow.returnHTML();
      dicesWindowBox.append(dicesWindowHTML);

      button.addEventListener("click", () => {
        button.remove();

        setTimeout(() => {
          this.throwDices();
        }, 500);

        setTimeout(() => dicesWindowHTML.remove(), 3000);
      });
    }
  }
}

export default DicesController;
