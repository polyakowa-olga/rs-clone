import { Player } from "./init-game";
import { RemovePlayer } from "./remove-player";
/* eslint-disable */
export class PlayerCash {
  public static addMoneyToPlayer(player: Player, sumToAdd: number) {
    player.money += sumToAdd
    player.capital += sumToAdd
    // playerCash.refreshPlayerHTML(/* playerId */)
  }

  public static removeMoneyFromPlayer(player: Player, sumToRemove: number) {
    const isBankrupt = PlayerCash.checkForBankruptcy(player, sumToRemove)
    if (isBankrupt) {
      RemovePlayer.remove(player)
      return
    }
    player.money -= sumToRemove
    player.capital -= sumToRemove
    // playerCash.refreshPlayerHTML(/* playerId */)
  }
  // REFRESH PLAYER HTML ELEMENTS
  protected static refreshPlayerHTML(/* playerId */) {
  }

  protected static checkForBankruptcy(player: Player, sumToPay: number) {
    if (player.money >= sumToPay) {
      return false
    } else
      if (player.capital >= sumToPay) {
        alert(`Player ${player.id} doesn't have enough in cash.\n
        You need to sold something or declare bankruptcy/defeat`)
      } else {
        return true
      }
  }
}