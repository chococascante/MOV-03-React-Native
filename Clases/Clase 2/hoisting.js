// Hoisting - Eleva declaraciones

const animal = new Animal();

foo();

let i = 5;

function foo() {
  console.log("Foo");
}

class Animal {
  constructor(colorPelo) {
    this.colorPelo = colorPelo;
  }
}
