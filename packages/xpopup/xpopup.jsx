// src/components/XPopup.js

import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const XPopup = ({ children, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Filter and assign child components
  const popupButton = children.find((child) => child.type === XPopupButton);
  const popupContent = children.find((child) => child.type === XPopupContent);

  return (
    <>
      {/* Render the XPopupButton */}
      {popupButton && React.cloneElement(popupButton, { openPopup: () => setIsOpen(true) })}

      {/* Render the XPopupContent if popup is open */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg p-5 max-w-md w-full">
            {/* Close button */}
            <button className="absolute top-6 right-6" onClick={() => setIsOpen(false)}>
              <IoClose  className="text-4xl"/>
            </button>

            {/* Render the popup content */}
            {popupContent && React.cloneElement(popupContent, { closePopup: () => setIsOpen(false) })}
          </div>
        </div>
      )}
    </>
  );
};

// Sub-components

const XPopupButton = ({ children, openPopup, className }) => {
  return <div className={`${className}`} onClick={openPopup}>{children}</div>;
};

const XPopupContent = ({ children, className }) => {
  return <div className={`flex flex-col gap-2 ${className}`}>{children}</div>;
};

const XPopupHeader = ({ children, className }) => {
  return <div className={`mb-4 ${className}`}>{children}</div>;
};

const XPopupTitle = ({ children,className }) => {
  return <h2 className={`text-lg text-slate-600 font-bold font-notosans ${className}`}>{children}</h2>;
};

const XPopupDescription = ({ children, className }) => {
  return <p  className={`text-sm text-slate-600 font-notosans ${className}`}>{children}</p>;
};

const XPopupFooter = ({ children, className }) => {
  return <div className={`mt-4 w-full ${className}`}>{children}</div>;
};

// Export all components
export { XPopup, XPopupButton, XPopupContent, XPopupHeader, XPopupTitle, XPopupDescription, XPopupFooter };
