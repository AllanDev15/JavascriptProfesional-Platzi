console.log('Hola Typescript');

function add(a: number, b: number) {
  return a + b;
}

const sum = add(2, 3);

console.log(sum);

let muted: boolean = true;
muted = false;

let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

let nombre: string = 'Allan';
let saludo = `Me llamo ${nombre}`;

// Arreglos

let people: string[] = ['Isabel', 'Nicole', 'Raul'];
people.push('Allan');

let people2: Array<string | number> = [];
people2.push('Ricardo');
people2.push(23);

// Enum
enum Color {
  Rojo = 'Rojo',
  Verde = 'Verde',
  Azul = 'Azul',
}

let colorFavorito: Color = Color.Azul;
console.log(`Mi color favorito es ${colorFavorito}`); // Azul

// Any
let comodin: any = 'Joker';
comodin = { type: 'Wildcard' };

// Object
let someObject: Object = { type: 'Wildcard' };

// Funciones
function add2(a: number, b: number): number {
  return a + b;
}

const sum2 = add(2, 5);

function createAdder(a: number): (b: number) => number {
  return function (b: number) {
    return b + a;
  };
}

const addFour = createAdder(4);
const fourPlusSix = addFour(6);

// (firstName: string, lastName?: string) - Puede o no recibir el segundo parametro
// Valor por omision ↘
function fullName(firstName: string, lastName: string = 'Smith'): string {
  return `${firstName} ${lastName}`;
}

const richard = fullName('Richard');

// Interfaces

interface Rectangulo {
  ancho: number;
  alto: number;
  color?: Color;
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  color: Color.Azul,
};

function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect); // 24

console.log(rect.toString()); // [object Object]

rect.toString = function () {
  return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
};

console.log(rect.toString()); // Un rectangulo Azul
