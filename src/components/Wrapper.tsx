import "./styles.css";
import { type Props } from "./defs";

export function Wrapper({ children }: Props) {
  return <main className="wrapper">{children}</main>;
}
