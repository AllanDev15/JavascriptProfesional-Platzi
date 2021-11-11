function Hero(name) {
  this.name = name;
}

Hero.prototype.saludar = function () {
  console.log(`Hola. soy ${this.name}`);
};

const zelda = new Hero('Zelda');

console.log(zelda.name);

// hasOwnProperty nos dice si algo le pertenece directamente o si es a traves de herencia

console.log(zelda.hasOwnProperty('name')); //true
console.log(zelda.hasOwnProperty('saludar')); //false

// Sin mebargo Saludar si esta en el prototype de Zelda
const protoZelda = Object.getPrototypeOf(zelda);
console.log(protoZelda.hasOwnProperty('saludar')); // true

console.log(protoZelda === Hero.prototype); // true
//El prototype de zelda es el mismo que el de Hero

console.log(protoZelda.hasOwnProperty('toString')); // false
const protoHero = Hero.prototype;
console.log(protoHero.hasOwnProperty('toString')); // false

const protoHero2 = Object.getPrototypeOf(Hero);
console.log(protoHero2.hasOwnProperty('toString')); // true
// toString y otras funciones se encuentran en el prototype del prototype (Object) de Hero

/*
zelda
|
|--> Hero.prototype
    |
    |--> Hero.prototype.__proto__     (Object)
*/
