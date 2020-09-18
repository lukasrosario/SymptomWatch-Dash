import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="shadow-2xl rounded-md bg-white w-full z-10">{children}</div>
  );
};

export default Card;
