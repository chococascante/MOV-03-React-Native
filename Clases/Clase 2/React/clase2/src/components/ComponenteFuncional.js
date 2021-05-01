import React, { useState, useEffect } from "react";

export default function ComponenteFuncional({
  contenidoPadre,
  setContenidoPadre,
}) {
  const [contenido, setContenido] = useState("Lorem ipsum");

  useEffect(() => {
    setTimeout(() => {
      setContenido("Pasaron 3 segundos");
      setContenidoPadre("Funcion");
    }, 3000);
  }, []);

  return (
    <div>
      <h2>Componente Funcional</h2>
      <p>{contenido}</p>
      <p>{contenidoPadre}</p>
    </div>
  );
}
