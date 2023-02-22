import { ICardsData, IPlayer } from "../../interfaces/interfaces";
import { CardValue } from "./card-value";
import { skChinaFields, tradeChoosePlayerWindow, tradeContainer } from "./game-board-src";
import { Game } from "./init-game";
import { PlayerCash } from "./playerCash";
/* eslint-disable */
export class Trade {
  public static startTrading(player: IPlayer) {
    const cardsData: ICardsData[] = Game.cardsData
    const currPlayerName: string = player.name
    const otherPlayers: IPlayer[] = Game.players.filter((pl) => !pl.isBankrupt)
      .filter((pl) => pl !== player)
    const gameInterfaceElem = document.querySelector('.playerMainView') as HTMLDivElement
    const pmv = document.querySelector('#pmv') as HTMLDivElement
    pmv.style.visibility = 'hidden'
    const tradeElem = document.createElement('div') as HTMLDivElement

    tradeElem.classList.add('trade')

    tradeElem.innerHTML = tradeChoosePlayerWindow

    gameInterfaceElem.append(tradeElem)
    const closeBtn = document.querySelector('#tradeClose') as HTMLButtonElement
    closeBtn.addEventListener('click', () => {
      tradeElem.remove()
      pmv.style.visibility = 'visible'
    })
    const currPlayerElem = document.querySelector('#tradeCP') as HTMLSpanElement
    const selectElem = document.querySelector('#tradeSelectPlayer') as HTMLSelectElement

    otherPlayers.forEach((player) => {
      const optionElem = document.createElement('option') as HTMLOptionElement
      optionElem.value = `${player.id}`
      optionElem.innerText = player.name ? player.name : `Player ${player.id}`
      selectElem.append(optionElem)
    })

    currPlayerElem.innerText = currPlayerName ? currPlayerName : `Player ${player.id}`

    const tradeBtn = document.querySelector('#tradeBtn') as HTMLButtonElement
    tradeBtn.addEventListener('click', () => tradeHandler())

    const tradeHandler = () => {
      const playerForTradeId = Number(selectElem.value);
      const playerForTrade = otherPlayers.find((pl) => pl.id === playerForTradeId) as IPlayer
      if (!playerForTrade) {
        console.log(`Player ${playerForTradeId} not found.`)
        return;
      }
      const currPlayerCards = Game.cardsData.filter((card) => card.owner === player)
        .map((card) => card.id) as number[]
      const playerForTradeCards = Game.cardsData.filter((card) => card.owner === playerForTrade)
        .map((card) => card.id) as number[]

      const allFieldsElems = document.querySelectorAll('.playField') as NodeListOf<HTMLDivElement>
      const tradeContainerElem = document.querySelector('.trade__container') as HTMLDivElement
      tradeContainerElem.innerHTML = tradeContainer
      // tradeElem.innerHTML = tradeContainer

      const elemListener = (e: Event) => {
        tradeElemHandler(e, currPlayerCards, playerForTradeCards, playerForTrade)
      }
      allFieldsElems.forEach((elem) => {
        elem?.addEventListener('click', elemListener)
      })

      closeBtn.addEventListener('click', () => {
        tradeElem.remove()
        allFieldsElems.forEach((elem) => {
          elem?.removeEventListener('click', elemListener)
        })
      })

      // money ranges
      const tpRange = document.querySelector('#tpRange') as HTMLInputElement
      const bpRange = document.querySelector('#bpRange') as HTMLInputElement
      const tpValue = document.querySelector('#tpValue') as HTMLOutputElement
      const bpValue = document.querySelector('#bpValue') as HTMLOutputElement
      tpRange.max = String(player.money)
      bpRange.max = String(playerForTrade.money)
      tpRange.addEventListener('input', () => {
        tpValue.innerText = tpRange.value
      })
      bpRange.addEventListener('input', () => {
        bpValue.innerText = bpRange.value
      })
      // -------------

      // add names
      const tradeCP = document.querySelector('#tradeCP') as HTMLSpanElement
      const tradeBP = document.querySelector('#tradeBP') as HTMLSpanElement
      [player, playerForTrade].forEach((pl, i) => {
        const currFld = i === 0 ? tradeCP : tradeBP
        currFld.innerText = pl.name ? pl.name : `Player ${pl.id}`
      })
      // ---------

      // make offer btn
      const makeOfferBtn = document.querySelector('#makeOfferBtn') as HTMLButtonElement
      makeOfferBtn.addEventListener('click', () => makeOfferHandler())
      const makeOfferHandler = () => {
        const tpRangeVal = Number(tpRange.value)
        const bpRangeVal = Number(bpRange.value)
        const tpPlayerProps: ICardsData[] = cardsData.filter((card) => tpCardsforTrade.includes(card.id))
        const bpPlayerProps: ICardsData[] = cardsData.filter((card) => bpCardsforTrade.includes(card.id))
        const isTpCorrectProps = tpPlayerProps.filter((card) => card.owner === player).length === tpPlayerProps.length
        const isBpCorrectProps = bpPlayerProps.filter((card) => card.owner === playerForTrade).length === bpPlayerProps.length
        switch (true) {
          case (tpRangeVal > player.money || bpRangeVal > playerForTrade.money):
            console.log('Error! Choose correct amount of money');
            return
          case (!isTpCorrectProps || !isBpCorrectProps):
            console.log('Error in tradeble props');
            return
          default:
            const result = confirm(`${playerForTrade.name ? playerForTrade.name : 'Player ' + playerForTrade.id}. Do you accept ${player.name ? player.name + `'s` : 'Player ' + player.id} offer?`)
            if (result) {
              PlayerCash.addMoneyToPlayer(player, bpRangeVal)
              PlayerCash.removeMoneyFromPlayer(player, tpRangeVal)

              PlayerCash.addMoneyToPlayer(playerForTrade, tpRangeVal)
              PlayerCash.removeMoneyFromPlayer(playerForTrade, bpRangeVal)

              bpPlayerProps.forEach((prop) => {
                PlayerCash.tradeFields(player, playerForTrade, prop)
              })
              tpPlayerProps.forEach((prop) => {
                PlayerCash.tradeFields(playerForTrade, player, prop)
              })
              tradeElem.remove()
              console.log('The deal is done!');
            } else {
              tradeElem.remove()
              console.log('Offer was rejected.');
            }
            allFieldsElems.forEach((elem) => {
              elem?.removeEventListener('click', elemListener)
            })
            pmv.style.visibility = 'visible'
            break;
        }
      }
      // --------------
    }
    const tpCardsforTrade: number[] = [];
    const bpCardsforTrade: number[] = [];

    const tradeElemHandler = (e: Event, currPlayerCards: number[], playerForTradeCards: number[], playerForTrade: IPlayer) => {
      e.stopImmediatePropagation()
      const tpCards = document.querySelector('#tpCards') as HTMLDivElement
      const bpCards = document.querySelector('#bpCards') as HTMLDivElement

      const targetField = (e.target as HTMLDivElement).closest('.playField')
      const fieldId = targetField?.id as string
      if (fieldId) {
        const id = Number(fieldId.replace(/field/g, ''))

        const tradeCard = document.createElement('div')
        tradeCard.classList.add('trade-card')
        tradeCard.id = `tradeFld${id}`
        const targetCard = Game.cardsData.find((card) => card.id === id) as ICardsData
        const targetCountry: string | undefined = targetCard.country
        if (!targetCountry) {
          console.log('You need to pick tradeble companies!');
          return
        }
        const curCountryFields = CardValue.countryFields.get(targetCountry) as number[]
        const isCleanFields: boolean = curCountryFields
          .map((cardId) => cardsData.find((card) => card.id === cardId))
          .some((card) => (card as ICardsData).value?.shares.includes((card as ICardsData).currValue as number))
        // shares check
        if (/* targetCard.value?.shares.includes(targetCard.currValue as number) */ isCleanFields && !skChinaFields.includes(targetCard.id)) {
          console.log('You need to pick companie\'s w/o shares in it\'s country');
          return;
        }
        // ------------

        const arrWithId = tpCardsforTrade.includes(id) ? tpCardsforTrade : bpCardsforTrade.includes(id) ? bpCardsforTrade : false
        if (arrWithId) {
          const elemToremove = document.querySelector(`#tradeFld${id}`)
          elemToremove?.remove()
          arrWithId.splice(arrWithId.indexOf(id), 1)
          console.log(arrWithId);
          return
        }

        switch (true) {
          case currPlayerCards.includes(id):
            tradeCard.style.backgroundImage = `url('${targetCard?.images}')`
            tpCards.appendChild(tradeCard)
            tpCardsforTrade.push(id)
            console.log(tpCardsforTrade);

            tradeCard.addEventListener('click', () => {
              tradeCard.remove()
              tpCardsforTrade.splice(tpCardsforTrade.indexOf(id), 1)
              console.log(tpCardsforTrade);

            })
            break;
          case playerForTradeCards.includes(id):
            tradeCard.style.backgroundImage = `url('${targetCard?.images}')`
            bpCards.appendChild(tradeCard)
            bpCardsforTrade.push(id)
            console.log(bpCardsforTrade);

            tradeCard.addEventListener('click', () => {
              tradeCard.remove()
              bpCardsforTrade.splice(bpCardsforTrade.indexOf(id), 1)
              console.log(bpCardsforTrade);

            })
            break;

          default:
            console.log(`${player.name ? player.name : 'Player ' + player.id}, you need to pick your or ${playerForTrade.name ? playerForTrade.name + `'s` : 'Player ' + playerForTrade.id} field`);
            break;
        }

      }

    }

  }
}