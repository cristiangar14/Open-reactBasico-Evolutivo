import React, { useRef } from "react";

const Child = ({ name, send, update }) => {

    const mesaggeRef = useRef('')
    const nameRef = useRef('')

  function pressButton() {
    const text = mesaggeRef.current.value
    alert(`Text in Input ${text}`);
  }

  function pressButtonParams(text) {
    alert(`Text: ${text}`);
  }

  function submitName(e) {
    e.preventDefault();
    update(nameRef.current.value)
  }

  return (
    <div style={ {background:'cyan', padding:'20px'}}>
      <p onMouseOver={() => console.log("on Mouse Over")}>Hello, {name}</p>
      <button onClick={() => console.log("press button 1")}>button 1</button>
      <button onClick={pressButton}>button 2</button>
      <button onClick={() => pressButtonParams("hola")}>button 3</button>
      <input
        placeholder="Send a text to your  father"
        onFocus={() => console.log("Input focus")}
        onChange={(e) => console.log("Input change", e.target.value)}
        onCopy={() => console.log("Input copy")}
        ref={mesaggeRef}
      />
      <button onClick={() => send(mesaggeRef.current.value)}>enviar mensaje</button>
      <div className="mt-2">
        <form onSubmit={submitName}>
            <input ref={nameRef} placeholder="New name"/>
            <button type="submit">Update name</button>
        </form>
      </div>
    </div>
  );
};

export default Child;
