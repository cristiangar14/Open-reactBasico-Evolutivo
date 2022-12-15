import React, { useState, useEffect } from "react";

const initialstyle = {
  width: "255px",
  height: "255px",
  margin: "auto",
  border: "1px solid black",
  backgroundColor: `rgb(0,0,0)`,
};

const randomNum = (max) => {
  return Math.floor(Math.random() * max);
};

const ChangeColor = () => {
  const [styleCont, setStyleCont] = useState(initialstyle);
  const [change, setChange] = useState(false);

  let randomColor;
  const changeColorInt = () => {
    if (!randomColor & change) {
      randomColor = setInterval(() => {
        let red, green, blue;
        red = randomNum(255);
        green = randomNum(255);
        blue = randomNum(255);
console.log('paso por aca');
        setStyleCont({
          ...styleCont,
          backgroundColor: `rgb(${red},${green},${blue})`,
        });
      }, 1000);
    }
  };

  const initColor = () => {
    setChange(true);
  }

  useEffect(() => {
    changeColorInt();
    return () => {
        clearInterval(randomColor);
     };
  }, [change]);

  const stopColor = () => {
    clearInterval(randomColor);
    setChange(false);
    randomColor = null;
  };

  return (
    <div
      style={styleCont}
      onDoubleClick={stopColor}
      onMouseOver={initColor}
      onMouseOut={stopColor} 
    ></div>
  );
};

export default ChangeColor;
