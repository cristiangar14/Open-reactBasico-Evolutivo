/**
 * Ejemplod e componente de tipo clase que dispone de los metodos del cliclo de vida
 */

import React, { Component } from "react";
import PropTypes from "prop-types";

class LifeCycleExample extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor: Cuando se instala el componente");
  }

  componentWillMount() {
    console.log("WillMount: Antes del monstaje del componente");
  }

  componentDidMount() {
    console.log(
      "DidMount: Justo al acabar el monetaje del componente, antes de renderizarlo"
    );
  }

  componentWillReceiveProps() {
    console.log('WillReceiveProps: si va recibir nuevas props');
  }

  shouldComponentUpdate(){
    /**
     * controlar si el componente debe o no actualizarse
     */
    // return true o fales
  }

  componentWillUpdate(){
    console.log('WillUpdate: justo antes de acrualizarse');
  }

  componentDidUpdate(prevProps, prevState){
    console.log('DidUpdate: justo despues de actualizarse');
  }

  componentWillUnmount(){
    console.log('WillUnmount: Justo antes de desaparecer');
  }

  render() {
    return <div></div>;
  }
}

LifeCycleExample.propTypes = {};

export default LifeCycleExample;
