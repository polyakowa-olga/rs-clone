/* eslint-disable */
import Element from "../../../../../../templates/element";
import { ICardData, ICardValue } from "../../index";
import WindowCreator from "../window-creator";

const shareImgURL = {
  China: "url('../assets/img/share-chine.png')",
  Korea: "url('../assets/img/share-korea.png')",
  other: "url('../assets/img/share.png')",
  bar: "url('../assets/img/golden_bar.png')"
}

const KoreaAmount = (localStorage.getItem("language") === "ru") ? ["$10K x Сумма на костях", "$25K x Сумма на костях"] : ["$10K x The sum on the dice", "$25K x The sum on the dice"];

class YieldBlockCreator extends Element {
  choosedField: ICardData;
  constructor(tag: string, classes: string[], choosedField: ICardData) {
    super(tag, classes);
    this.choosedField = choosedField;
  }

  createbaseYieldContainer(tax: number) {
    let baseYieldKey = WindowCreator.createElement(
      ["i-base-yield-key"],
      "Base"
    );
    if (localStorage.getItem("language") === "ru") {
      baseYieldKey = WindowCreator.createElement(
        ["i-base-yield-key"],
        "Стоимость акций"
      );
    } //"Стоимость акций"
    const baseYieldValue = WindowCreator.createElement(
      ["base-yield-value"],
      WindowCreator.changeValueView(tax)
    );
    const baseYieldContainer = WindowCreator.createContainer(
      ["i-base-yield-value", "value-container"],
      [baseYieldKey, baseYieldValue]
    );
    return baseYieldContainer;
  }

  createMonopolyYieldContainer(monopoly: number) {
    let monopolyYieldKey = WindowCreator.createElement(
      ["i-monopoly-yield-key"],
      "In a monopoly, without shares"
    );
    if (localStorage.getItem("language") === "ru") {
      monopolyYieldKey = WindowCreator.createElement(
        ["i-monopoly-yield-key"],
        "В монополии, без акций"
      );
    } //"В монополии, без акций"
    const monopolyYieldValue = WindowCreator.createElement(
      ["monopoly-yield-value"],
      WindowCreator.changeValueView(monopoly)
    );
    const monopolyYieldContainer = WindowCreator.createContainer(
      ["i-monopoly-yield-value", "value-container"],
      [monopolyYieldKey, monopolyYieldValue]
    );
    return monopolyYieldContainer;
  }

  createSharesYield(country: string, shares: number[]) {
    const sharesYield = WindowCreator.createElement(["shares-yield"]);

    if (country === "South Korea") {

      for (let i = 0; i < 2; i++) {
        const shareYield = WindowCreator.createElement([
          "share-yield",
          "value-container"
        ]);
        const sharesKey = WindowCreator.createElement(["shares-key"]);

        for (let j = 0; j < i + 1; j++) {
          const share = WindowCreator.createElement(["share-img"]);
          share.style.backgroundImage = shareImgURL.Korea;
          sharesKey.append(share);
        }
        const sharesValue = WindowCreator.createElement(
          ["shares-value"],
          KoreaAmount[i]
        );

        shareYield.append(sharesKey, sharesValue);
        sharesYield.append(shareYield);
      }
    } else {
      for (let i = 0; i < 4; i++) {
        const shareYield = WindowCreator.createElement([
          "share-yield",
          "value-container"
        ]);
        const sharesKey = WindowCreator.createElement(["shares-key"]);

        for (let j = 0; j < i + 1; j++) {
          const share = WindowCreator.createElement(["share-img"]);
          share.style.backgroundImage = (country === "China") ? shareImgURL.China : shareImgURL.other;
          sharesKey.append(share);
        }
        const sharesValue = WindowCreator.createElement(
          ["shares-value"],
          WindowCreator.changeValueView(shares[i])
        );

        shareYield.append(sharesKey, sharesValue);
        sharesYield.append(shareYield);
      }
    }

    return sharesYield;
  }

  createMaxYieldContainer(shares: number[]) {
    const maxYieldKey = WindowCreator.createElement(["i-max-yield-key"]);
    const maxYieldKeyImg = WindowCreator.createElement(["max-value-img"]);
    maxYieldKeyImg.style.backgroundImage =
      shareImgURL.bar;
    maxYieldKey.append(maxYieldKeyImg);
    const maxYieldValue = WindowCreator.createElement(
      ["max-yield-value"],
      WindowCreator.changeValueView(shares[4])
    );
    const maxYieldContainer = WindowCreator.createContainer(
      ["i-max-yield-value", "value-container"],
      [maxYieldKey, maxYieldValue]
    );
    return maxYieldContainer;
  }

  createBlock() {
    const { country, value } = this.choosedField;
    const { tax, monopoly, shares } = value as ICardValue;

    let yieldTitle = WindowCreator.createElement(
      ["yield-title"],
      "COMPANY PROFITABILITY"
    );
    if (localStorage.getItem("language") === "ru") {
      yieldTitle = WindowCreator.createElement(
        ["yield-title"],
        "ДОХОДНОСТЬ КОМПАНИИ"
      );
    } //"ДОХОДНОСТЬ КОМПАНИИ"

    const baseYieldContainer = (country === "South Korea" || country === "China") ? "" : this.createbaseYieldContainer(tax);

    const monopolyYieldContainer = (country === "South Korea" || country === "China") ? "" : this.createMonopolyYieldContainer(monopoly);

    let sharesYield = (country) ? this.createSharesYield(country, shares) : "";


    const maxYieldContainer = (country === "South Korea" || country === "China") ? "" : this.createMaxYieldContainer(shares);

    const block = new DocumentFragment();
    block.append(
      yieldTitle,
      baseYieldContainer,
      monopolyYieldContainer,
      sharesYield,
      maxYieldContainer
    );

    return block;
  }

  run() {
    this.container.append(this.createBlock());
    return this.container;
  }
}

export default YieldBlockCreator;
