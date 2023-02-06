/* eslint-disable prettier/prettier */
import { boardAccidental, boardBody, boardTradeElement } from "./game-board-src";

export default class GameBoard {
  gameBoard: HTMLDivElement | undefined;

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
          playField.style.left = `${13.253 + 6.6265 * (i - 2)}%`;
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
          playField.style.right = `${13.3505 + 6.6265 * (i - 21)}%`;
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
          playField.style.bottom = `${19.8198 + 9.9099 * (i - 33)}%`;
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
      // switch (i === 6 || i === 25 || i === 8 || i === 27 || i === 17 || i === 36) {
      //   case i === 6 || i === 25:
      //     playField.insertAdjacentHTML('beforeend', boardAccidental);
      //     (playField.querySelector('.accidential') as HTMLDivElement).innerText = 'FORCE MAJOR';
      //     break;
      //   case i === 8 || i === 27:
      //     playField.insertAdjacentHTML('beforeend', boardAccidental);
      //     (playField.querySelector('.accidential') as HTMLDivElement).innerText = 'CHANCE';
      // switch (i === 6 || i === 25) {
      //   case true:
      //     (playField.querySelector('.accidential') as HTMLDivElement).innerText = 'FORCE MAJOR'
      //     break;
      // }

      //   case i === 8 || i === 27:
      //     (playField.querySelector('.accidential') as HTMLDivElement).innerText = 'CHANCE';
      //     break;
      //   case i === 17 || i === 36:
      //     (playField.querySelector('.accidential') as HTMLDivElement).innerText = 'TAX 6%';
      //     break;
      // }


      (this.gameBoard as HTMLDivElement).append(playField);
    }
  }

  private createChips() {
    for (let i = 1; i <= 5; i++) {
      const chip = document.createElement('div')
      chip.classList.add('fieldChip', `color_${i}`);
      (this.gameBoard as HTMLDivElement).append(chip)
    }
  }
}
