import React, { useEffect } from 'react';

const AllCycles = () => {

    useEffect(() => {
        console.log('Componente creado');

        const intervalId = setTimeout(() => {
            document.title = `${new Date()}`
            console.log('Actualizacion del compoenente');
        }, 1000)

        return () => {
            console.log('Componente va a desaparecer');
            document.title = 'tiempo deteneido'
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
