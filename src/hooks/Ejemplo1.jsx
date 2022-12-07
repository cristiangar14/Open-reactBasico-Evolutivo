import React, { useState } from "react";

const Ejemplo1 = () => {
  const valorInicial = 0;

  const personaInicial = {
    nombre: "Cristian",
    email: "prueba@pruebaa.com",
  };

  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);

  /*
   *Funcion para actualizar el estado que tiene el contador
   */

  function incrementarContador(params) {
    setContador(contador + 1);
  }

  /*
   *Funcion para actualizar el estado de persona en el componente
   */

  function actualizarPersona(params) {
    setPersona({
      nombre: "pepe",
      email: "pru@pruebas.com",
    });
  }
  return (
    <div>
      <h1>Ejemplode useState</h1>
      <h2>Contador: {contador}</h2>
      <h2>Datos de la persona:</h2>
      <h3>nombre: {persona.nombre}</h3>
      <h3>email: {persona.email}</h3>

      {/* Bloque de botones para actualziar el estado */}
      <div>
        <button onClick={incrementarContador}>Incrementar contador</button>
        <button onClick={actualizarPersona}>Actualizar persona</button>
      </div>
    </div>
  );
};

export default Ejemplo1;
