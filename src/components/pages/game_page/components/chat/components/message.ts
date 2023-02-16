/* eslint-disable */
import Element from "../../../../../templates/element";
import { IPlayer, ICardData, IMessageInfo } from "./types";

class Message extends Element {
  player: IPlayer;
  cardData: ICardData;
  messageInfo?: IMessageInfo | undefined;

  constructor(
    tag: string,
    classes: string[],
    player: IPlayer,
    cardData: ICardData,
    messageInfo?: IMessageInfo | undefined
  ) {
    super(tag, classes);
    this.player = player;
    this.cardData = cardData;
    this.messageInfo = messageInfo;
  }

  createMessage() {
    const info = this.messageInfo
      ? this.messageInfo.text.replace(/you/i, "")
      : undefined;
    let message: string;

    if (this.cardData.id === 6 || this.cardData.id === 25) {
      message = `${this.player.name} ${info}`;
    } else if (this.cardData.id === 17 || this.cardData.id === 36) {
      message = `${this.player.name} paid tax`;
    } else if (this.cardData.id === 8 || this.cardData.id === 27) {
      message = `${this.player.name} ${info}`;
    } else {
      message = `${this.player.name} ${info} ${this.cardData.title} for ${info}$`;
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
