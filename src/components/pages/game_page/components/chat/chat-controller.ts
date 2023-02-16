import Message from "./components/message";
import Chat from "./components/chat";
import { IPlayer, ICardData, IMessageInfo } from "./components/types";

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
    cardData?: ICardData | undefined,
    messageInfo?: IMessageInfo | undefined
  ) {
    if (!this.checkForChatExist()) {
      this.chat.textContent = "play started";
      place.append(this.chat);
    } else {
      if (player && cardData) {
        const message = new Message(
          messageData.tag,
          messageData.classes,
          player,
          cardData,
          (messageInfo = messageInfo ? messageInfo : undefined)
        ).returnHTML();
        setTimeout(() => {
          this.chat.append(message);
        }, 1500);
      }
    }
  }
}

export default ChatController;
