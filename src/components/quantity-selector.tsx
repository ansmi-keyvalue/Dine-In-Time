import React from 'react';

interface QuantitySelectorProps {
  quantity: number;
  handleDecrement: () => void;
  handleIncrement: () => void;
}

export default function QuantitySelector({ quantity, handleDecrement, handleIncrement }: QuantitySelectorProps) {
  return (
    <div className='flex items-center justify-around border-2 w-[80px] bg-red-500 border-red-500 rounded-3xl'>
      <button className='px-2 py-1 bg-white-200 rounded-3xl text-white' onClick={handleDecrement}>
        -
      </button>
      <div className='flex justify-center item-center min-w-[20px] bg-white-200 font-bold text-white'>{quantity}</div>
      <button className='px-2 py-1 bg-white-200 rounded-3xl text-white' onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}
