import React from 'react';
import PropTypes from 'prop-types';

const XButton = ({ children, onClick, variant = 'primary', className  }) => {
  const baseStyle = 'px-6 py-2 rounded-lg text-md focus:outline-none transition duration-300 ease-in-out';
  const variants = {
    primary: 'bg-[#1d4ed8] text-white hover:bg-[#002dab]',
    secondary: 'bg-gray-500 text-white hover:bg-gray-700',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

XButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

export default XButton;
