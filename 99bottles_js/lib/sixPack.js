import { downTo, capitalize } from './helpers';

export class Bottles {
  verse(numBottles) {
    return `${capitalize(this.quantity(numBottles))} ${this.container(numBottles)} of beer on the wall, ` +
    `${this.quantity(numBottles)} ${this.container(numBottles)} of beer.\n` +
    `${this.action(numBottles)}` +
    `${this.quantity(this.successor(numBottles))} ${this.container(this.successor(numBottles))} of beer on the wall.\n`;
  }
  
  verses(starting, ending) {
    return downTo(starting, ending)
      .map(i => this.verse(i))
      .join('\n');
  }

  container(number) {
    return new BottleNumber(number).container(number);
  }

  pronoun(number) {
    return new BottleNumber(number).pronoun(number);
  }

  quantity(number) {
    return new BottleNumber(number).quantity(number);
  }

  action(number) {
    return new BottleNumber(number).action(number);
  }

  successor(number) {
    return new BottleNumber(number).successor(number);
  }

  song() {
    return this.verses(99, 0);
  }
}

class BottleNumber {
  constructor(number) {
    this.number = number;
  }

  container() {
    if (this.number === 1) {
      return 'bottle';
    } else return 'bottles';
  }

  pronoun() {
    if (this.number === 1) {
      return 'it';
    } else return 'one';
  }

  quantity() {
    if (this.number === 0) {
      return 'no more';
    } else return this.number.toString();
  }

  action(number) {
    if (number === 0) {
      return 'Go to the store and buy some more, ';
    } else return `Take ${this.pronoun(number)} down and pass it around, `;
  }

  successor(number) {
    if (number === 0) {
      return 99;
    } else return number - 1;
  }
}