import Element from "../../../../../templates/element";
import { IPlayer, ICardData, IMessageInfo } from "./types";

class Message extends Element {
  player: IPlayer;
  cardData: ICardData;
  messageInfo: IMessageInfo;

  constructor(
    tag: string,
    classes: string[],
    player: IPlayer,
    cardData: ICardData,
    messageInfo: IMessageInfo
  ) {
    super(tag, classes);
    this.player = player;
    this.cardData = cardData;
    this.messageInfo = messageInfo;
  }

  createMessage() {
    let message: string;
    if (this.cardData.id === 6 || this.cardData.id === 25) {
      message = `${this.player.name} ${this.messageInfo.text} ${this.messageInfo.sum}$`;
    } else {
      message = `${this.player.name} ${this.messageInfo.text} ${this.cardData.title} for ${this.messageInfo.sum}$`;
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
