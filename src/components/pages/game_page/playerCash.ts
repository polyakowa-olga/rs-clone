import { ICardsData, Player } from "../../interfaces/interfaces"
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
      return player.money
    }
    player.money -= sumToRemove
    player.capital -= sumToRemove
    // playerCash.refreshPlayerHTML(/* playerId */)
  }
  // REFRESH PLAYER HTML ELEMENTS
  protected static refreshPlayerHTML(/* playerId */) {
  }

  public static payPlayer2Player(player: Player, sumToPay: number, field: ICardsData) {
    const restPlayerCash: number | undefined = PlayerCash.removeMoneyFromPlayer(player, sumToPay)
    if (restPlayerCash) {
      PlayerCash.addMoneyToPlayer(field.owner, restPlayerCash)
    } else {
      PlayerCash.addMoneyToPlayer(field.owner, sumToPay)
    }
  }

  protected static checkForBankruptcy(player: Player, sumToPay: number) {
    if (player.money >= sumToPay && player.capital > sumToPay) {
      return false
    } else
      if (player.capital > sumToPay) {
        alert(`Player ${player.id} doesn't have enough in cash.\n
        You need to sold something or declare bankruptcy/defeat`)
      } else {
        return true
      }
  }
}