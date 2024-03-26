import { useState } from "react";
import "./App.css";
import confetti from "canvas-confetti";
import { TURNS } from "./constansts";
import { checkWinner, checkEnGame } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";
import { Board } from "./components/Board";
import { Turns } from "./components/Turns";

function App() {
  const [board, setboard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  //Ganador o empate Null que no hay ganador false empate
  const [winner, setWinner] = useState(null);

  const updateboard = (index) => {
    // No actualizamos la posición si ya tiene algo
    //
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setboard(newBoard);
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    // revisar si hay un ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();

      setWinner(newWinner);
    } else if (checkEnGame(newBoard)) {
      setWinner(false);
    }
  };
  const resetGame = () => {
    setboard(Array(9).fill(null));
    setWinner(null);
    setTurn(TURNS.X);
  };
  return (
    <>
      <main className="board">
        <Board updateboard={updateboard} board={board} resetGame={resetGame} />
        <Turns turn={turn} />
        <WinnerModal winner={winner} resetGame={resetGame} />
      </main>
    </>
  );
}

export default App;
