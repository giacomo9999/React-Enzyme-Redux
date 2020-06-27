import React from "react";
// import { render } from '@testing-library/react';
import { shallow } from "enzyme";
import App from "./App";
import { findByAttr } from "../test/testUtils";

test("renders App component", () => {
  const appComponent = shallow(<App />);
  expect(findByAttr(appComponent, "component-app").length).toBe(1);
});
