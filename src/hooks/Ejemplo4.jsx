/**
 * Ejemplo para entender el uso de props.children
 * 
 * */

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>***Ejemplo de children props*****</h1>
            <h2>
                Nombre: {props.nombre}
            </h2>
            {/* props.children pintara por defecto aquelloq eu se encuente entre las etiquetas de apertura y cierre de este componente de orden superios */}
            {props.children}
        </div>
    );
}

export default Ejemplo4;
