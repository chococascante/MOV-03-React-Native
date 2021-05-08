import React, { Component } from "react";
import Persona from "./Persona";
import PropTypes from "prop-types";

export default class ListaPersonasClase extends Component {
  static propTypes = {
    personas: PropTypes.array,
    setPersonas: PropTypes.func,
  };

  agregarPersona() {
    this.props.setPersonas([
      ...this.props.personas,
      { nombre: "Jody", edad: 204, perros: 5 },
    ]);
  }

  modificarPersona() {
    this.props.personas[0] = { nombre: "Luis", edad: 205, perros: 7 };
  }

  componentDidMount() {
    setTimeout(() => {
      this.agregarPersona();
      this.modificarPersona();
    }, 3000);
  }

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
