import { downTo, capitalize } from './helpers';

export class Bottles {
  verse(numBottles) {
    if (numBottles === 0) {
      return `${capitalize(this.quantity(numBottles))} ${this.container(numBottles)} of beer on the wall, ` +
      `${this.quantity(numBottles)} ${this.container(numBottles)} of beer.\n` +
      `${this.action(numBottles)}` +
      '99 bottles of beer on the wall.\n';
      
    } else {
      return `${capitalize(this.quantity(numBottles))} ${this.container(numBottles)} of beer on the wall, ` +
      `${numBottles} ${this.container(numBottles)} of beer.\n` +
      `${this.action(numBottles)}` +
      `${this.quantity(numBottles - 1)} ${this.container(numBottles - 1)} of beer on the wall.\n`;
    }
  }
  
  verses(starting, ending) {
    return downTo(starting, ending)
      .map(i => this.verse(i))
      .join('\n');
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

  song() {
    return this.verses(99, 0);
  }
}
