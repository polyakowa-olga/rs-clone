/* eslint-disable prettier/prettier */
/* eslint-disable no-self-assign */

export default class SoundsGame {
  buttonSound: HTMLDivElement;
  constructor(buttonSound: HTMLDivElement) {
    this.buttonSound = buttonSound;
  }

  public static Coins() {
    const buttonSound = document.querySelector(".active") as HTMLDivElement;
    if (buttonSound) {
      const audioCoins = new Audio();
      audioCoins.src = '../assets/audio/Coins.mp3';
      audioCoins.autoplay = true;
    }
  }

  public static Dice() {
    const buttonSound = document.querySelector(".active") as HTMLDivElement;
    if (buttonSound) {
      const audioCoins = new Audio();
      audioCoins.src = '../assets/audio/DiceMy.mp3';
      audioCoins.autoplay = true;
    }
  }

  public static chipShuffle() {
    const buttonSound = document.querySelector(".active") as HTMLDivElement;
    if (buttonSound) {
      const audioCoins = new Audio();
      audioCoins.src = '../assets/audio/chipShuffle.mp3';
      audioCoins.autoplay = true;
    }
  }

  public static StartGame() {
    const buttonSound = document.querySelector(".active") as HTMLDivElement;
    if (buttonSound) {
      const audioCoins = new Audio();
      audioCoins.src = '../assets/audio/gong.mp3';
      audioCoins.autoplay = true;
    }
  }

  public static Incoming() {
    const buttonSound = document.querySelector(".active") as HTMLDivElement;
    if (buttonSound) {
      const audioCoins = new Audio();
      audioCoins.src = '../assets/audio/incoming.mp3';
      audioCoins.autoplay = true;
    }
  }

  public static OutComing() {
    const buttonSound = document.querySelector(".active") as HTMLDivElement;
    if (buttonSound) {
      const audioCoins = new Audio();
      audioCoins.src = '../assets/audio/outcoming.mp3';
      audioCoins.autoplay = true;
    }
  }

  public static BuyCard() {
    const buttonSound = document.querySelector(".active") as HTMLDivElement;
    if (buttonSound) {
      const audioCoins = new Audio();
      audioCoins.src = '../assets/audio/pm.mp3';
      audioCoins.autoplay = true;
    }
  }

  public static AdminSound() {
    const buttonSound = document.querySelector(".active") as HTMLDivElement;
    if (buttonSound) {
      const audioCoins = new Audio();
      audioCoins.src = '../assets/audio/admin_sound.mp3';
      audioCoins.autoplay = true;
    }
  }

  public static DropCoins() {
    const buttonSound = document.querySelector(".active") as HTMLDivElement;
    if (buttonSound) {
      const audioCoins = new Audio();
      audioCoins.src = '../assets/audio/board-game-pieces-drop.mp3';
      audioCoins.autoplay = true;
    }
  }

  public static OpenTrade() {
    const buttonSound = document.querySelector(".active") as HTMLDivElement;
    if (buttonSound) {
      const audioCoins = new Audio();
      audioCoins.src = '../assets/audio/Step.mp3';
      audioCoins.autoplay = true;
    }
  }

  public static TradeDoing() {
    const buttonSound = document.querySelector(".active") as HTMLDivElement;
    if (buttonSound) {
      const audioCoins = new Audio();
      audioCoins.src = '../assets/audio/Tada.mp3';
      audioCoins.autoplay = true;
    }
  }

  public static AddMessage() {
    const buttonSound = document.querySelector(".active") as HTMLDivElement;
    if (buttonSound) {
      const audioCoins = new Audio();
      audioCoins.src = '../assets/audio/public_chat.mp3';
      audioCoins.autoplay = true;
    }
  }

  public static PickUp() {
    const buttonSound = document.querySelector(".active") as HTMLDivElement;
    if (buttonSound) {
      const audioCoins = new Audio();
      audioCoins.src = '../assets/audio/board-game-plastic-pieces-pick-up.mp3';
      audioCoins.autoplay = true;
    }
  }

  public static ChanceorRelax() {
    const buttonSound = document.querySelector(".active") as HTMLDivElement;
    if (buttonSound) {
      const audioCoins = new Audio();
      audioCoins.src = '../assets/audio/ChanceorRelax.mp3';
      audioCoins.autoplay = true;
    }
  }

  public static ForceorTax() {
    const buttonSound = document.querySelector(".active") as HTMLDivElement;
    if (buttonSound) {
      const audioCoins = new Audio();
      audioCoins.src = '../assets/audio/pole_letter_wrong.mp3';
      audioCoins.autoplay = true;
    }
  }
}