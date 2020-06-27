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
          <table>
            <thead>
              <tr>
                <th>Guessed Word</th>
              </tr>
              <tr>
                <th>Letters Matching</th>
              </tr>
            </thead>
            {props.guessedWords.map((entry, index) => (
              <tr key={index} data-test="guessed-word">
                <td>{entry.guessedWord}</td>
                <td>{entry.letterMatchCount}</td>
              </tr>
            ))}
          </table>
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
