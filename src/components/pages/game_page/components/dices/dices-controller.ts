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
    const dicesWindowBox = document.querySelector(".playerMainView");
    const dicesWindow = new DicesWindow(
      "div",
      ["dices-box"],
      diceOneSidesSet,
      diceTwoSidesSet
    );
    const dicesWindowHTML = dicesWindow.returnHTML();
    if (dicesWindowBox) {
      dicesWindowBox.append(dicesWindowHTML);
    }
    setTimeout(() => this.throwDices(), 1000);

    setTimeout(() => dicesWindowHTML.remove(), 3000);
  }
}

export default DicesController;
