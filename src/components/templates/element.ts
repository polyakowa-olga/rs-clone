abstract class Element {
  protected container: HTMLElement;
  classes: string[];
  constructor(tag: string, classes: string[]) {
    this.container = document.createElement(tag);
    this.classes = classes;
    this.container.classList.add(...this.classes);
  }

  returnHTML() {
    return this.container;
  }
}

export default Element;
