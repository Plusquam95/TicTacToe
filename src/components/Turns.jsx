import { Square } from "./Square";
import { TURNS } from "../constansts";
export function Turns({ turn }) {
  return (
    <section className="turns">
      <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
      <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
    </section>
  );
}
