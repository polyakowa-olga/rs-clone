import { ICardsData, IPlayer } from "../../interfaces/interfaces";
import { tradeWindow } from "./game-board-src";
import { Game } from "./init-game";
/* eslint-disable */
export class Trade {
  public static startTrading(player: IPlayer) {
    const cardsData: ICardsData[] = Game.cardsData
    const gameInterfaceElem = document.querySelector('.playerMainView') as HTMLDivElement
    gameInterfaceElem.insertAdjacentHTML('afterbegin', tradeWindow)
    // const tradeLayout =
    // add layout for trade
    // add logic for trade
    // 
  }
}