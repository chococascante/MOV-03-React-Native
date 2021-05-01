import React from "react";
import Persona from "./Persona";

const ListaPersonasFuncion = ({ personas }) => {
  return (
    <div>
      <h3>Lista Clase</h3>
      {personas.map((persona) => (
        <Persona persona={persona} />
      ))}
    </div>
  );
};

export default ListaPersonasFuncion;
