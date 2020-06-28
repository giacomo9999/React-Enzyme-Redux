import { correctGuess, actionTypes } from "./";

describe("correctGuess", () => {
  test("Returns an action of type 'CORRECT_GUESS'", () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
