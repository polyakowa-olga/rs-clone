class createIntoGame {
  constructor(one: string, two: string) {
    const button = document.createElement("div");
    const oneNumber = document.createElement("h3");
    const twoNumber = document.createElement("h3");

    button.append(oneNumber);
    button.append(twoNumber);

    oneNumber.innerText = one;
    twoNumber.innerText = two;

    return button;
  }
}

export default createIntoGame;
