/* eslint-disable */
import Element from "../../../../../templates/element";
import { IMessageInfo } from "./types";
import { IPlayer, ICardsData } from "../../../../../interfaces/interfaces";
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

  createMessage(hint?: string, sum?: number) {
    const info = this.messageInfo
      ? this.messageInfo.text.replace(/Y/i, "y")
      : undefined;
    let message = "";
    if (hint === "turn") {
      message = `${this.player.name}'s turn now`;
    } else if (hint === "pawnlock") {
      message = `${this.player.name} has pawned ${this.cardData.name}`;
    } else if (hint === "return") {
      message = `${this.player.name} return ${this.cardData.name}`;
    } else if (hint === "pickshares") {
      message = `You need to pick your field\'s w/o shares on it\'s country`;
    } else if (hint === "shares") {
      message = `You need to pick your fields`;
    } else if (hint === "trade1") {
      message = `Player ${sum} not found.`;
    } else if (hint === "trade2") {
      message = `Error! Choose correct amount of money`;
    } else if (hint === "trade3") {
      message = `Error in tradeble props`;
    } else if (hint === "trade4") {
      message = `The deal is done!`;
    } else if (hint === "trade5") {
      message = `Offer was rejected.`;
    } else if (hint === "trade6") {
      message = `You need to pick tradeble companies!`;
    } else if (hint === "trade7") {
      message = `You need to pick companie\'s w/o shares in it\'s country`;
    }
    else if (hint === "lost") {
      message = `${this.player.name} lost $${sum}`;
    } else if (hint == "buy") {
      message = `${this.player.name} bought ${this.cardData.name}`;
    } else if (hint == "nobuy") {
      message = `${this.player.name} don't have enough money to buy ${this.cardData.name}`;
    } else if (hint == "get") {
      message = `${this.player.name} get $${sum}`;
    } else if (hint == "pay") {
      message = `${this.player.name} paid tax`;
    }
    else if (this.cardData.id === 6 || this.cardData.id === 25) {
      message = `${this.player.name} ${info}`;
    } else if (this.cardData.id === 17 || this.cardData.id === 36) {
      message = `${this.player.name} must pay tax`;
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
    } else if (hint === "payto" && this.cardData.owner !== null &&
      this.player.id !== this.cardData.owner.id) {
      let tax = this.cardData.value ? this.cardData.value.tax : undefined;
      message = `${this.player.name} paid to ${this.cardData.owner.name} $${tax}K`;
    }
    else if (this.cardData.owner && this.player.id === this.cardData.owner.id) {
      console.log(this.player.id)
      console.log(this.cardData.owner)
      message = `${this.player.name} moved to his own field`;
    }
    else if (
      this.cardData.owner !== null &&
      this.player.id !== this.cardData.owner.id
    ) {
      let tax = this.cardData.value ? this.cardData.value.tax : undefined;
      message = `${this.player.name} moved to ${this.cardData.owner.name}'s field and must pay $${tax}K`;
    }
    else {
      message = `${this.player.name} moved to ${this.cardData.name} field`;
    }

    return message;
  }

  returnHTML(hint?: string, sum?: number) {
    const message = this.createMessage(hint, sum);
    this.container.textContent = message;
    return this.container;
  }
}

export default Message;
