import { ICardsData, IPlayer } from "../../interfaces/interfaces";
import { chinaSharesFields, leftrightSharesFields, skSharesFields, topBottomSharesFields } from "./game-board-src";

/* eslint-disable */
export class GameLayout {
  public static changeFieldValue(fields: ICardsData[]) {
    fields.forEach((field) => {
      const cardElem = document.querySelector(`#field${field.id}`) as HTMLDivElement
      const priceElem = cardElem.querySelector('.fieldPrice') as HTMLDivElement
      const sharesElem = cardElem.querySelector('.shares') as HTMLDivElement
      const currValue = field.currValue ? field.currValue : field.price

      if ([7, 26].includes(field.id) && field.owner !== null) {
        priceElem.innerText = `🎲🎲X${currValue}`
      } else {
        priceElem.innerText = `$${currValue}K`
      }
      const currFieldShares: number[] | undefined = field.value?.shares
      if (currFieldShares) {
        switch (field.currValue) {
          case currFieldShares[0]:
            if (topBottomSharesFields.includes(field.id)) {
              sharesElem.classList.add('shares1')
            } else if (leftrightSharesFields.includes(field.id)) {
              sharesElem.classList.add('shares1v')
            } else if (skSharesFields.includes(field.id)) {
              sharesElem.classList.add('sharesKO1')
            } else if (chinaSharesFields.includes(field.id)) {
              sharesElem.classList.add('sharesCHN1')
            }
            break;
          case currFieldShares[1]:
            if (topBottomSharesFields.includes(field.id)) {
              sharesElem.classList.add('shares2')
            } else if (leftrightSharesFields.includes(field.id)) {
              sharesElem.classList.add('shares2v')
            } else if (skSharesFields.includes(field.id)) {
              sharesElem.classList.add('sharesKO2')
            } else if (chinaSharesFields.includes(field.id)) {
              sharesElem.classList.add('sharesCHN2')
            }
            break;
          case currFieldShares[2]:
            if (topBottomSharesFields.includes(field.id)) {
              sharesElem.classList.add('shares3')
            } else if (leftrightSharesFields.includes(field.id)) {
              sharesElem.classList.add('shares3v')
            } else if (chinaSharesFields.includes(field.id)) {
              sharesElem.classList.add('sharesCHN3')
            }
            break;
          case currFieldShares[3]:
            if (topBottomSharesFields.includes(field.id)) {
              sharesElem.classList.add('shares4')
            } else if (leftrightSharesFields.includes(field.id)) {
              sharesElem.classList.add('shares4v')
            } else if (chinaSharesFields.includes(field.id)) {
              sharesElem.classList.add('sharesCHN4')
            }
            break;
          case currFieldShares[4]:
            if (topBottomSharesFields.includes(field.id)) {
              sharesElem.classList.add('shares5')
            } else if (leftrightSharesFields.includes(field.id)) {
              sharesElem.classList.add('shares5v')
            }
            break;
          default:
            sharesElem.removeAttribute('class');
            sharesElem.classList.add('shares');
            break;
        }
      }
    })
  }
  public static refreshPlayerHTML(player: IPlayer) {
    const capitalElem = document.querySelector(`#capital-${player.id}`) as HTMLDivElement
    const moneyElem = document.querySelector(`#money-${player.id}`) as HTMLDivElement
    capitalElem.innerText = `${player.capital}`
    moneyElem.innerText = `${player.money}`
  }

  public static removePlayerHTML(player: IPlayer) {
    const playerElem = document.getElementById(`${player.id}`) as HTMLDivElement
    const capitalElem = document.querySelector(`#capital-${player.id}`) as HTMLDivElement
    const moneyElem = document.querySelector(`#money-${player.id}`) as HTMLDivElement
    capitalElem.innerText = `${0}`
    moneyElem.innerText = `${0}`
    playerElem.classList.add('bankruptPlayer')
  }

  public static playerColorField(player: IPlayer, field: ICardsData) {
    const cardElem = document.querySelector(`#field${field.id}`) as HTMLDivElement
    const cardColorElem = cardElem.querySelector('.playerColor') as HTMLDivElement
    cardColorElem.classList.add(`color${player.id}`)
  }
}