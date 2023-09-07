import "./styles.css";
import { type Props } from "./defs";

export function Link({ text, newState, stateSetter }: Props) {
  return (
    <a onClick={() => stateSetter(newState)} className="view-history">
      {text}
    </a>
  );
}
