import { Square } from "./Square";
export function WinnerModal({ winner, resetGame }) {
  const textomodal = winner === false ? "Hubo un Empate" : "Ganaste";
  if (winner === null) return null;
  return (
    <section className="winnerModal">
      <div className="text">
        <h2>{textomodal}</h2>
        <header>{winner && <Square>{winner}</Square>}</header>
        <footer>
          <button onClick={resetGame}>Volver a empezar</button>
        </footer>
      </div>
    </section>
  );
}
