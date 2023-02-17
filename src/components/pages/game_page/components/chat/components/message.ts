/* eslint-disable */
import Element from "../../../../../templates/element";
import { IPlayer, ICardsData, IMessageInfo } from "./types";

class Message extends Element {
  player: IPlayer;
  cardData: ICardsData;
  messageInfo?: IMessageInfo | undefined;

  constructor(
    tag: string,
    classes: string[],
    player: IPlayer,
    cardData: ICardsData,
    messageInfo?: IMessageInfo | undefined
  ) {
    super(tag, classes);
    this.player = player;
    this.cardData = cardData;
    this.messageInfo = messageInfo;
  }

  createMessage() {
    const info = this.messageInfo
      ? this.messageInfo.text.replace(/Y/i, "y")
      : undefined;
    let message: string;

    if (this.cardData.id === 6 || this.cardData.id === 25) {
      message = `${this.player.name} ${info}`;
    } else if (this.cardData.id === 17 || this.cardData.id === 36) {
      message = `${this.player.name} paid tax`;
    } else if (this.cardData.id === 8 || this.cardData.id === 27) {
      message = `${this.player.name} ${info}`;
    } else if (this.cardData.id === 13) {
      message = `${this.player.name} moved to prison zone`;
    } else if (this.cardData.id === 1) {
      message = `${this.player.name} moved to Start field and get a $200,000 profit`;
    } else if (this.cardData.id === 20) {
      message = `${this.player.name} moved to Offshore field and can relax.`;
    } else if (this.cardData.id === 32) {
      message = `${this.player.name} broke the law and ended up in jail`;
    } else {
      if (this.player.id === this.cardData.owner) {
        message = `${this.player.name} moved to his own field`;
      } else if (
        this.cardData.owner !== null &&
        this.player.id !== this.cardData.owner
      ) {
        console.log(this.cardData);
        let tax = this.cardData.value ? this.cardData.value.tax : undefined;
        message = `${this.player.name} moved to ${this.cardData.owner.name}'s field and must pay ${tax}`;
      } else {
        message = `${this.player.name} moved to ${this.cardData.name} field`;
      }
    }

    return message;
  }

  returnHTML() {
    const message = this.createMessage();
    this.container.textContent = message;
    return this.container;
  }
}

export default Message;
