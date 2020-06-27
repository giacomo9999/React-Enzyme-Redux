import React from "react";
import GuessedWords from "./GuessedWords";

function App() {
  return (
    <div className="container-outer" data-test="component-app">
      <h1>JOTTO</h1>
      <GuessedWords />
    </div>
  );
}

export default App;
