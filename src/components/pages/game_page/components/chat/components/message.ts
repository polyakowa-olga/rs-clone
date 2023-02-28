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
    if (hint !== undefined && hint?.length > 11) {
      message = hint;
    }
    else if (hint === "turn") {
      message = (localStorage.getItem("language") === "ru") ? `${this.player.name} делает ход` : `${this.player.name}'s turn now`;
    } else if (hint === "pawnlock") {
      message = (localStorage.getItem("language") === "ru") ? `${this.player.name} заложил ${this.cardData.name}` : `${this.player.name} has pawned ${this.cardData.name}`;
    } else if (hint === "return") {
      message = (localStorage.getItem("language") === "ru") ? `${this.player.name} вернуть ${this.cardData.name}` : `${this.player.name} return ${this.cardData.name}`;
    } else if (hint === "sold") {
      message = (localStorage.getItem("language") === "ru") ? `У игрока ${this.player.id} недостаточно наличных.\n Вам нужно что-то продать...` : `Player ${this.player.id} doesn't have enough in cash.\n You need to sold something...`;
    } else if (hint === "pickshares") {
      message = (localStorage.getItem("language") === "ru") ? `Вам нужно выбрать свое поле без акций в этой стране` : `You need to pick your field\'s w/o shares on it\'s country`;
    } else if (hint === "shares") {
      message = (localStorage.getItem("language") === "ru") ? `Вы должны выбрать ваши поля` : `You need to pick your fields`;
    } else if (hint === "trade1") {
      message = (localStorage.getItem("language") === "ru") ? `Игрок ${sum} не имеет.` : `Player ${sum} not found.`;
    } else if (hint === "trade2") {
      message = (localStorage.getItem("language") === "ru") ? `Ошибка! Выберите правильную сумму денег` : `Error! Choose correct amount of money`;
    } else if (hint === "trade3") {
      message = (localStorage.getItem("language") === "ru") ? `Ошибка в торговом реквизите` : `Error in tradeble props`;
    } else if (hint === "trade4") {
      message = (localStorage.getItem("language") === "ru") ? `Сделка совершена!` : `The deal is done!`;
    } else if (hint === "trade5") {
      message = (localStorage.getItem("language") === "ru") ? `Предложение было отклонено.` : `Offer was rejected.`;
    } else if (hint === "trade6") {
      message = (localStorage.getItem("language") === "ru") ? `Вы должны выбрать торговые компании!` : `You need to pick tradeble companies!`;
    } else if (hint === "trade7") {
      message = (localStorage.getItem("language") === "ru") ? `Вам нужно выбрать компании без акций в своей стране` : `You need to pick companie\'s w/o shares in it\'s country`;
    }
    else if (hint === "lost") {
      message = (localStorage.getItem("language") === "ru") ? `${this.player.name} потерял $${sum}` : `${this.player.name} lost $${sum}`;
    } else if (hint == "buy") {
      message = (localStorage.getItem("language") === "ru") ? `${this.player.name} купил ${this.cardData.name}` : `${this.player.name} bought ${this.cardData.name}`;
    } else if (hint == "nobuy") {
      message = (localStorage.getItem("language") === "ru") ? `${this.player.name} недостаточно денег, чтобы купить ${this.cardData.name}` : `${this.player.name} don't have enough money to buy ${this.cardData.name}`;
    } else if (hint == "get") {
      message = (localStorage.getItem("language") === "ru") ? `${this.player.name} получил $${sum}` : `${this.player.name} got $${sum}`;
    } else if (hint == "pay") {
      message = (localStorage.getItem("language") === "ru") ? `${this.player.name} уплатил налог` : `${this.player.name} paid tax`;
    } else if (hint == "have") {
      message = (localStorage.getItem("language") === "ru") ? `Игрок ${this.player.id} получает 200$ и сейчас у него ${sum}` : `player ${this.player.id} gets 200$ and now have ${sum}`;
    } else if (hint == "over") {
      message = (localStorage.getItem("language") === "ru") ? `КОНЕЦ ИГРЫ` : `GAME OVER`;
    }
    else if (this.cardData.id === 6 || this.cardData.id === 25) {
      message = (localStorage.getItem("language") === "ru") ? `${this.player.name} ${info}` : `${this.player.name} ${info}`;
    } else if (this.cardData.id === 17 || this.cardData.id === 36) {
      message = (localStorage.getItem("language") === "ru") ? `${this.player.name} должен платить налог` : `${this.player.name} must pay tax`;
    } else if (this.cardData.id === 8 || this.cardData.id === 27) {
      message = (localStorage.getItem("language") === "ru") ? `${this.player.name} ${info}` : `${this.player.name} ${info}`;
    } else if (this.cardData.id === 13) {
      message = (localStorage.getItem("language") === "ru") ? `${this.player.name} перешел в тюремную зону, ничего не произошло` : `${this.player.name} moved to prison zone, nothing happend`;
    } else if (this.cardData.id === 1) {
      message = (localStorage.getItem("language") === "ru") ? `${this.player.name} переместился в поле "Старт" и получил прибыль в $200,000.` : `${this.player.name} moved to Start field and get a $200,000 profit`;
    } else if (this.cardData.id === 20) {
      message = (localStorage.getItem("language") === "ru") ? `${this.player.name} переехал на оффшорное поле и может расслабиться.` : `${this.player.name} moved to Offshore field and can relax.`;
    } else if (this.cardData.id === 32) {
      message = (localStorage.getItem("language") === "ru") ? `${this.player.name} нарушил закон и попал в тюрьму` : `${this.player.name} broke the law and ended up in jail`;
    } else if (hint === "payto" && this.cardData.owner !== null &&
      this.player.id !== this.cardData.owner.id) {
      let tax = this.cardData.value ? this.cardData.value.tax : undefined;
      message = (localStorage.getItem("language") === "ru") ? `${this.player.name} вылачено ${this.cardData.owner.name} $${tax}K` : `${this.player.name} paid to ${this.cardData.owner.name} $${tax}K`;
    }
    else if (this.cardData.owner && this.player.id === this.cardData.owner.id) {

      message = (localStorage.getItem("language") === "ru") ? `${this.player.name} переместился на свое поле` : `${this.player.name} moved to his own field`;
    }
    else if (
      this.cardData.owner !== null &&
      this.player.id !== this.cardData.owner.id
    ) {
      if (this.cardData.lock) {
        message = (localStorage.getItem("language") === "ru") ? `${this.player.name} попал на заложенное поле. Ничего не произошло` : `${this.player.name} got on pawned field. Nothing happend`;
      } else {
        let tax = this.cardData.value ? this.cardData.value.tax : undefined;
        message = (localStorage.getItem("language") === "ru") ? `${this.player.name} перемещен в ${this.cardData.owner.name} поле и должен заплатить $${tax}K` : `${this.player.name} moved to ${this.cardData.owner.name}'s field and must pay $${tax}K`;
      }

    }
    else {
      message = (localStorage.getItem("language") === "ru") ? `${this.player.name} перемещен в ${this.cardData.name} поле` : `${this.player.name} moved to ${this.cardData.name} field`;
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
