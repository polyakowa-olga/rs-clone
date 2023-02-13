/* eslint-disable */
export class GameCubeRoll {
  min: number = 1;
  max: number = 7;
  cube1!: number;
  cube2!: number;
  arrayNumbersOneBlock!: number[];
  arrayNumbersTwoBlock!: number[];
  sum!: number;
  createNumber() {
    this.cube1 = Math.floor(Math.random() * (this.max - this.min)) + this.min
    this.cube2 = Math.floor(Math.random() * (this.max - this.min)) + this.min
  }
  roll() {
    this.createNumber()
    this.sum = this.cube1 + this.cube2

    this.arrayNumbersOneBlock = this.arrayblock(this.cube1) as number[]
    this.arrayNumbersTwoBlock = this.arrayblock(this.cube2) as number[]
  }

  protected arrayblock(number: number) {
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
