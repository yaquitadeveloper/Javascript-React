//Objeto de ejemplo 

const usuario = {
    nombre: 'Ana',
    edad: 30,
    ciudad: 'Madrid',
    profesion: 'Desarrollo web'
};

/*forma tradicional de acceder a las propiedades de un objeto*/
const nombreUsuario = usuario.nombre;
const edadUsuario = usuario.edad;
const ciudadUsuario = usuario.ciudad;
const profesionUsuario = usuario.profesion;

console.log(nombreUsuario);
console.log(edadUsuario);
console.log(ciudadUsuario);
console.log(profesionUsuario);

/* Usando Desestructuracion:*/
const {nombre, edad, ciudad} = usuario;

console.log(nombre);
console.log(edad);
console.log(ciudad);
