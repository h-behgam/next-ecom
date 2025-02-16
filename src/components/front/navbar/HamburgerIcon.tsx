import React from 'react';

const HamburgerIcon = ({ isOpen=true }) => {
  return (
    <div className="w-8 h-6 flex flex-col justify-between cursor-pointer">
      <span
        className={`block h-1 bg-gray-700 rounded transition-all duration-300 ${
          isOpen ? 'translate-y-3 rotate-45' : ''
        }`}
      ></span>
      <span
        className={`block h-1 bg-gray-700 rounded transition-all duration-300 ${
          isOpen ? 'opacity-0' : ''
        }`}
      ></span>
      <span
        className={`block h-1 bg-gray-700 rounded transition-all duration-300 ${
          isOpen ? '-translate-y-2 -rotate-45' : ''
        }`}
      ></span>
    </div>
  );
};

export default HamburgerIcon;
