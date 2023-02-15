import Element from "../../../../../templates/element";

class Chat extends Element {
  id: string;
  constructor(tag: string, classes: string[], id: string) {
    super(tag, classes);
    this.id = id;
  }
  returnHTML() {
    this.container.id = this.id;
    return this.container;
  }
}

export default Chat;
