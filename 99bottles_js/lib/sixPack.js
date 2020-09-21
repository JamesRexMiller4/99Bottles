import { downTo, capitalize } from './helpers';

export class Bottles {
  verse(numBottles) {
    const bottleNumber = BottleNumber.for(numBottles);

    return (
      capitalize(`${bottleNumber} of beer on the wall, `) +
      `${bottleNumber} of beer.\n` +
      `${bottleNumber.action()}`   +
      `${bottleNumber.successor()} of beer on the wall.\n`
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
}

class BottleNumber {
  constructor(number) {
    this.number = number;
  }

  static for(number) {
    const bottleNumberClass = BottleNumber.registry.find(
      candidate => candidate.canHandle(number)
    );
    return new bottleNumberClass(number);
  }

  static canHandle(number) {
    return true;
  }

  static register(candidate) {
    BottleNumber.registry.unshift(candidate);
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
    return BottleNumber.for(this.number - 1);
  }

  toString() {
    return `${this.quantity()} ${this.container()}`;
  }
}

BottleNumber.registry = [BottleNumber];

class BottleNumber0 extends BottleNumber {
  static canHandle(number) {
    return number === 0;
  }

  quantity() {
    return 'no more';
  }

  action() {
    return 'Go to the store and buy some more, ';
  }

  successor() {
    return BottleNumber.for(99);
  }
}

BottleNumber.register(BottleNumber0);
class BottleNumber1 extends BottleNumber {
  static canHandle(number) {
    return number === 1;
  }

  pronoun() {
    return 'it';
  }

  container() {
    return 'bottle';
  }
}

BottleNumber.register(BottleNumber1);

class BottleNumber6 extends BottleNumber {
  static canHandle(number) {
    return number === 6;
  }

  quantity() {
    return '1';
  }

  container() {
    return 'six-pack';
  }
}

BottleNumber.register(BottleNumber6);