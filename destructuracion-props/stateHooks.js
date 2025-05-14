import React, { useState } from 'react';

function Contador() {
    const estadoArray = useState(0);  //useState devuelve un array
    const contador = estadoArray[0];
    const setContador = estadoArray[1];

    return (
        <div>
            <p>Has hecho click {contador} veces</p>
            <button onClick={() => setContador(contador + 1)}>
                Incrementar
            </button>
        </div>
    );
}

// con destructuracion de array:

import React, { useState } from 'react';

function Contador() {
    const [contador, setContador] = useState(0); // Destructuracion del array devuelto por useState

    return (
        <div>
            <p> Has hecho click {contador} veces</p>
            <button onClick={() => setContador(contador + 1)}>
                Incrementar
            </button>
        </div>
    );
}