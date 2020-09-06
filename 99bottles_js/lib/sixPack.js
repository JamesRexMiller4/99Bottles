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
    new BottleNumber(number).container(number);
    if (number === 1) {
      return 'bottle';
    } else return 'bottles';
  }

  pronoun(number) {
    if (number === 1) {
      return 'it';
    } else return 'one';
  }

  quantity(number) {
    if (number === 0) {
      return 'no more';
    } else return number.toString();
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

  song() {
    return this.verses(99, 0);
  }
}

class BottleNumber {
  constructor(number) {
    this.number = number;
  }

  container(number) {
    if (number === 1) {
      return 'bottle';
    } else return 'bottles';
  }

  pronoun(number) {
    if (number === 1) {
      return 'it';
    } else return 'one';
  }

  quantity(number) {
    if (number === 0) {
      return 'no more';
    } else return number.toString();
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