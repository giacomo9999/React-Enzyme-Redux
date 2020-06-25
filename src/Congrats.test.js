import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import { findByAttr, checkProps } from "../test/testUtils";

import Congrats from "./Congrats";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = { success: false };
/**
 * Factory function to create a ShallowWrapper for Congrats component
 * @param {Object} props
 * @param {*} state
 */
const setup = (props = {}, state = null) => {
  const setUpProps = { ...defaultProps, ...props };
  const wrapper = shallow(<Congrats {...setUpProps} />);
  if (state) {
    wrapper.setState({ ...state });
  }
  return wrapper;
};

test("Renders without error", () => {
  expect(
    findByAttr(setup(), "component-congrats").length
  ).toBe(1);
});

test("Renders no text when 'success' prop is false", () => {
  expect(
    findByAttr(setup(), "component-congrats").text()
  ).toBe("");
});

test("Renders non-empty congrats message when 'success' prop is true", () => {
  expect(
    findByAttr(setup({ success: true }), "component-congrats").text()
  ).not.toBe("");
});

test("Does not throw warning wth expected props", () => {
  checkProps(Congrats, { success: false });
});
