import { ShallowWrapper } from "enzyme";

/**
 * Find all the elements in a ShallowWrapper with a particular attribute
 * @param {ShallowWrapper} wrapper
 * @param {string} attr
 * @returns {ShallowWrapper}
 */
export const findByAttr = (wrapper, attr) => {
  //   console.log(wrapper.debug());
  return wrapper.find(`[data-test='${attr}']`);
};
