import React from "react";
import PropTypes from "prop-types";

/**
 * Congrats function
 * @function
 * @param {Object} props - React props
 * @returns {JSX Element} or null if 'success' prop is false
 */
const Congrats = (props) => {
  return props.success ? (
    <div data-test="component-congrats">
      <h1>Congratulations</h1>
    </div>
  ) : (
    <div data-test="component-congrats" />
  );
};

Congrats.propTypes = { success: PropTypes.bool.isRequired };

export default Congrats;
