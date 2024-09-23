import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const XToast = ({ title, description, action, type = 'info', duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(true);
  const [entering, setEntering] = useState(true);

  const typeVariants = {
    success: 'bg-green-500 text-white',
    error: 'bg-[#7f1d1d] text-white',
    warning: 'bg-yellow-500 text-black',
    info: 'bg-blue-500 text-white',
  };

  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        setVisible(false);
        onClose && onClose();
      }, duration);

      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [duration, onClose]);

  useEffect(() => {
    if (visible) {
      setEntering(true);
      const timeout = setTimeout(() => {
        setEntering(false);
      }, 100); // Delay to allow entering animation to play

      return () => clearTimeout(timeout);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-5 right-5 flex items-center justify-between px-7 py-6 rounded-md shadow-lg 
        ${typeVariants[type]} 
        transform transition-all duration-9000 ease-in-out 
        ${entering ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}
    >
      <div className='space-y-1 text-sm text-wrap w-[70%]'>
        <p className='font-medium'>{title}</p>
        <p>{description}</p>
      </div>

      <div className='w-[20%] mr-2'>  
        <button onClick={() => { setVisible(false); onClose && onClose(); }}
            className="bg-transparent text-lg font-medium leading-none outline-none focus:outline-none">
            {action}
        </button>
      </div>  
    </div>
  );
};

XToast.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  action: PropTypes.node,
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  duration: PropTypes.number,
  onClose: PropTypes.func,
};

export default XToast;
