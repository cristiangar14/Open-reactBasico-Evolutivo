/**
 * ejemplod e uso de:
 * - useState()
 * - useRef()
 * - useState()
 */

import React, { useState, useEffect, useRef } from 'react'

export default function Ejemplo2() {

    // vamos a crear dos contadores distintos
    // cada uno en un estado diferente

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // vamos a crear una referencia con useRef() para asociar una variable
    // con un elemnto del DOM

    const miRef = useRef();

    function incrementar1() {
        setContador1(contador1 + 1)        
    }

    function incrementar2() {
        setContador2(contador2 + 1)
    }

    /**
     * Trabajando el useEffect()
     * 
     * 
     * ? Caso 1: Ejecutar SIEMPRE un snippet de codigo
     * CAda vez que haya un cambio en el estado del componente
     * Se ejecuta aquello que este dentro del useEffect()
     */

    // useEffect(() => {
    //   console.log('cambio en el esatdo del componente');
    //   console.log('Mostrando referencia al elemento del DOM');
    //   console.log(miRef);
    // });


    /**
     * ? caso 2: Ejecutar solo cuando cambie contador 1
     * Cada vez que haya un cambio en el contador 1 se ejecuta el useEffc()
     * Si cambia el contador 2 no se Ejecuta el useEffect()
     */

    // useEffect(() => {
    //     console.log('cambio en el esatdo del componente');
    //    console.log('Mostrando referencia al elemento del DOM');
    //    console.log(miRef);
    // }, [contador1]);

    /**
     * ? caso 3: se ejecuta cuando cambie solo alguno de los contadores
     * Cada vez que haya un cambio en el contador 1 se ejecuta el useEffc()
     * Cada vez que haya un cambio en el contador 2 se ejecuta el useEffc()
     */

     useEffect(() => {
         console.log('cambio en el esatdo del componente');
        console.log('Mostrando referencia al elemento del DOM');
        console.log(miRef);
     }, [contador1, contador2]);

  return (
    <div>
        <h1>***Ejemplo de useState(), useRef(), useEffect() ****** </h1>
      <h2>Contador 1: {contador1}</h2>
      <h2>Contador 2: {contador2}</h2>
      {/* Elemento referenciado */}

      <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>

      {/* Bloque de botones para cambiar los contadores */}
      <div>
        <button onClick={incrementar1}>Incrementar contador 1</button>
        <button onClick={incrementar2}>Incrementar contador 2</button>
      </div>
    </div>
  )
}
