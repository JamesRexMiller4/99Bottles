import { downTo } from './helpers';

export class Bottles {
  verse(numBottles) {
    if (numBottles === 0) {
      return 'No more bottles of beer on the wall, ' +
      'no more bottles of beer.\n' +
      'Go to the store and buy some more, ' +
      '99 bottles of beer on the wall.\n';
      
    } else {
      return `${numBottles} ${this.container(numBottles)} of beer on the wall, ` +
      `${numBottles} ${this.container(numBottles)} of beer.\n` +
      `Take ${this.pronoun(numBottles)} down and pass it around, ` +
      `${this.quantity(numBottles - 1)} ${this.container(numBottles - 1)} of beer on the wall.\n`;
    }
  }
  
  verses(val1, val2) {
    let response;
    for (let i = val1; i >= val2; i--) {
      let verse = this.verse(i);
      if (i === val1) {
        response = verse;
      } else {
        response = response + '\n' + verse;
      }
    }
    return response;
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
    } else return number;
  }

  song() {
    return this.verses(99, 0);
  }
}
