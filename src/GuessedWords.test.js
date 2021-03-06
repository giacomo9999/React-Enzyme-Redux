import React from "react";
import { shallow } from "enzyme";

import { findByAttr, checkProps } from "../test/testUtils";
import GuessedWords from "./GuessedWords";

const defaultProps = {
  guessedWords: [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 1 },
    { guessedWord: "party", letterMatchCount: 5 },
  ],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("does not throw warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("if there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test("Renders without error", () => {
    const component = findByAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  test("Renders instructions to guess a word", () => {
    const component = findByAttr(wrapper, "guess-instructions");
    expect(component.text().length).not.toBe(0);
  });
});

describe("if there are some words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup(defaultProps);
  });
  test("Renders without error", () => {
    const component = findByAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  test("Renders 'guessed words' section", () => {
    const guessedWordsNode = findByAttr(wrapper, "guessed-words-list");
    expect(guessedWordsNode.length).not.toBe(0);
  });
  test("Renders correct number of guessed words", () => {
    const guessedWordsNode = findByAttr(wrapper, "guessed-word");
    expect(guessedWordsNode.length).toBe(defaultProps.guessedWords.length);
  });
});
