/**
 * Ejemplo de uso del metodo
 * de ciclo de via en componente tipo clase y componente tipo funcional
 */

import React, { Component, useEffect } from 'react'

export class DidMount extends Component {
    componentDidMount(){
        console.log('Comportamiento antes de que el compoenete sea añadido al DOM (renderice)');
    }
  render() {
    return (
      <div><h1>DidMount</h1></div>
    )
  }
}

export const DidMountHook = () => {


    useEffect(() => {
        console.log('Comportamiento antes de que el compoenete sea añadido al DOM (renderice)');
    }, []);

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}

