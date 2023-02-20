/* eslint-disable */
import WindowCreator from "./window-creator";
import { cardsDataContainer, ICardData } from "../index";
const windowData = {
  tag: "div",
  classes: ["card-info-box"],
  id: "card-info-box"
};

class CardInfoWindowController {
  showInfo(event: Event) {
    const element = event.target as HTMLElement;
    if (element && element.classList.contains("i-cross")) {
      document.querySelector(`#${windowData.id}`)?.remove();
    }

    const field = element.closest(".playField") as HTMLElement;
    let choosedFieId: ICardData | undefined;
    if (cardsDataContainer && cardsDataContainer.cardsData) {
      cardsDataContainer.cardsData.forEach((el) => {
        if (field && el.id === Number(field.dataset["fieldNumber"])) {
          choosedFieId = el;
        }
      });
    }

    if (choosedFieId) {
      const cardInfoWindow = new WindowCreator(
        windowData.tag,
        windowData.classes,
        windowData.id,
        choosedFieId
      ).run();

      if (element) {
        if (field) {
          if (document.querySelector(`#${windowData.id}`)) {
            document.querySelector(`#${windowData.id}`)?.remove();
          }
          document.querySelector("main")!.append(cardInfoWindow);
        }
      }
    }
  }
}
export default CardInfoWindowController;
