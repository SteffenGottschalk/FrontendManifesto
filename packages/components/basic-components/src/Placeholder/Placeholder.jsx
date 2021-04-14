import React from "react";
import PropTypes from "prop-types";

const Placeholder = ({ text, color }) => {
  return (
    <div style={{ color: `${color}` }}>
      ddsfsdfsdf
      {text}
    </div>
  );
};

Placeholder.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

Placeholder.defaultProps = {
  text: "",
  color: "yellow",
};

export default Placeholder;
