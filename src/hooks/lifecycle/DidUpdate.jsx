/**
 * Ejemplo de uso de metodo componenetDidUPdate en componente clase
 * y uso de hook en componente funcional
 */

import React, { Component, useEffect } from "react";

export class DidUpdate extends Component {
  componentDidUpdate() {
    console.log(
      "Comportamiento cuando el componente recibe nuevos props o cam,bios en us estado privado"
    );
  }

  render() {
    return (
      <div>
        <h1>DidUpdate</h1>
      </div>
    );
  }
}

export const DidUpdateHook = () => {
  useEffect(() => {
    console.log(
      "Comportamiento cuando el componente recibe nuevos props o cam,bios en us estado privado"
    );
  });

  return (
    <div>
      <h1>DidUpdate</h1>
    </div>
  );
};
