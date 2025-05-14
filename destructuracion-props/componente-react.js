//componente funcionale de ract
function Saludo(props) {
    return (
        <div>
            <h1>Hola, {props.nombre}!</h1>
            <p>Tienes {props.edad} años.</p>
        </div>
    );
}

//uso del componente
<Saludo nombre="Carlos" edad={25} />

//Con destructuracion dentro del cuerpo de la funcion:

function Saludo(props) {
    const {nombre, edad } = props;
    return (
        <div>
            <h1>Hola, {nombre}!</h1>
            <p>Tienes {edad} años.</p>
        </div>
    );

}