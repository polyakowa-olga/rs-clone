/* eslint-disable */
import Element from "../../../../../templates/element";

class Chat extends Element {
  id: string;
  constructor(tag: string, classes: string[], id: string) {
    super(tag, classes);
    this.id = id;
  }

  createRange() {
    const wrapper = document.createElement("div");
    wrapper.className = "range-wrapper";
    const range = document.createElement("input") as HTMLInputElement;
    range.id = "range";
    range.type = "range",
      wrapper.append(range);
    return wrapper;
  }

  createMessageWrapper() {
    const wrapper = document.createElement("div");
    wrapper.className = "messages-wrapper";
    const box = document.createElement("div");
    box.className = "messages-box";
    box.textContent = "Game started";
    wrapper.append(box);
    return wrapper;
  }
  returnHTML() {
    this.container.append(this.createMessageWrapper());
    //  this.container.append(this.createRange());
    this.container.id = this.id;
    return this.container;
  }
}

export default Chat;
