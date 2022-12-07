/**
 * Ejemplo Hooks:
 * - useState()
 *  - useContext()
 */

import React, { useState, useContext } from "react";

/**
 *
 * @returns componente 1
 * Dispone un contexto que recibe desde el padre
 */
const miContexto = React.createContext(null);
const Componente1 = () => {
  // inicializamos un etsado vacio que va a rellenarse con los
  // datos del contexto del padre

  const state = useContext(miContexto);
  return (
    <div>
      <h1>El token es: {state.token}</h1>
      <Componente2 />
    </div>
  );
};

const Componente2 = () => {
  const state = useContext(miContexto);

  return (
    <div>
      <h2>sesion: {state.sesion}</h2>
    </div>
  );
};

export default function MicomponenteConContexto() {
  const estadoInicial = {
    token: "123455658",
    sesion: 1,
  };

  //creamos el estado de este componente

  const [sessionData, setSessionData] = useState(estadoInicial);

  function actualizarSesion() {
    setSessionData({
      token: "165464sdfsd",
      session: sessionData.sesion + 1,
    });
  }

  return (
    <miContexto.Provider value={sessionData}>
        {/**
         * Todo loq eu este aui dentro puede leer los datos de sessionData
         * Ademas, si se actualiza, los componentes de aqui, tambien lo actualizan
         */}

         <h1>***** Ejemplode useState() y useContext() ******</h1>
        <Componente1/>
        <button onClick={actualizarSesion}>Actualizar sesion</button>
    </miContexto.Provider>
  )
}
