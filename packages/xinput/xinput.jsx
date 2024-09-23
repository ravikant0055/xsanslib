import React from 'react';
import PropTypes from 'prop-types';

const XInput = ({ value, onChange, placeholder, type = 'text', variant = 'primary', className }) => {
  const baseStyle = 'w-[290px] px-4 py-2 bg-transparent rounded-lg border border-white/20 focus:outline-none focus:ring';
  const variants = {
    primary: 'focus:border-none focus:ring-2 focus:ring-[#1d4ed8]-100',
    secondary: 'focus:border-none focus:ring-2 focus:ring-gray-400',
  };

  return (
    <input
      type={type}  // Allow passing the type, e.g., "text", "password"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    />
  );
};

XInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,  // Add type prop type validation
  variant: PropTypes.oneOf(['primary', 'secondary']),
  className: PropTypes.string,  // Add className prop type validation
};

XInput.defaultProps = {
  type: 'text',  // Default input type to "text"
  className: '',  // Default className
};

export default XInput;
