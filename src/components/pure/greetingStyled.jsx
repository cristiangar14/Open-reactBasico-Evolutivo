import React, { useState } from "react";

/**
 * definiendo estilos en constantes
 */

// ? estilo para usuario no logueado
const loggedStyle = {
  color: "white",
};

// ? estilo para usuario no logueado
const unloggedStyle = {
  color: "tomato",
  fontWeight: "bold",
};

const GreetingStyled = ({ name }) => {
  //generamos un estado para el componente y asi controlar si el usuario esta logueado
  const [logged, setLogged] = useState(false);
 
  return (
    <div style={logged ? loggedStyle : unloggedStyle}>
      {logged ? (<p>Hola, {name}</p>) : (<p>Plese login</p>)}

      <button
        onClick={() => {
          console.log("boton pulsado");
          setLogged(!logged);
        }}
      >
        {logged ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default GreetingStyled;
