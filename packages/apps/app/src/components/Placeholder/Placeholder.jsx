import React from 'react';
import PropTypes from 'prop-types';

const Placeholder = ({ text, color, disabeld }) => {
  return (
    <div
      style={{
        borderLeft: `solid 8px ${color}`,
        padding: '8px',
        opacity: disabeld ? 0.5 : 1
      }}>
      {text}
    </div>
  );
};

Placeholder.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  disabeld: PropTypes.bool
};

Placeholder.defaultProps = {
  text: '',
  color: 'green',
  disabeld: false
};

export default Placeholder;
