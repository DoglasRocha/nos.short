import "./styles.css";
import { type Props } from "./defs";

export function Container({ children }: Props) {
  return <section className="container">{children}</section>;
}
