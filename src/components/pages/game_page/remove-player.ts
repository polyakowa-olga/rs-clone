import { Game } from "./init-game"
import { IPlayer } from "../../interfaces/interfaces";
/* eslint-disable */
export class RemovePlayer {
  public static remove(player: IPlayer) {
    player.isBankrupt = true
    // remove player from active players in html
    // ------
    // here for players side...
    // ------
    // here for board side...
    Game.cardsData
      .filter((card) => card.owner === player)
      .map((card) => card.owner = null)
    const playerColors = document.querySelectorAll('.playerColor')
    playerColors.forEach((item) => item.classList.remove(`color${player.id}`))
    const playerChip = document.querySelector(`.color_${player.id}`) as HTMLDivElement
    playerChip.style.visibility = 'hidden'
  }
}