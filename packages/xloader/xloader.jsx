import React from 'react';
import PropTypes from 'prop-types';

const XLoader = ({ type = 'spinner', size = 'md', color = 'blue', className }) => {
  // Define sizes for the loader
  const sizeVariants = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-10 h-10',
  };

  // Define colors
  const colorVariants = {
    blue: 'text-blue-500',
    red: 'text-red-500',
    green: 'text-green-500',
    gray: 'text-gray-500',
  };

  const spinnerLoader = (
    <div className={`${sizeVariants[size]} ${colorVariants[color]} animate-spin border-4 border-solid border-t-transparent border-r-transparent rounded-full`} />
  );

  const dotsLoader = (
    <div className="flex space-x-2">
      <div className={`w-2 h-2 bg-${color}-500 rounded-full animate-bounce`} />
      <div className={`w-2 h-2 bg-${color}-500 rounded-full animate-bounce delay-200`} />
      <div className={`w-2 h-2 bg-${color}-500 rounded-full animate-bounce delay-400`} />
    </div>
  );

  const barLoader = (
    <div className="relative w-full h-2 bg-gray-300 rounded">
      <div className={`absolute top-0 left-0 h-2 bg-${color}-500 animate-pulse w-1/2`} />
    </div>
  );

  // Loader types switch case
  const renderLoader = () => {
    switch (type) {
      case 'spinner':
        return spinnerLoader;
      case 'dots':
        return dotsLoader;
      case 'bar':
        return barLoader;
      default:
        return spinnerLoader;
    }
  };

  return (
    <div className={`flex justify-center items-center ${className}`}>
      {renderLoader()}
    </div>
  );
};

XLoader.propTypes = {
  type: PropTypes.oneOf(['spinner', 'dots', 'bar']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  color: PropTypes.oneOf(['blue', 'red', 'green', 'gray']),
  className: PropTypes.string,
};

XLoader.defaultProps = {
  type: 'spinner',
  size: 'md',
  color: 'blue',
  className: '',
};

export default XLoader;
