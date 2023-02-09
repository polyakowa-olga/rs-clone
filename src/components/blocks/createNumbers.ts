class createNumber {
  min: number;
  max: number;
  constructor(min: number, max: number) {
    this.min = min;
    this.max = max;
  }

  creatNumber() {
    this.min = Math.ceil(this.min);
    this.max = Math.floor(this.max);
    return Math.floor(Math.random() * (this.max - this.min)) + this.min;
  }
}
class createArrayBlocks {
  // arrayNumbersOneBlock: number[];
  // arrayNumbersTwoBlock: number[];
  // constructor(arrayNumbersOneBlock, arrayNumbersTwoBlock) {
  //   this.arrayNumbersOneBlock = arrayNumbersOneBlock;
  //   this.arrayNumbersTwoBlock = arrayNumbersTwoBlock;
  // }
  oneNumber = new createNumber(1, 7).creatNumber();
  twoNumber = new createNumber(1, 7).creatNumber();
  arrayblock(number: number) {
    let arrayNumbersBlock: number[] = [];
    if (number === 6) {
      return (arrayNumbersBlock = [5, 1, 4, 3, 2, 6]);
      // arrayNumbersBlock [front, back, left, right, top, bottom]
    } else if (number === 5) {
      return (arrayNumbersBlock = [3, 4, 6, 1, 2, 5]);
      // arrayNumbersBlock [front, back, left, right, top, bottom]
    } else if (number === 4) {
      return (arrayNumbersBlock = [5, 2, 6, 1, 3, 4]);
      // arrayNumbersBlock [front, back, left, right, top, bottom]
    } else if (number === 3) {
      return (arrayNumbersBlock = [2, 5, 6, 1, 4, 3]);
      // arrayNumbersBlock [front, back, left, right, top, bottom]
    } else if (number === 2) {
      return (arrayNumbersBlock = [4, 3, 6, 1, 5, 2]);
      // arrayNumbersBlock [front, back, left, right, top, bottom]
    } else if (number === 1) {
      return (arrayNumbersBlock = [3, 4, 5, 2, 6, 1]);
      // arrayNumbersBlock [front, back, left, right, top, bottom]
      console.log(arrayNumbersBlock);
    }
  }
  arrayNumbersOneBlock = this.arrayblock(this.oneNumber);
  arrayNumbersTwoBlock = this.arrayblock(this.twoNumber);
}

export default createArrayBlocks;
