import { IPlayer, ICardsData } from "../../interfaces/interfaces";
import { GameLayout } from "./game-layout";
import { Game } from "./init-game";
/* eslint-disable */



export class CardValue {
  public static countryFields = new Map([
    ["United Kingdom", [2, 4, 5]],
    ["France", [9, 10, 12]],
    ["Sweden", [14, 15]],
    ["Italy", [16, 18, 19]],
    ["Japan", [21, 23, 24]],
    ["South Korea", [7, 26]],
    ["Germany", [28, 29, 31]],
    ["China", [3, 30, 11, 22]],
    ["Switzerland", [33, 34]],
    ["United States of America", [35, 37, 38]]])

  public static setCurrentValue(player: IPlayer, field: ICardsData) {

    const curCountry = field.country as string
    const curCountryFields = CardValue.countryFields.get(curCountry) as number[]
    const countryTradeCards: ICardsData[] = Game.cardsData.filter((fld) => curCountryFields.includes(fld.id))

    const isMonopoly = countryTradeCards.every((card) => card.owner === player)

    if (isMonopoly) {
      // field.currValue = field.value?.monopoly
      countryTradeCards.map((fld) => fld.currValue = field.value?.monopoly)
      // shares logic...
    } else if (field.owner === player) {
      field.currValue = field.value?.tax
    } else {
      field.currValue === field.price
    }
    // refresh html
    GameLayout.changeFieldValue(<ICardsData[]>countryTradeCards)
    // ------------
  }
}