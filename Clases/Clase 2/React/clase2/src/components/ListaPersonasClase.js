import React, { Component } from "react";
import Persona from "./Persona";
import PropTypes from "prop-types";

export default class ListaPersonasClase extends Component {
  static propTypes = {
    personas: PropTypes.array,
  };

  render() {
    return (
      <div>
        <h3>Lista Clase</h3>
        {this.props.personas.map((persona) => (
          <Persona persona={persona} />
        ))}
      </div>
    );
  }
}
