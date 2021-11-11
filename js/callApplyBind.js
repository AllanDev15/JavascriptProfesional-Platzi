function saludar() {
  console.log(`Hola, soy ${this.name} ${this.apellido}`);
}

function caminar(metros, direccion) {
  console.log(`${this.name} camina ${metros} metros hacia ${direccion}`);
}

const richard = {
  name: 'Richard',
  apellido: 'Kaufman López',
};

// Call
// El this en la funcion saludar va a ser el objeto richard
saludar.call(richard);

caminar.call(richard, 400, 'norte');

// Apply - Recibe argumentos de la función en un arreglo
caminar.apply(richard, [800, 'noreste']);

// Bind - Regresa una nueva función
const daniel = { name: 'Daniel', apellido: 'Sanchez' };
const danielSaluda = saludar.bind(daniel);
danielSaluda();

const danielCamina = caminar.bind(daniel);
danielCamina(1000, 'este');

const danielCamina1 = caminar.bind(daniel, 500);
danielCamina1('sur');

const buttons = document.getElementsByClassName('call-to-action');
console.log(buttons);

Array.prototype.forEach.call(buttons, (button) => {
  button.onclick = () => alert('Nunca pares de aprender');
});
