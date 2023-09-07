import { useState } from "react";
import { Wrapper } from "./components/Wrapper";
import { Logo } from "./components/Logo";
import { Title } from "./components/Title";
import { Credits } from "./components/Credits";
import { Shorter } from "./components/Shorter";

function App() {
  const [appState, setAppState] = useState("home");

  return (
    <Wrapper>
      <Logo />
      <Title />
      {appState === "home" && <Shorter stateSetter={setAppState}></Shorter>}

      <Credits />
    </Wrapper>
  );
}

export default App;
