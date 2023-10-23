import React from "react";

interface QuantitySelectorProps {
  quantity: number;
  handleDecrement: () => void;
  handleIncrement: () => void;
}

export default function QuantitySelector({ quantity, handleDecrement, handleIncrement }: QuantitySelectorProps) {
  return (
    <div className='flex items-center border-2 bg-red-500 border-red-500 rounded-3xl'>
      <button className='px-1 py-1 bg-white-200 rounded-3xl text-white hover:bg-red-700' onClick={handleDecrement}>
        -
      </button>
      <div className='px-3 py-0.5 bg-white-200 font-bold text-white'>{quantity}</div>
      <button className='px-1 py-1 bg-white-200 rounded-3xl text-white hover:bg-red-700' onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}
