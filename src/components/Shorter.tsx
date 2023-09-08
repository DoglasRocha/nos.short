import "./styles.css";
import { Container } from "./Container";
import { type Props } from "./defs";
import { Link } from "./Link";
import LinkSVG from "../assets/Link.svg";
import { useState } from "react";
import { handleLinkSubmission } from "../features/history";

export function Shorter({ stateSetter }: Props) {
  const [userInput, setUserInput] = useState("");
  const [buttonPressed, setButtonPressed] = useState(false);

  return (
    <Container>
      <div className="field">
        <input
          type="text"
          className="input-field"
          placeholder="Insira um link para encurtar..."
          onChange={(e) => setUserInput(e.target.value)}
          disabled={buttonPressed}
        />
        <button
          className="link-button"
          disabled={userInput.length === 0 || buttonPressed}
          onClick={async () => {
            setButtonPressed(true);
            handleLinkSubmission(userInput);
            setTimeout(() => {}, 250);
            stateSetter("viewLink");
          }}
        >
          <img src={LinkSVG} alt="Logo de link" />
        </button>
      </div>
      <Link
        newState={"history"}
        stateSetter={stateSetter}
        text={"Visualizar os últimos links encurtados"}
      />
    </Container>
  );
}
