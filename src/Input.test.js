import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { findByAttr, storeFactory } from "../test/testUtils";
import Input from "./Input";

/**
 * @function setup - create shallow wrapper of component to be tested
 * @param {Object} initialState
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("Word has not been guessed", () => {
  test("Renders component without error", () => {});
  test("Renders input box", () => {});
  test("Renders submit button", () => {});
});

describe("Word has  been guessed", () => {
  test("Renders component without error", () => {});
  test("Does not render input box", () => {});
  test("Does not render submit button", () => {});
});
