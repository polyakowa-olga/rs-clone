import Element from "../../../../../templates/element";

class Chat extends Element {
  id: string;
  constructor(tag: string, classes: string[], id: string) {
    super(tag, classes);
    this.id = id;
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
    this.container.id = this.id;
    return this.container;
  }
}

export default Chat;
