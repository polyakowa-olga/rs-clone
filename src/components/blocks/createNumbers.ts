/* eslint-disable */
// import { dices } from "../pages/game_page/components/dices/index"; // for dices animation

export class GameCubeRoll {
  static min: number = 1;
  static max: number = 7;
  static cube1: number;
  static cube2: number;
  static arrayNumbersOneBlock: number[];
  static arrayNumbersTwoBlock: number[];
  static sum: number;
  static isDouble: boolean;
  protected static createNumber() {
    GameCubeRoll.cube1 = Math.floor(Math.random() * (GameCubeRoll.max - GameCubeRoll.min)) + GameCubeRoll.min
    GameCubeRoll.cube2 = Math.floor(Math.random() * (GameCubeRoll.max - GameCubeRoll.min)) + GameCubeRoll.min
  }
  public static roll() {
    GameCubeRoll.createNumber()
    GameCubeRoll.sum = GameCubeRoll.cube1 + GameCubeRoll.cube2
    GameCubeRoll.isDouble = GameCubeRoll.cube1 === GameCubeRoll.cube2;
    GameCubeRoll.arrayNumbersOneBlock = GameCubeRoll.arrayblock(GameCubeRoll.cube1) as number[]
    GameCubeRoll.arrayNumbersTwoBlock = GameCubeRoll.arrayblock(GameCubeRoll.cube2) as number[]

    ///// animation dices start
    // dices.run(GameCubeRoll.arrayNumbersOneBlock, GameCubeRoll.arrayNumbersTwoBlock);
    ///// animation dices end
  }

  protected static arrayblock(number: number) {
    if (number === 6) {
      return [5, 1, 4, 3, 2, 6];
      // arrayNumbersBlock [front, back, left, right, top, bottom]
    } else if (number === 5) {
      return [3, 4, 6, 1, 2, 5];
      // arrayNumbersBlock [front, back, left, right, top, bottom]
    } else if (number === 4) {
      return [5, 2, 6, 1, 3, 4];
      // arrayNumbersBlock [front, back, left, right, top, bottom]
    } else if (number === 3) {
      return [2, 5, 6, 1, 4, 3];
      // arrayNumbersBlock [front, back, left, right, top, bottom]
    } else if (number === 2) {
      return [4, 3, 6, 1, 5, 2];
      // arrayNumbersBlock [front, back, left, right, top, bottom]
    } else if (number === 1) {
      return [3, 4, 5, 2, 6, 1];
      // arrayNumbersBlock [front, back, left, right, top, bottom]
    }
  }
}
