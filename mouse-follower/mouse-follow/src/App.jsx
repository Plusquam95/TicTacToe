import { useEffect, useState } from "react";
import "./App.css";
import { Nav } from "./componentes/Nav";
function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    // console.log("Este es un efecto", { enabled });
    const handlemove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };
    if (enabled) {
      window.addEventListener("pointermove", handlemove);
    }
    return () => {
      window.removeEventListener("pointermove", handlemove);
    };
  }, [enabled]);

  return (
    <>
      <Nav />
      <div
        className="puntero"
        style={{
          transform: `translate(${position.x}px,${position.y}px)`,
        }}
      ></div>
      <h1>Mouse Follower</h1>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desctivar puntero" : "Activar puntero"}
      </button>
    </>
  );
}

export default App;
