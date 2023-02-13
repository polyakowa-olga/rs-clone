/* eslint-disable */
import { boardAccidental, boardBody, boardTradeElement } from "./game-board-src";
import DicesWindow from "../../animation/dices-animation/throw-dices-window"; // for dices animation
import DiceAnimator from "../../animation/dices-animation/dice-animator"; // for dices animation

// interface ICardsData {
//   id: number,
//   type: string,
//   title: string,
//   description: string,
//   price?: number,
//   tax: number,
//   country?: string,
//   owner?: any,
//   images: string,
//   flag: string
// }

export default class GameBoard {
  gameBoard: HTMLDivElement | undefined;
  cardsData: any;/* CHANGE TO INTERFACE */
  public init() {
    return this.createBoard();
  }

  private createBoard() {
    const board = document.createElement('div');
    board.classList.add('board');
    board.innerHTML = boardBody;
    this.gameBoard = board.querySelector('.boardFieldsContainer') as HTMLDivElement;
    this.createPlayFields()
    this.createChips()

    ///// animation dices start
    const dicesWindowBox = board.querySelector('.playerMainView') as HTMLDivElement;
    const button = document.createElement("button");
    button.classList.add("throw-dices-btn", "button");
    button.textContent = "throw dices";
    dicesWindowBox.append(button);

    const dicesWindow = new DicesWindow("div", ["dices-box"]);
    const dicesWindowHTML = dicesWindow.returnHTML()
    dicesWindowBox.append(dicesWindowHTML);

    button.addEventListener("click", () => {
      button.remove();

      setTimeout(() => {
        const diceAnimator = new DiceAnimator();
        diceAnimator.throwDices();
      }, 500)

      //  setTimeout(() => dicesWindowHTML.remove(), 3000)
    });
    ///// animation dices end

    return board;
  }

  private async createPlayFields() {
    for (let i = 1; i <= 38; i++) {
      const playField = document.createElement('div');
      playField.classList.add('playField');
      playField.id = `field${i}`;
      playField.dataset.fieldNumber = `${i}`;

      // style all fields
      switch (true) {
        case i === 1:
          playField.classList.add('corner', 'start');
          playField.style.top = '0px';
          playField.style.left = '0px';
          break;
        case 1 <= i && i <= 12:
          playField.classList.add('top');
          playField.style.top = '0px';
          playField.style.left = `${13.55 + 6.6265 * (i - 2)}%`;
          playField.innerHTML = boardTradeElement
          break;
        case i === 13:
          playField.classList.add('corner');
          playField.style.top = '0px';
          playField.style.right = '0px';
          break;
        case 14 <= i && i <= 19:
          playField.classList.add('right');
          playField.style.right = '0px';
          playField.style.top = `${19.8198 + 9.9099 * (i - 14)}%`;
          playField.innerHTML = boardTradeElement
          break;
        case i === 20:
          playField.classList.add('corner');
          playField.style.bottom = '0px';
          playField.style.right = '0px';
          break;
        case 21 <= i && i <= 31:
          playField.classList.add('bottom');
          playField.style.bottom = '0px';
          playField.style.right = `${13.7 + 6.6265 * (i - 21)}%`;
          playField.innerHTML = boardTradeElement
          break;
        case i === 32:
          playField.classList.add('corner');
          playField.style.bottom = '0px';
          playField.style.left = '0px';
          break;
        case 33 <= i && i <= 38:
          playField.classList.add('left');
          playField.style.left = '0px';
          playField.style.bottom = `${20.3 + 9.9099 * (i - 33)}%`;
          playField.innerHTML = boardTradeElement
          break;
      }

      (this.gameBoard as HTMLDivElement).append(playField);
    }
    await this.drawBoardElements()
  }

  private createChips() {
    for (let i = 1; i <= 5; i++) {
      const chip = document.createElement('div')
      chip.classList.add('fieldChip', `color_${i}`);
      switch (i) {
        case 1:
          chip.style.left = `2%`
          chip.style.top = `2%`
          break;
        case 2:
          chip.style.left = `7%`
          chip.style.top = `4%`
          break;
        case 3:
          chip.style.left = `5%`
          chip.style.top = `7%`
          break;
        case 4:
          chip.style.left = `8.5%`
          chip.style.top = `10%`
          break;
        case 5:
          chip.style.left = `2.5%`
          chip.style.top = `12%`
          break;
      }
      (this.gameBoard as HTMLDivElement).append(chip)
    }
  }

  public static async getCardsData() {
    const response = await fetch('../../../assets/cards-data.json')
    const data = await response.json()
    return data.cards
  }

  private async drawBoardElements() {
    this.cardsData = await GameBoard.getCardsData()

    const fields = this.gameBoard?.querySelectorAll('.playField') as NodeListOf<HTMLDivElement>
    fields.forEach((field, index) => {
      const flag = field.querySelector('.flag') as HTMLDivElement
      const logo = field.querySelector('.logo') as HTMLDivElement
      const fieldPrice = field.querySelector('.fieldPrice') as HTMLDivElement
      const currCard = this.cardsData[index]
      switch (currCard.type) {
        case 'trade':
          flag.style.backgroundImage = `url('${currCard.flag}')`
          logo.style.backgroundImage = `url('${currCard.images}')`
          fieldPrice.innerText = `$${currCard.price}K`
          break;
        case 'common':
          if ([1, 13, 20, 32].includes(index + 1)) {
            break
          }
          field.insertAdjacentHTML('beforeend', boardAccidental);
          const acc = field.querySelector('.accidential') as HTMLDivElement
          if (acc) {
            acc.innerText = currCard.title
          }
      }
    })
  }
}
