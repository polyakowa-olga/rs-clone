/* eslint-disable */
import { boardAccidental, boardBody, boardTradeElement } from "./game-board-src";

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
    this.getCardsData()
    return this.createBoard();
  }

  private createBoard() {
    const board = document.createElement('div');
    board.classList.add('board');
    board.innerHTML = boardBody;
    this.gameBoard = board.querySelector('.boardFieldsContainer') as HTMLDivElement;
    this.createPlayFields()
    this.createChips()
    return board;
  }

  private createPlayFields() {
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

      // modify accidental fields
      if (i === 6 || i === 25 || i === 8 || i === 27 || i === 17 || i === 36) {
        playField.insertAdjacentHTML('beforeend', boardAccidental);
        const accidentialField = playField.querySelector('.accidential') as HTMLDivElement
        switch (true) {
          case i === 6 || i === 25:
            accidentialField.innerText = 'FORCE MAJOR'
            break;
          case i === 8 || i === 27:
            accidentialField.innerText = 'CHANCE'
            break;
          case i === 17 || i === 36:
            accidentialField.innerText = 'TAX 6%'
            break;

        }
      }

      (this.gameBoard as HTMLDivElement).append(playField);

    }
    this.drawBoardElements()
  }

  private createChips() {
    for (let i = 1; i <= 5; i++) {
      const chip = document.createElement('div')
      chip.classList.add('fieldChip', `color_${i}`);
      (this.gameBoard as HTMLDivElement).append(chip)
    }
  }

  private getCardsData() {
    // const data = fetch('../../../assets/cards-data.json')
    //   .then((response) => response.json())
    // // .then((json) => console.log(json));

    // // this.cardsData = data
    // // console.log(this.cardsData);
    // // const data = await fetch('../../../assets/cards-data.json')
    // // const response = data.json()
    // // //   .then((response) => response.json())
    // // //   .then((json) => json.cards);
    // // // this.cardsData = data
    // console.log(data);

  }

  private async drawBoardElements() {
    const data = await fetch('../../../assets/cards-data.json')
      .then((response) => response.json())
      .then((result) => result)
    console.log(data);

    // const fields = this.gameBoard?.querySelectorAll('.playField') as NodeListOf<HTMLDivElement>
    // fields.forEach((field, index) => {
    //   const flag = field.querySelector('.flag') as HTMLDivElement
    //   const logo = field.querySelector('.logo') as HTMLDivElement
    //   const fieldPrice = field.querySelector('.fieldPrice') as HTMLDivElement
    //   console.log(data[index])
    // })

  }
}
