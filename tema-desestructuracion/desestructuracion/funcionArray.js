const colores = ['rojo', 'verde', 'azul','amarillo'];

function obtenerCoordenadas() {
    return [10.5, -3.2];
}

//Sin destructuracion
const coords = obtenerCoordenadas();
const latitud = coords[0];
const longitud = coords[1];

console.log(latitud, longitud);

// Con destructuracion
const [lag, lgn] = obtenerCoordenadas();
console.log(lag, lgn);

// omitir elementos: si no necesitas todos los elementos, puedes omitirlos con una ","
const [,, tercercolor, cuartocolor] = colores;
console.log(tercercolor);
console.log(cuartocolor);

//Rest operator

const [primero, segundo, ...otrosColores] = colores;
console.log(primero);
console.log(segundo);
console.log(otrosColores);


//Valores por defecto(menos comun pero posible):
const [a, b, c = 'valor por defecto'] = [1, 2];
console.log(b);