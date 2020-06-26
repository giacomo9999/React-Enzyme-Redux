import React from "react";
import PropTypes from "prop-types";

const GuessedWords = (props) => {
  let contents;

  props.guessedWords.length === 0
    ? (contents = (
        <span data-test="guess-instructions">Try to guess the word!</span>
      ))
    : (contents = (
        <div data-test="guessed-words-list">
          <ul>
            {props.guessedWords.map((entry, index) => (
              <li key={index} data-test="guessed-word">
                {entry.guessedWord}
              </li>
            ))}
          </ul>
        </div>
      ));

  return <div data-test="component-guessed-words">{contents}</div>;
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;
