import { useState } from "react";

import ComponenteClase from "./components/ComponenteClase";
import ComponenteFuncional from "./components/ComponenteFuncional";
import ListaPersonasClase from "./components/ListaPersonasClase";
import ListaPersonasFuncion from "./components/ListaPersonasFuncion";

const arregloPersonas = [
  { nombre: "Luis", edad: 204, perros: 3 },
  { nombre: "Irene", edad: 204, perros: 2 },
  { nombre: "Cristian", edad: 204, perros: 4 },
  { nombre: "Daniel", edad: 204, perros: 6 },
  { nombre: "Diego", edad: 204, perros: 7 },
  { nombre: "Felipe", edad: 204, perros: 0 },
  { nombre: "Hector", edad: 204, perros: 1 },
];

function App() {
  const [contenidoClase, setContenidoClase] = useState("Propiedad");
  const [contenidoFuncion, setContenidoFuncion] = useState("Propiedad");
  const [personas, setPersonas] = useState(arregloPersonas);

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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ListaPersonasClase personas={personas} setPersonas={setPersonas} />
        <ListaPersonasFuncion personas={personas} />
      </div>
    </>
  );
}

export default App;
