import React from 'react';

const Header = ({ title }) => {
  return (
    <header className="py-6 bg-gray-800">
      <h1 className='text-center text-6xl font-semibold text-white'>{title}</h1>
    </header>
  );
}

export default Header;