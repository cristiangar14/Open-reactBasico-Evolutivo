import React, { useState, useEffect} from 'react';

const Clock = () => {

    const initialData = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martin',
        apellidos: 'San Jose',
    }
    const [data, setData] = useState(initialData);
    
    useEffect(() => {

        let timerID = setInterval(() => {
            tick();
        }, 1000);

        return () => {
           clearInterval(timerID);
        };
    });


    const tick = () => {
        //let edad = data.edad + 1;
        setData({
            ...data,
           fecha: new Date(),
           edad: data.edad + 1
        })
    }


    return (
        <div>
            <h2>Hora actual: {data.fecha.toLocaleTimeString()}</h2>
            <h3>{data.nombre}</h3>
            <h1>Edad: {data.edad}</h1>
        </div>
    );
}

export default Clock;
