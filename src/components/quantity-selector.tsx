interface QuantitySelectorProps {
  quantity: number;
  handleDecrement: () => void;
  handleIncrement: () => void;
}

export default function QuantitySelector({ quantity, handleDecrement, handleIncrement }:QuantitySelectorProps ) {
  return (
    <div className='flex items-center border-2 border-gray-200 rounded-lg'>
      <button className='px-2 py-1 bg-white-200 rounded-lg text-gray-700 hover:bg-gray-300' onClick={handleDecrement}>
        -
      </button>
      <div className='px-4 py-1 bg-white-200 text-green-600'>{quantity}</div>
      <button className='px-2 py-1 bg-white-200 rounded-lg text-green-700 hover:bg-gray-300' onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}
