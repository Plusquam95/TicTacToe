import { Square } from "./Square";
export function Board({ board, updateboard, resetGame }) {
  return (
    <>
      <section className="titulo-tictac">
        <h1>Tic Tac Toe</h1>
        <button onClick={resetGame}>Empezar de nuevo</button>
      </section>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateboard={updateboard}>
              <p>{board[index]}</p>
            </Square>
          );
        })}
      </section>
    </>
  );
}
