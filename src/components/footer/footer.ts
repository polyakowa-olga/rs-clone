import Element from ".././templates/element";

class Footer extends Element {
  constructor(tag: string, classes: string[]) {
    super(tag, classes);
  }

  returnHTML() {
    // this.container.append(this.createPageButtons());
    this.container.innerHTML = `
        <div class="year">2022</div>
        <a class="link" href="https://github.com/KOSHAK2008">
          <img class="icon github-icon" src="./assets/github-icon.svg" alt="github_ico">
        </a>
        <a class="link" href="https://github.com/polyakowa-olga">
          <img class="icon github-icon" src="./icons/github-icon.svg" alt="github_ico">
        </a>
        <a class="link" href="https://github.com/imnephy">
          <img class="icon github-icon" src="./icons/github-icon.svg" alt="github_ico">
        </a>
        <a class="link" href="https://rs.school/js/">
          <img class="icon RSS-icon" src="./icons/rs-school-js.svg" alt="RSS_ico">
        </a>
        `;
    return this.container;
  }
}

export default Footer;
