export const saveGameStorage = ({ tablero, turn }) => {
  // GUARDAR PARTIDA EN LOCAL STORAGE
  window.localStorage.setItem("tablero", JSON.stringify(tablero));
  window.localStorage.setItem("turn", turn);
};

export const resetGameStorage = () => {
  window.localStorage.removeItem("tablero");
  window.localStorage.removeItem("turn");
};
