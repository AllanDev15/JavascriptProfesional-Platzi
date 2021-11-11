/* Comenzando desde un simple objeto
\
\
\  Hasta utilizar Object.create y New para crear objetos
*/

function Hero(name) {
  const hero = {
    name: name,
  };

  hero.saludar = function () {
    console.log(`Hola, soy ${this.name}`);
  };

  return hero;
}

const zelda = Hero('Zelda');
zelda.saludar();

const link = Hero('Link');
link.saludar();

// Asignando la función a una constante para no crearla cada vez que se crea un nuevo objeto
const heroMethods = {
  saludar: function () {
    console.log(`Hola, soy ${this.name}`);
  },
};

function Hero1(name) {
  const hero = {
    name: name,
  };

  hero.saludar = heroMethods.saludar;

  return hero;
}

const zelda1 = Hero1('Zelda1');
zelda1.saludar();

const link1 = Hero1('Link1');
link1.saludar();

// Utilizando Object.create()
const heroMethods1 = {
  saludar: function () {
    console.log(`Hola, soy ${this.name}`);
  },
};

function Hero2(name) {
  const hero = Object.create(heroMethods);
  hero.name = name;

  return hero;
}

const zelda2 = Hero2('Zelda2');
zelda2.saludar();

const link2 = Hero2('Link2');
link2.saludar();

// Agregando la función saludar al prototype y usando new en lugar del Object create
function Hero3(name) {
  // const hero = Object.create(Hero.prototype);

  this.name = name;
}

Hero3.prototype.saludar = function () {
  console.log(`New ${this.name}`);
};

const zelda3 = new Hero3('Zelda3');
zelda3.saludar();

const link3 = new Hero3('Link3');
link3.saludar();
