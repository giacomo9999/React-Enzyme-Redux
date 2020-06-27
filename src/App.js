import React, { Component } from "react";
import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";

class App extends Component {
  state = {
    guessedWords: [
      { guessedWord: "train", letterMatchCount: 3 },
      { guessedWord: "agile", letterMatchCount: 1 },
      { guessedWord: "party", letterMatchCount: 5 },
    ],
  };
  render() {
    return (
      <div className="container-outer" data-test="component-app">
        <h1>JOTTO</h1>
        <Congrats success={true} />
        <GuessedWords guessedWords={this.state.guessedWords} />
      </div>
    );
  }
}

export default App;
