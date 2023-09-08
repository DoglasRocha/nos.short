import "./styles.css";
import { Container } from "./Container";
import { type Props } from "./defs";
import { Link } from "./Link";
import { ClipElement } from "./ClipElement";
import { getLastLinkFromLocalStorage } from "../features/history";

export function ViewLink({ stateSetter }: Props) {
  return (
    <Container>
      <ClipElement last={true} link={getLastLinkFromLocalStorage()} />
      <Link
        newState={"home"}
        stateSetter={stateSetter}
        text={"Voltar para encurtar mais links"}
      />
      <Link
        newState={"history"}
        stateSetter={stateSetter}
        text={"Visualizar os últimos links encurtados"}
      />
    </Container>
  );
}
