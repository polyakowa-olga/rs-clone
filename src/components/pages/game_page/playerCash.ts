import { ICardsData, IPlayer } from "../../interfaces/interfaces";
import DrawPlayer from "../../player/drawPlayer";
import { RemovePlayer } from "./remove-player";
/* eslint-disable */
export class PlayerCash {
  public static addMoneyToPlayer(player: IPlayer, sumToAdd: number) {
    player.money += sumToAdd;
    player.capital += sumToAdd;
    new DrawPlayer(player).drawplayer(); // drow (Anton)

    // playerCash.refreshPlayerHTML(/* playerId */)
  }

  public static removeMoneyFromPlayer(player: IPlayer, sumToRemove: number) {
    const isBankrupt = PlayerCash.checkForBankruptcy(player, sumToRemove)
    if (isBankrupt) {
      RemovePlayer.remove(player)
      return player.money
    }
    player.money -= sumToRemove;
    // player.capital -= sumToRemove; capital = money + capital (Anton)
    new DrawPlayer(player).drawplayer(); // drow (Anton)
    // playerCash.refreshPlayerHTML(/* playerId */)
  }
  // REFRESH PLAYER HTML ELEMENTS
  protected static refreshPlayerHTML(/* playerId */) {
  }

  public static payPlayer2Player(player: IPlayer, sumToPay: number, field: ICardsData) {
    const restPlayerCash: number | undefined = PlayerCash.removeMoneyFromPlayer(player, sumToPay)
    if (restPlayerCash) {
      PlayerCash.addMoneyToPlayer(field.owner, restPlayerCash)
    } else {
      PlayerCash.addMoneyToPlayer(field.owner, sumToPay)
    }
  }

  protected static checkForBankruptcy(player: IPlayer, sumToPay: number) {
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