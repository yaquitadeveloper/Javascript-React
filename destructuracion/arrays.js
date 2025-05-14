//Array de ejemplo
const colores = ['rojo', 'verde', 'azul','amarillo'];

/* Forma tradicional de acceder a los elementos: */
const primerColor = colores [0];
const segundoColor = colores[1];

console.log(primerColor);
console.log(segundoColor);

/* Usando destructuracion */

const [colorPrincipal, colorSecundario] = colores;

console.log(colorPrincipal);
console.log(segundoColor);
