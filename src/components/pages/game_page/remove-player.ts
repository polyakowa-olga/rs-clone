import { Game } from "./init-game"
import { IPlayer } from "../../interfaces/interfaces";
import { GameLayout } from "./game-layout";
/* eslint-disable */
export class RemovePlayer {
  public static remove(player: IPlayer) {
    player.isBankrupt = true
    // remove player from active players in html
    // ------
    // here for players side...
    GameLayout.removePlayerHTML(player)
    // ------
    // here for board side...
    const playerFields = Game.cardsData.filter((card) => card.owner === player)
    playerFields.forEach((card) => {
      card.owner = null;
      card.currValue = card.price
    })
    GameLayout.changeFieldValue(playerFields)

    // playerFields.map((card) => card.currValue = card.price)
    const playerColors = document.querySelectorAll('.playerColor')
    playerColors.forEach((item) => item.classList.remove(`color${player.id}`))
    const playerChip = document.querySelector(`.color_${player.id}`) as HTMLDivElement
    playerChip.style.visibility = 'hidden'
    RemovePlayer.checkEndGame()
  }
  protected static checkEndGame() {
    const playersLeft = Game.players.filter((player) => !player.isBankrupt)
    if (playersLeft.length === 1) {
      console.log('GAME OVER');
      // here html changes if game over

    }
  }
}