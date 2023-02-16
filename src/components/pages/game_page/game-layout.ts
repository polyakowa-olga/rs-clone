import { ICardsData } from "../../interfaces/interfaces";

/* eslint-disable */
export class GameLayout {
  public static changeFieldValue(fields: ICardsData[]) {
    fields.forEach((field) => {
      const cardElem = document.querySelector(`#field${field.id}`) as HTMLDivElement
      const priceElem = cardElem.querySelector('.fieldPrice') as HTMLDivElement
      const currValue = field.currValue ? field.currValue : field.price

      if ([7, 26].includes(field.id) && field.owner !== null) {
        priceElem.innerText = `🎲🎲X${currValue}`
      } else {
        priceElem.innerText = `$${currValue}K`
      }

    })
  }
}