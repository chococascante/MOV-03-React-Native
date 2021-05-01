import { useState } from "react";

import ComponenteClase from "./components/ComponenteClase";
import ComponenteFuncional from "./components/ComponenteFuncional";

function App() {
  const [contenidoClase, setContenidoClase] = useState("Propiedad");
  const [contenidoFuncion, setContenidoFuncion] = useState("Propiedad");

  const personas = [
    { nombre: "Luis", edad: 204, perros: 3 },
    { nombre: "Irene", edad: 204, perros: 3 },
    { nombre: "Cristian", edad: 204, perros: 3 },
    { nombre: "Daniel", edad: 204, perros: 3 },
    { nombre: "Diego", edad: 204, perros: 3 },
    { nombre: "Felipe", edad: 204, perros: 3 },
    { nombre: "Hector", edad: 204, perros: 3 },
  ];

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ComponenteClase
          contenidoPadre={contenidoClase}
          setContenidoPadre={setContenidoClase}
        />
        <ComponenteFuncional
          contenidoPadre={contenidoFuncion}
          setContenidoPadre={setContenidoFuncion}
        />
      </div>
      <div></div>
    </>
  );
}

export default App;
