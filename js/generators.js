function* simpleGenerator() {
  console.log('Generator Start');
  yield 1;
  yield 2;
  console.log('Generator End');
}

const gen = simpleGenerator();

console.log(gen);

function* idMaker() {
  let id = 1;
  while (true) {
    yield id;
    id++;
  }
}

const gen2 = idMaker();
console.log(gen2);

function* idMakerWithReset() {
  let id = 1;
  let reset;
  while (true) {
    reset = yield id;
    if (reset) {
      id = 1;
    } else {
      id++;
    }
  }
}

const gen3 = idMakerWithReset();
console.group('');
console.log(gen3.next());
console.log(gen3.next());
console.log(gen3.next());
console.log(gen3.next(true));
console.log(gen3.next());
console.groupEnd();

function* fibonacci() {
  let a = 1;
  let b = 1;
  while (true) {
    const nextNumber = a + b;
    a = b;
    b = nextNumber;
    yield nextNumber;
  }
}

const fibo = fibonacci();
console.group('Fibonacci');
console.log(fibo.next());
console.log(fibo.next());
console.log(fibo.next());
console.groupEnd();
