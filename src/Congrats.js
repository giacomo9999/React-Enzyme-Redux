import React from "react";

/**
 * Congrats function
 * @function
 * @param {Object} props - React props
 * @returns {JSX Element} or null if 'success' prop is false
 */
export default (props) => {
  return props.success ? (
    <div data-test="component-congrats">
      <h1>Congratulations</h1>
    </div>
  ) : (
    <div data-test="component-congrats" />
  );
};
