import { Game } from "./init-game";
import { PlayerCash } from "./playerCash";
import { Player, ICardsData } from "../../interfaces/interfaces";
/* eslint-disable */
export class FieldsRouter {
  public static route(player: Player, field: ICardsData) {
    switch (field.type) {
      case 'common':
        this.commonRoute(player, field)
        break;
      case 'trade':
        this.tradeRoute(player, field)
        break;
    }
  }

  protected static commonRoute(player: Player, field: ICardsData) {
    // force major 6, 25
    // tax 17, 36
    // chance 8, 27
    const fieldId = field.id
    switch (true) {
      case ([6, 25].includes(fieldId)):
        // create message to chat and take some money from player
        const sumToPay = 100 /* res of func */
        const forceMajorBtn = document.createElement('button') as HTMLButtonElement
        forceMajorBtn.innerText = `PAY: ${sumToPay}k$`
        Game.playerInterface.appendChild(forceMajorBtn)
        forceMajorBtn.addEventListener('click', () => {
          // check bankrupt logic
          PlayerCash.removeMoneyFromPlayer(player, sumToPay)
          // --------------------
          forceMajorBtn.remove()
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
          taxBtn.remove()
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
          chanceBtn.remove()
        })
        break;
    }
  }

  protected static tradeRoute(player: Player, field: ICardsData) {
    switch (field.owner) {
      case player:
        // chat message "you got on your own property"
        console.log('you got on your own property');
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
            // color field
            const cardElem = document.querySelector(`#field${field.id}`) as HTMLDivElement
            const cardColorElem = cardElem.querySelector('.playerColor') as HTMLDivElement

            cardColorElem.classList.add(`color${player.id}`)
          } else {
            alert(`Player ${player.id} doesn't have enough in cash to buy ${field.title}`)
          }
        })
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
          console.log(player);
          console.log(field.owner);

        })
        Game.playerInterface.appendChild(payBtn)
        break;
    }
  }




}