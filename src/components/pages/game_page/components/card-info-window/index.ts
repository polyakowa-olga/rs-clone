import CardInfoWindowController from "./components/window-controller";

export { Game as cardsDataContainer } from "../../init-game";
export {
  ICardsData as ICardData,
  ICardValue
} from "../../../../interfaces/interfaces";

export const cardInfoWindow = new CardInfoWindowController();
