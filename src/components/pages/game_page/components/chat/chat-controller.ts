import Message from "./components/message";
import Chat from "./components/chat";
import { IMessageInfo } from "./components/types";
import Separator from "./components/separator";
import { IPlayer, ICardsData } from "../../../../interfaces/interfaces";

const chatData = {
  tag: "div",
  classes: ["chat-box"],
  id: "chat-box"
};

const messageData = {
  tag: "span",
  classes: ["chat-message"]
};

class ChatController {
  chat: HTMLElement;

  constructor() {
    this.chat = new Chat(
      chatData.tag,
      chatData.classes,
      chatData.id
    ).returnHTML();
  }

  checkForChatExist() {
    if (document.querySelector(`#${chatData.id}`)) {
      return true;
    }
    return false;
  }

  run(
    place: HTMLElement,
    player?: IPlayer | undefined,
    cardData?: ICardsData | undefined,
    messageInfo?: IMessageInfo | undefined
  ) {
    if (!this.checkForChatExist()) {
      place.append(this.chat);
    } else {
      if (player && cardData) {
        const separator = new Separator("div", ["gap"]).returnHTML();
        const message = new Message(
          messageData.tag,
          messageData.classes,
          player,
          cardData,
          (messageInfo = messageInfo ? messageInfo : undefined)
        ).returnHTML();
        setTimeout(() => {
          document.querySelector(".messages-box")?.append(message, separator);
        }, 1500);
      }
    }
  }
}

export default ChatController;
