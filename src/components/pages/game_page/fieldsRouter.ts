import { Game } from "./init-game";
import { PlayerCash } from "./playerCash";
import { IPlayer, ICardsData } from "../../interfaces/interfaces";
import { Move } from "./move";
import { PlayerBtnsInterface } from "./player-btns";
/* eslint-disable */
export class FieldsRouter {
  public static route(player: IPlayer, field: ICardsData) {
    switch (field.type) {
      case 'common':
        this.commonRoute(player, field)
        break;
      case 'trade':
        this.tradeRoute(player, field)
        break;
    }
  }

  protected static commonRoute(player: IPlayer, field: ICardsData) {
    // start 1
    // force major 6, 25
    // tax 17, 36
    // chance 8, 27
    // free parking 20
    // prison 13
    // go to prison 32
    const fieldId = field.id
    switch (true) {
      case ([6, 25].includes(fieldId)):
        // create message to chat and take some money from player

        ////// chat start

        // const someInfo = {
        //   "sum": 40,
        //   "text": "must pay money",
        // };

        // chat.run(Game.chatWindowBox, player, field, someInfo);

        ///// chat end
        const sumToPay = 100 /* res of func */
        const forceMajorBtn = document.createElement('button') as HTMLButtonElement
        forceMajorBtn.innerText = `PAY: ${sumToPay}k$`
        Game.playerInterface.appendChild(forceMajorBtn)
        forceMajorBtn.addEventListener('click', () => {
          // check bankrupt logic
          PlayerCash.removeMoneyFromPlayer(player, sumToPay)
          console.log(`Player ${player.id} lost ${sumToPay}`);
          // --------------------
          PlayerBtnsInterface.clearEndTurn(player)
        })
        break;
      case ([17, 36].includes(fieldId)):
        // create message to chat and take some money from player
        const taxToPay = Math.floor(player.capital * 6 / 100);
        const taxBtn = document.createElement('button') as HTMLButtonElement;
        taxBtn.innerText = `PAY: ${taxToPay}k$`
        Game.playerInterface.appendChild(taxBtn)
        taxBtn.addEventListener('click', () => {
          PlayerCash.removeMoneyFromPlayer(player, taxToPay)
          console.log(`Player ${player.id} lost ${taxToPay}`);
          PlayerBtnsInterface.clearEndTurn(player)
        })
        break;
      case ([8, 27].includes(fieldId)):
        // create message to chat and give some money to player
        const sumToGet = 100 /* res */;
        const chanceBtn = document.createElement('button') as HTMLButtonElement;
        chanceBtn.innerText = `GET: ${sumToGet}k$`
        Game.playerInterface.appendChild(chanceBtn)
        chanceBtn.addEventListener('click', () => {
          PlayerCash.addMoneyToPlayer(player, sumToGet)
          console.log(`Player ${player.id} get ${sumToGet}`);

          PlayerBtnsInterface.clearEndTurn(player)
        })
        break;
      case ([13].includes(fieldId)):
        // create message to chat like "{player} got on prison zone, nothing happend"
        console.log(`Player ${player.id} got on prison zone, nothing happend`);
        PlayerBtnsInterface.clearEndTurn(player)
        break;
      case ([1].includes(fieldId)):
        // create message to chat like "{player} got on prison zone, nothing happend"
        console.log(`Player ${player.id} has passed a lap`);
        PlayerBtnsInterface.clearEndTurn(player)
        break;
      case ([20].includes(fieldId)):
        console.log(`Player ${player.id} decided to rest for a bit`);
        // create message to chat like "{player} got on prison zone, nothing happend"
        PlayerBtnsInterface.clearEndTurn(player)
        break;
      case ([32].includes(fieldId)):
        // create message to chat like "{player} broke the law and ended up in jail"
        player.isInPrison = 3
        Move.move(player, 13)
        console.log(`Player ${player.id} broke the law and ended up in jail`);
        PlayerBtnsInterface.clearEndTurn(player)
    }
  }

  protected static tradeRoute(player: IPlayer, field: ICardsData) {
    switch (field.owner) {
      case player:
        // chat message "you got on your own property"
        console.log(`Player ${player.id} got on his own property`);
        break;
      case null:
        // chat message "you got on nobody's property"
        const buyBtn = document.createElement('button') as HTMLButtonElement;
        const fieldPrice = field.price as number
        buyBtn.innerText = `Buy ${field.title}`
        buyBtn.addEventListener('click', () => {
          if (player.money >= fieldPrice) {
            field.owner = player
            PlayerCash.removeMoneyFromPlayer(player, fieldPrice)
            console.log(`Player ${player.id} buying ${field.title}`);
            // color field
            const cardElem = document.querySelector(`#field${field.id}`) as HTMLDivElement
            const cardColorElem = cardElem.querySelector('.playerColor') as HTMLDivElement
            cardColorElem.classList.add(`color${player.id}`)
            // -----------
            PlayerBtnsInterface.clearEndTurn(player)
          } else {
            alert(`Player ${player.id} doesn't have enough in cash to buy ${field.title}`)
          }
        })
        PlayerBtnsInterface.clearEndTurn(player)
        Game.playerInterface.appendChild(buyBtn)
        // Auction logic
        // -------------
        break;

      default:
        // chat message "{player} got on {player} property. Need to pay {sum} to {other player}"
        const sumToPay = field.price as number /* SUM TO PAY other player {field.value}*/
        const payBtn = document.createElement('button') as HTMLButtonElement;
        payBtn.innerText = `PAY: ${sumToPay}k$`;
        payBtn.addEventListener('click', () => {
          PlayerCash.payPlayer2Player(player, sumToPay, field)
          PlayerBtnsInterface.clearEndTurn(player)
        })
        Game.playerInterface.appendChild(payBtn)
        break;
    }
  }




}