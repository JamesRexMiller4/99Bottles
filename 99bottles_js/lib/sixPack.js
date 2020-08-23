import { downTo } from './helpers';

export class Bottles {
  verse(numBottles) {
    if (numBottles === 0) {
      return 'No more bottles of beer on the wall, ' +
      'no more bottles of beer.\n' +
      'Go to the store and buy some more, ' +
      '99 bottles of beer on the wall.\n';
      
    }

    if (numBottles >= 2) {
      return `${numBottles} bottles of beer on the wall, ` +
      `${numBottles}` + ' bottles of beer.\n' +
      'Take one down and pass it around, ' +
      `${numBottles - 1}` + ` ${this.container(numBottles - 1)} ` + 'of beer on the wall.\n';
    } else {
      return '1 bottle of beer on the wall, ' +
      '1 bottle of beer.\n' +
      'Take it down and pass it around, ' +
      'no more bottles of beer on the wall.\n';
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

  song() {
    return this.verses(99, 0);
  }
}
