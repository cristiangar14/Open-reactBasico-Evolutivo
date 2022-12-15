import React, { useState } from "react";

let red = 0;
let green = 200;
let blue = 150;

// ? estilo para usuario no logueado
const loggedStyle = {
  backgroundColor: `rgb(${red},${green},${blue})`,
  color: "white",
  fontWeight: "bold",
};

// ? estilo para usuario no logueado
const unloggedStyle = {
  backgroundColor: "tomato",
  color: "white",
  fontWeight: "bold",
};
//Login / Logout buttons

const LoginButton = ({ loginAction, propStyle }) => {
  return (
    <button style={propStyle} onClick={loginAction}>
      Login
    </button>
  );
};
const LogoutButton = ({ logoutAction, propStyle }) => {
  return (
    <button style={propStyle} onClick={logoutAction}>
      Logout
    </button>
  );
};

// ? (expresion true) && expresion => se renderiza la expresion
// ? (expresion false) && expresion => no se renderiza la expresion

const OptionalRender = () => {
  const [access, setAccess] = useState(false);
  const [nMessages, setNMessages] = useState(0);
  // const updatedAccess = () => {
  //     setAccess(!access);
  // }

  const loginAction = () => {
    setAccess(true);
  };
  const logoutAction = () => {
    setAccess(false);
  };

  let optionalButton;

  // if (access) {
  //     optionalButton = <button onClick={updatedAccess}>Logout</button>
  // } else {
  //     optionalButton = <button onClick={updatedAccess}>Login</button>
  // }
  if (access) {
    optionalButton = (
      <LogoutButton
        propStyle={unloggedStyle}
        logoutAction={logoutAction}
      ></LogoutButton>
    );
  } else {
    optionalButton = (
      <LoginButton
        propStyle={loggedStyle}
        loginAction={loginAction}
      ></LoginButton>
    );
  }

  //anuread Message

  let addMessage = () => {
    setNMessages(nMessages + 1);
  };

  return (
    <div>
      {/* Optional button */}
      {optionalButton}
      {/* N messages unread */}
      {/* {nMessages > 0 && nMessages === 1 && <p>You have {nMessages} new message...</p>}
    {nMessages > 1 && <p>You have {nMessages} new messages...</p>}
    {nMessages === 0 && <p>There are no new messages</p>} */}

      {/* Ternary operator */}
      {access ? (
        <div>
          {nMessages > 0 ? (
            <p>
              You have {nMessages} new message{nMessages > 1 && "s"}...
            </p>
          ) : (
            <p>There are no new messages</p>
          )}
          <button onClick={addMessage}>
            {nMessages === 0 ? "Add your first message" : "Add new message"}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default OptionalRender;
