import ComponenteClase from "./components/ComponenteClase";
import ComponenteFuncional from "./components/ComponenteFuncional";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <ComponenteClase />
      <ComponenteFuncional />
    </div>
  );
}

export default App;
