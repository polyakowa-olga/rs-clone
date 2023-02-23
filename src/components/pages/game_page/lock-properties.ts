/* eslint-disable */

import { ICardsData, IPlayer } from "../../interfaces/interfaces";
import { CardValue } from "./card-value";
import { mortgageMenu, skChinaFields } from "./game-board-src";
import { Game } from "./init-game";
import { PlayerCash } from "./playerCash";

export class Lock {
  public static lockProperties(player: IPlayer) {
    // exit mortgage menu fld
    const gameInterfaceElem = document.querySelector('.playerMainView') as HTMLDivElement
    const pmv = document.querySelector('#pmv') as HTMLDivElement
    gameInterfaceElem.removeChild(pmv)

    gameInterfaceElem.insertAdjacentHTML('afterbegin', mortgageMenu)
    const mortgageElem = document.querySelector('.mortgage') as HTMLDivElement

    const exitBtn = document.querySelector('#exitLockBtn') as HTMLButtonElement
    exitBtn.addEventListener('click', () => {
      allFieldsElems.forEach((elem) => {
        elem?.removeEventListener('click', elemListener)
      })
      mortgageElem.remove()
      gameInterfaceElem.append(pmv)
    })
    // ----------------------
    // logic lock
    const allFieldsElems = document.querySelectorAll('.playField') as NodeListOf<HTMLDivElement>


    const lockElemHandler = (e: Event) => {
      e.stopImmediatePropagation()
      const targetField = (e.target as HTMLDivElement).closest('.playField')
      const fieldId = targetField?.id as string
      if (fieldId) {
        const id = Number(fieldId.replace(/field/g, ''))
        const targetCard = Game.cardsData.find((card) => card.id === id) as ICardsData
        const targetCountry: string | undefined = targetCard.country
        if (!targetCountry || targetCard.owner !== player) {
          console.log('You need to pick your fields');
          return
        }
        const curCountryFields = CardValue.countryFields.get(targetCountry) as number[]
        const isCleanFields: boolean = curCountryFields
          .map((cardId) => Game.cardsData.find((card) => card.id === cardId))
          .some((card) => (card as ICardsData).value?.shares.includes((card as ICardsData).currValue as number))
        if (isCleanFields && !skChinaFields.includes(targetCard.id)) {
          console.log('You need to pick your field\'s w/o shares on it\'s country');
          return;
        }

        const pledgeValue = targetCard.pledge as number
        const redemptionPrice = targetCard.redemption as number

        const lockElem = targetField?.querySelector('.lock') as HTMLDivElement
        const darkerElem = targetField?.querySelector('.darker') as HTMLDivElement

        switch (targetCard.lock) {
          case true:
            const isEnough = PlayerCash.isEnoughInCash(player, redemptionPrice)
            if (!isEnough) {
              return
            }
            PlayerCash.removeMoneyFromPlayer(player, redemptionPrice)
            targetCard.lock = false
            // html remove lock style
            lockElem.classList.remove('active')
            darkerElem.classList.remove('active')
            // ----------------------
            console.log(`${player.name} return ${targetCard.name}`);
            break;

          default:
            PlayerCash.addMoneyToPlayer(player, pledgeValue)
            targetCard.lock = true
            lockElem.classList.add('active')
            darkerElem.classList.add('active')
            console.log(`${player.name} has pawned ${targetCard.name}`);
            break;
        }

      }
    }
    const elemListener = (e: Event) => {
      lockElemHandler(e)
    }
    allFieldsElems.forEach((elem) => {
      elem?.addEventListener('click', elemListener)
    })
  }
}