import { useState } from "react";
import { Wrapper } from "./components/Wrapper";
import { Logo } from "./components/Logo";
import { Title } from "./components/Title";
import { Credits } from "./components/Credits";
import { Shorter } from "./components/Shorter";
import { ViewLink } from "./components/ViewLink";
import { History } from "./components/History";

function App() {
  const [appState, setAppState] = useState("home");

  return (
    <Wrapper>
      <Logo />
      <Title />
      {appState === "home" && <Shorter stateSetter={setAppState} />}
      {appState === "viewLink" && <ViewLink stateSetter={setAppState} />}
      {appState === "history" && <History stateSetter={setAppState} />}
      <Credits />
    </Wrapper>
  );
}

export default App;
