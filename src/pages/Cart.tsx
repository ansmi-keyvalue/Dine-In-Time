import { useState } from 'react';
import { QuantitySelector, Header, Footer } from '../components';

const initialItems = [
  { name: '2 McChicken Burger + 2 Fries (M) + Veg Pizza McPuff', quantity: 1, price: 310 },
  { name: '2 McSpicy Chicken Burger + Fries (L) + 2 Coke', quantity: 1, price: 430 }
];

export default function Cart() {
  const [items, setItems] = useState(initialItems);
  const [paymentDetails, setPaymentDetails] = useState({ itemTotal: 740, total: 782, additionalCharge: 42 });

  const updateQuantity = (action: string, index: number) => {
    const newItems = [...items];
    const item = { ...items[index] };

    if (action === '+') item.quantity += 1;
    else item.quantity -= 1;

    newItems[index] = item;
    setItems(newItems);
    calculateTotal(newItems);
  };

  const handleQuantityIncrement = (index: number) => {
    if (items[index].quantity >= 9) return;
    updateQuantity('+', index);
  };

  const handleQuantityDecrement = (index: number) => {
    if (items[index].quantity <= 1) return;
    updateQuantity('-', index);
  };

  const calculateTotal = (currentItems: any) => {
    const totalItemPrice = currentItems.reduce((a: number, i: any) => a + i.quantity * i.price, 0);

    setPaymentDetails({ itemTotal: totalItemPrice, total: totalItemPrice + 42, additionalCharge: 42 });
  };

  return (
    <main className='flex-1'>
      <Header />
      <div className='min-h-screen'>
        <div className='p-20'>
          <div className='font-bold'>Foodis</div>
          {items?.map((item, index) => (
            <div key={item.name + index} className='flex flex-row mb-3'>
              <div className='text-black-400 font-normal text-sm mt-1 w-96'>{item.name}</div>
              <div className='mx-4' />
              <QuantitySelector
                quantity={item.quantity}
                handleDecrement={() => handleQuantityDecrement(index)}
                handleIncrement={() => handleQuantityIncrement(index)}
              />
              <div className='mx-4' />
              <div className='text-gray-600 font-normal mt-1'>₹{item.quantity * item.price}</div>
            </div>
          ))}
        </div>
        <div className='border border-dotted border-gray-400' />
        <div className='p-20 w-1/2'>
          <div className='font-bold mb-5'>Bill Details</div>
          <div className='flex flex-row justify-between mb-2'>
            <div className='text-gray-400  text-xs'>ItemTotal</div>
            <div className='text-gray-400  text-xs font-bold'>₹{paymentDetails.itemTotal}</div>
          </div>
          <div className='flex flex-row justify-between mb-2'>
            <div className='text-gray-400  text-xs'>Platform Fee</div>
            <div className='text-gray-400  text-xs font-bold'>₹5</div>
          </div>
          <div className='flex flex-row justify-between mb-2'>
            <div className='text-gray-400  text-xs'>GST and Restaurant Charges</div>
            <div className='text-gray-400  text-xs font-bold'>₹37</div>
          </div>
          <div className='flex flex-row justify-between mt-5'>
            <div className='font-extrabold'>Total</div>
            <div className='font-extrabold'>₹{paymentDetails.total}</div>
          </div>
        </div>
        <div className='bg-red-500 flex w-[250px] flex-col -mt-px px-5 py-5 rounded-[40px] ml-20'>
          <button className='text-white text-xl font-semibold self-center -mb-px'>Proceed To Payment</button>
        </div>
      </div>
      <Footer />
    </main>
  );
}
