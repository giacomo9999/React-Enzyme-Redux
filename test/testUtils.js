import { ShallowWrapper } from "enzyme";
import checkPropTypes from "check-prop-types";

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
