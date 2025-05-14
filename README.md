# Demostración de Destructuración en JavaScript (Vanilla JS)

Este repositorio contiene ejemplos básicos que ilustran el uso de la destructuración de objetos y arrays en JavaScript puro (Vanilla JS). La destructuración es una característica poderosa de ECMAScript 6 (ES6) que permite desempaquetar valores de arrays u propiedades de objetos en variables distintas de forma más concisa.

## ¿Qué es la Destructuración?

La sintaxis de destructuración es una expresión de JavaScript que permite desempaquetar valores de arrays, o propiedades de objetos, en distintas variables. Esto puede hacer que tu código sea más legible y eficiente, especialmente cuando trabajas con estructuras de datos complejas o cuando pasas objetos de configuración a funciones.

## Ejemplos Incluidos

Aquí encontrarás ejemplos prácticos que cubren los casos de uso más comunes de la destructuración.

### 1. Destructuración de Objetos

Este ejemplo muestra cómo extraer propiedades específicas de un objeto y asignarlas a variables individuales.

**Archivo:** `objeto.js`

```javascript
// Objeto de ejemplo
const usuario = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Madrid'
};

// Sin destructuración
// const nombreUsuario = usuario.nombre;
// const edadUsuario = usuario.edad;

// Con destructuración
const { nombre, edad } = usuario;

console.log(nombre); // Salida: Juan
console.log(edad);   // Salida: 30

// También puedes renombrar variables durante la destructuración
const { ciudad: ciudadOrigen } = usuario;
console.log(ciudadOrigen); // Salida: Madrid

// Destructuración con valores por defecto
const { ocupacion = 'Desconocida' } = usuario;
console.log(ocupacion); // Salida: Desconocida (porque no existe en el objeto)

const personaConOcupacion = {
  nombre: 'Ana',
  ocupacion: 'Ingeniera'
};

const { ocupacion: trabajo = 'Desconocida' } = personaConOcupacion;
console.log(trabajo); // Salida: Ingeniera (toma el valor del objeto)