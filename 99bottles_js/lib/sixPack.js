import { downTo, capitalize } from './helpers';

export class Bottles {
  verse(numBottles) {
    const bottleNumber = this.bottleNumberFor(numBottles);
    const nextBottleNumber = this.bottleNumberFor(bottleNumber.successor());

    return (
      capitalize(`${bottleNumber} of beer on the wall, `) +
      `${bottleNumber} of beer.\n` +
      `${bottleNumber.action()}`   +
      `${nextBottleNumber} of beer on the wall.\n`
    );
  }
  
  verses(starting, ending) {
    return downTo(starting, ending)
      .map(i => this.verse(i))
      .join('\n');
  }

  song() {
    return this.verses(99, 0);
  }

  bottleNumberFor(number) {
    let bottleNumberClass;
    if (number === 0) {
      bottleNumberClass = BottleNumber0;
    } else if (number === 1) {
      bottleNumberClass = BottleNumber1;
    } else {
      bottleNumberClass = BottleNumber;
    }

    return new bottleNumberClass(number);
  }
}

class BottleNumber {
  constructor(number) {
    this.number = number;
  }

  container() {
    return 'bottles';
  }

  pronoun() {
    return 'one';
  }

  quantity() {
    return this.number.toString();
  }

  action() {
    return `Take ${this.pronoun()} down and pass it around, `;
  }

  successor() {
    return this.number - 1;
  }

  toString() {
    return `${this.quantity()} ${this.container()}`;
  }
}

class BottleNumber0 extends BottleNumber {
  quantity() {
    return 'no more';
  }

  action() {
    return 'Go to the store and buy some more, ';
  }

  successor() {
    return 99;
  }
}

class BottleNumber1 extends BottleNumber {
  pronoun() {
    return 'it';
  }

  container() {
    return 'bottle';
  }
}