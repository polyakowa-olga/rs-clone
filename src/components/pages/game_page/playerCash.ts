import SoundsGame from "../../sounds/Sounds";
import { ICardsData, IPlayer } from "../../interfaces/interfaces";
import { CardValue } from "./card-value";
import { GameLayout } from "./game-layout";
import { RemovePlayer } from "./remove-player";
import { chat } from "./components/chat/index"; // for chat
import { Game } from "./init-game";
/* eslint-disable */
export class PlayerCash {
  public static addMoneyToPlayer(player: IPlayer, sumToAdd: number) {
    player.money += sumToAdd;
    player.capital += sumToAdd;
    SoundsGame.Coins();
    GameLayout.refreshPlayerHTML(player);
  }

  public static removeMoneyFromPlayer(player: IPlayer, sumToRemove: number, buyingProp?: boolean) {
    const isBankrupt: boolean | undefined = PlayerCash.checkForBankruptcy(player, sumToRemove)
    if (isBankrupt) {
      RemovePlayer.remove(player)
      //console.log(`Player ${player.id} is bankrupt!`);
      let message = `Player ${player.id} is bankrupt!` ///// chat
      if (localStorage.getItem("language") === "ru") {
        message = `Игрок ${player.id} банкрот!`;
      }
      chat.run(Game.boardFieldsContainer, player, Game.cardsData[0], undefined, message); ///// chat
      return player.money
    }

    switch (buyingProp) {
      case true:
        player.money -= sumToRemove;
        SoundsGame.DropCoins();
        GameLayout.refreshPlayerHTML(player);
        break;
      default:
        player.money -= sumToRemove;
        player.capital -= sumToRemove;
        SoundsGame.DropCoins();
        GameLayout.refreshPlayerHTML(player)
        break;
    }
  }

  public static payPlayer2Player(player: IPlayer, sumToPay: number, field: ICardsData) {
    const restPlayerCash: number | undefined = PlayerCash.removeMoneyFromPlayer(player, sumToPay)
    if (restPlayerCash) {
      PlayerCash.addMoneyToPlayer(field.owner, restPlayerCash)
      player.money = 0
      player.capital = 0
      GameLayout.refreshPlayerHTML(player)
      // console.log(`Player ${field.owner.id} get rest cash from player ${player.id}`);
      const message = `Player ${field.owner.id} get rest cash from player ${player.id}` ///// chat
      chat.run(Game.boardFieldsContainer, player, Game.cardsData[0], undefined, message); ///// chat
    } else {
      PlayerCash.addMoneyToPlayer(field.owner, sumToPay)
      GameLayout.refreshPlayerHTML(player)
      // console.log(`Player ${field.owner.id} get ${sumToPay} from player ${player.id}`);
      const message = `${field.owner.name} get $${sumToPay}K from  ${player.name}` ///// chat
      chat.run(Game.boardFieldsContainer, player, Game.cardsData[0], undefined, message); ///// chat
    }
    return !!restPlayerCash
  }

  public static checkForBankruptcy(player: IPlayer, sumToPay: number) {
    if (player.money >= sumToPay && player.capital > sumToPay) {
      return false
    }
    return true
  }

  public static checkCapital(player: IPlayer, sumToPay: number) {
    if (player.capital > sumToPay && player.money < sumToPay) {
      return false
    }
    return true

  }

  public static isEnoughInCash(player: IPlayer, sumToPay: number) {
    if (player.money >= sumToPay) {
      return true
    }
    // console.log(`Player ${player.id} doesn't have enough in cash`);
    const message = `Player ${player.id} doesn't have enough in cash` ///// chat
    chat.run(Game.boardFieldsContainer, player, Game.cardsData[0], undefined, message); ///// chat
    return false
  }

  public static tradeFields(player: IPlayer, playerForTrade: IPlayer, prop: ICardsData) {
    prop.owner = player
    player.capital += prop.price as number
    playerForTrade.capital -= prop.price as number
    GameLayout.refreshPlayerHTML(player)
    GameLayout.refreshPlayerHTML(playerForTrade)
    GameLayout.playerColorField(player, prop)
    CardValue.setCurrentValue(player, prop)
  }
}