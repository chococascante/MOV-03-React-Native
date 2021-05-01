import React, { Component } from "react";
import PropTypes from "prop-types";
export default class ComponenteClase extends Component {
  static propTypes = {
    contenidoPadre: PropTypes.string,
    setContenidoPadre: PropTypes.func,
  };

  constructor() {
    super();
    this.state = {
      contenido: "Lorem ipsum",
    };
  }

  // Después del primer render
  componentDidMount() {
    setTimeout(() => {
      // this.state.contenido = "Pasaron 3 segundos"; ESTO NO SE HACE, UFA
      this.setState({ contenido: "Pasaron 3 segundos" });
      this.props.setContenidoPadre("Clase");
    }, 3000);
  }

  render() {
    return (
      <div>
        <h2>Componente de Clases</h2>
        <p>{this.state.contenido}</p>
        <p>{this.props.contenidoPadre}</p>
      </div>
    );
  }
}
