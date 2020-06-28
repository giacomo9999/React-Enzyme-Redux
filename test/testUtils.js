import { ShallowWrapper } from "enzyme";
import checkPropTypes from "check-prop-types";
import { createStore } from "redux";

import rootReducer from "../src/reducers";

/**
 * @function storeFactory - create store for use in testing
 * @param {Object} initialState - initial state
 * @returns {Store} - Redux store
 */
export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
};

/**
 * Find all the elements in a ShallowWrapper with a particular attribute
 * @param {ShallowWrapper} wrapper
 * @param {string} attr
 * @returns {ShallowWrapper}
 */
export const findByAttr = (wrapper, attr) => {
  return wrapper.find(`[data-test='${attr}']`);
};

export const checkProps = (component, conformingProps) => {
  const testedProps = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(testedProps).toBeUndefined();
};
