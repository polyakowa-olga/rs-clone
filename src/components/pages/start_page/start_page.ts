import Page from "../../templates/page";

class StartPage extends Page {
  constructor(id: string) {
    super(id);
  }

  createStartPage() {
    const message = document.createElement("div");
    message.textContent = "Page about game";
    message.classList.add("message");
    return message;
  }
  returnHTML() {
    const page = this.createStartPage();
    this.container.append(page);
    return this.container;
  }
}

export default StartPage;
