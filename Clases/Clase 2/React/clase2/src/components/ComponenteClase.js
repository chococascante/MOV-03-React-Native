import React, { Component } from "react";

export default class ComponenteClase extends Component {
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
    }, 3000);
  }

  render() {
    return (
      <div>
        <h2>Componente de Clases</h2>
        <p>{this.state.contenido}</p>
      </div>
    );
  }
}
