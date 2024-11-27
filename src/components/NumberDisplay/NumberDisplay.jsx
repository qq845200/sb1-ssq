import React from 'react';
import Ball from '../Ball/Ball';

const NumberDisplay = ({ numbers }) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4 justify-items-center items-center p-2 sm:p-4">
      {numbers.red.map((number, index) => (
        <Ball key={`red-${index}`} number={number} type="red" />
      ))}
      <Ball number={numbers.blue} type="blue" />
    </div>
  );
};

export default NumberDisplay;