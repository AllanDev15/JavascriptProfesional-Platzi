const target = {
  red: 'Rojo',
  green: 'Verde',
  blue: 'Azul',
};

const handler = {
  // handler.get(obj:target, prop:a-buscar)
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }

    const suggestion = Object.keys(obj).find((key) => {
      return Levenshtein.get(key, prop) <= 3;
    });

    if (suggestion) {
      console.log(`${prop} no se encontro. Quisiste decir ${suggestion} ?`);
    }

    return obj[prop];
  },
};
const p = new Proxy(target, handler);

console.log(p.red);
console.log(p.reed);
