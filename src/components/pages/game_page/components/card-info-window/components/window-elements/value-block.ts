/* eslint-disable */
import Element from "../../../../../../templates/element";
import { ICardData } from "../../index";
import WindowCreator from "../window-creator";

class ValueBlockCreator extends Element {
  choosedField: ICardData;
  constructor(tag: string, classes: string[], choosedField: ICardData) {
    super(tag, classes);
    this.choosedField = choosedField;
  }

  createBlock() {
    const { price, pledge, redemption, sharesPrice } = this.choosedField;

    let initValueKey = WindowCreator.createElement(
      ["i-init-value-key"],
      "Initial price"
    );
    if (localStorage.getItem("language") === "ru") {
      initValueKey = WindowCreator.createElement(
        ["i-init-value-key"],
        "Начальная стоимость"
      );
    } //"Начальная стоимость"
    const initValueValue = WindowCreator.createElement(
      ["i-init-value-value"],
      WindowCreator.changeValueView(price!)
    );
    const initValueContainer = WindowCreator.createContainer(
      ["i-init-value", "value-container"],
      [initValueKey, initValueValue]
    );

    let depositValueKey = WindowCreator.createElement(
      ["i-deposit-value-key"],
      "Pledge price"
    );
    if (localStorage.getItem("language") === "ru") {
      depositValueKey = WindowCreator.createElement(
        ["i-deposit-value-key"],
        "Залоговая стоимость"
      );
    } //"Залоговая стоимость"
    const depositValueValue = WindowCreator.createElement(
      ["i-deposit-value"],
      WindowCreator.changeValueView(pledge!)
    ); //add Field
    const depositValueContainer = WindowCreator.createContainer(
      ["i-deposit-value", "value-container"],
      [depositValueKey, depositValueValue]
    );

    let redemptionValueKey = WindowCreator.createElement(
      ["i-redemption-value-key"],
      "Redemption value"
    );
    if (localStorage.getItem("language") === "ru") {
      redemptionValueKey = WindowCreator.createElement(
        ["i-redemption-value-key"],
        "Стоимость выкупа"
      );
    } //"Стоимость выкупа"
    const redemptionValueValue = WindowCreator.createElement(
      ["i-redemption-value"],
      WindowCreator.changeValueView(redemption!)
    ); //add Field
    const redemptionValueContainer = WindowCreator.createContainer(
      ["i-redemption-value", "value-container"],
      [redemptionValueKey, redemptionValueValue]
    );

    let shareValueKey = WindowCreator.createElement(
      ["i-share-value-key"],
      "Share value"
    );
    if (localStorage.getItem("language") === "ru") {
      shareValueKey = WindowCreator.createElement(
        ["i-share-value-key"],
        "Стоимость акций"
      );
    } //"Стоимость акций"
    let value = sharesPrice ? WindowCreator.changeValueView(sharesPrice) : "not purchasable";
    if (localStorage.getItem("language") === "ru") {
      value = sharesPrice ? WindowCreator.changeValueView(sharesPrice) : "нельзя купить";
    }
    const shareValueValue = WindowCreator.createElement(
      ["i-share-value"],
      value
    ); //add Field
    const shareValueContainer = WindowCreator.createContainer(
      ["i-share-value", "value-container"],
      [shareValueKey, shareValueValue]
    );

    const block = new DocumentFragment();
    block.append(
      initValueContainer,
      depositValueContainer,
      redemptionValueContainer,
      shareValueContainer
    );

    return block;
  }

  run() {
    this.container.append(this.createBlock());
    return this.container;
  }
}

export default ValueBlockCreator;
