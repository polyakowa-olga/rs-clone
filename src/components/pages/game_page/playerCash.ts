import { ICardsData, IPlayer } from "../../interfaces/interfaces";
import { GameLayout } from "./game-layout";
import { RemovePlayer } from "./remove-player";
/* eslint-disable */
export class PlayerCash {
  public static addMoneyToPlayer(player: IPlayer, sumToAdd: number) {
    player.money += sumToAdd;
    player.capital += sumToAdd;

    GameLayout.refreshPlayerHTML(player)
  }

  public static removeMoneyFromPlayer(player: IPlayer, sumToRemove: number, buyingProp?: boolean) {
    const isBankrupt = PlayerCash.checkForBankruptcy(player, sumToRemove)
    if (isBankrupt) {
      RemovePlayer.remove(player)
      console.log(`Player ${player.id} is bankrupt!`);
      return player.money
    }

    switch (buyingProp) {
      case true:
        player.money -= sumToRemove;
        GameLayout.refreshPlayerHTML(player)
        break;
      default:
        player.money -= sumToRemove;
        player.capital -= sumToRemove;
        GameLayout.refreshPlayerHTML(player)
        break;
    }
  }

  public static payPlayer2Player(player: IPlayer, sumToPay: number, field: ICardsData) {
    const restPlayerCash: number | undefined = PlayerCash.removeMoneyFromPlayer(player, sumToPay)
    if (restPlayerCash) {
      PlayerCash.addMoneyToPlayer(field.owner, restPlayerCash)
      GameLayout.refreshPlayerHTML(player)
      console.log(`Player ${field.owner.id} get rest cash from player ${player.id}`);
    } else {
      PlayerCash.addMoneyToPlayer(field.owner, sumToPay)
      GameLayout.refreshPlayerHTML(player)
      console.log(`Player ${field.owner.id} get ${sumToPay} from player ${player.id}`);
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

  public static isEnoughInCash(player: IPlayer, sumToPay: number) {
    if (player.money >= sumToPay) {
      return true
    }
    console.log(`Player ${player.id} doesn't have enough in cash`);
    return false
  }
}