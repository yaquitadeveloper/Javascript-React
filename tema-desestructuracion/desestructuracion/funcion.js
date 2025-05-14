const usuario = {
    nombre: 'Ana',
    edad: 30,
    ciudad: 'Madrid',
    profesion: 'Desarrollo web'
};


function obtenerConfiguracion() {
    return {
        tema: 'oscuro',
        idioma: 'es',
        notificaciones: true,
    };
}

/*sin desestructuracion*/
const config = obtenerConfiguracion();
const temaconfig = config.tema;
const idiomaConfig = config.idioma;

console.log(temaconfig, idiomaConfig);

/*con desestructuracion*/
const { tema, idioma} = obtenerConfiguracion();
console.log(tema, idioma);


/*Asignar a nuevas variablwa con nombres diferentes */
const { nombre: nombreCompleto, profesion: cargo } = usuario;

console.log(nombreCompleto);
console.log(cargo);

/* Valores por defecto: si una propiedadno exite en el objeto, puedes asigmarle un valor por defecto. */
const { pais = 'España' } = usuario;
console.log(pais);

