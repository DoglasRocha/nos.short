import "./styles.css";
import { Container } from "./Container";
import { type Props } from "./defs";
import { Link } from "./Link";
import { ClipElement } from "./ClipElement";
import { getLinksFromHistory } from "../features/history";

export function History({ stateSetter }: Props) {
  return (
    <Container>
      <div>
        {getLinksFromHistory().map((link) => (
          <ClipElement last={false} link={link} />
        ))}
      </div>

      <Link
        newState={"home"}
        stateSetter={stateSetter}
        text={"Voltar para encurtar mais links"}
      />
    </Container>
  );
}
