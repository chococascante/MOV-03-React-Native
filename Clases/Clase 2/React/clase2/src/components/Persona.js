import React from "react";

export default function Persona(props) {
  const { persona } = props;
  return (
    <div>
      <p>{persona.nombre}</p>
      <p>{persona.perros}</p>
    </div>
  );
}
