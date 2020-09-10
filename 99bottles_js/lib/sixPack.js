import { downTo, capitalize } from './helpers';

export class Bottles {
  verse(numBottles) {
    const bottleNumber = new BottleNumber(numBottles);
    const nextBottleNumber = new BottleNumber(bottleNumber.successor());

    return `${capitalize(bottleNumber.quantity())} ${bottleNumber.container()} of beer on the wall, ` +
    `${bottleNumber.quantity()} ${bottleNumber.container()} of beer.\n` +
    `${bottleNumber.action()}` +
    `${nextBottleNumber.quantity()} ${nextBottleNumber.container()} of beer on the wall.\n`;
  }
  
  verses(starting, ending) {
    return downTo(starting, ending)
      .map(i => this.verse(i))
      .join('\n');
  }

  container(number) {
    return new BottleNumber(number).container();
  }

  pronoun(number) {
    return new BottleNumber(number).pronoun();
  }

  quantity(number) {
    return new BottleNumber(number).quantity();
  }

  action(number) {
    return new BottleNumber(number).action();
  }

  successor(number) {
    return new BottleNumber(number).successor();
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

  action() {
    if (this.number === 0) {
      return 'Go to the store and buy some more, ';
    } else return `Take ${this.pronoun()} down and pass it around, `;
  }

  successor() {
    if (this.number === 0) {
      return 99;
    } else return this.number - 1;
  }
}