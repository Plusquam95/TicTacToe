import { winner_combos } from "../constansts";

export const checkWinner = (boardToCheck) => {
  for (const combo of winner_combos) {
    const [a, b, c] = combo;
    // console.log(boardToCheck);
    // Revisamos todas las combinaciones ganadoras para saber si x u o ganó
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  // Si nadie ganó hay empate
  return null;
};

export const checkEnGame = (newBoard) => {
  return newBoard.every((Square) => Square !== null);
};
