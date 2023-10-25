import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { QuantitySelector, Header, Footer, LayoutWithHeader } from '../components';
import Burger from '../assets/burger.png';

type OrderItem = {
  name: string;
  quantity: number;
  price: number;
};

const initialItems: OrderItem[] = [
  { name: 'McChicken Burger + Fries (M) + Veg Pizza McPuff', quantity: 1, price: 310 },
  { name: 'McSpicy Chicken Burger + Fries (L) + Coke', quantity: 1, price: 430 }
];

export default function Cart() {
  const navigate = useNavigate();

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

  const calculateTotal = (currentItems: OrderItem[]) => {
    const totalItemPrice = currentItems.reduce((a: number, i: OrderItem) => a + i.quantity * i.price, 0);

    setPaymentDetails({ itemTotal: totalItemPrice, total: totalItemPrice + 42, additionalCharge: 42 });
  };

  return (
    <LayoutWithHeader header={<Header />}>
      <>
        <div className='flex flex-col items-center md:flex-row md:w-full md:justify-center md:items-start md:mt-16'>
          <div className='border rounded-md h-fit w-fit m-10 p-3 md:py-10 md:mr-10 md:p-10 md:mt-0'>
            {items?.map((item, index) => (
              <div key={item.name + index} className='flex flex-row mb-3 md:w-5/12 md:mb-8'>
                <img loading='lazy' src={Burger} className='w-16 h-16 rounded-[4px]' alt='Food' />

                <div className='ml-4'>
                  <div className='text-black-400 font-bold text-sm mt-1 md:w-96 '>{item.name}</div>
                  <div className='w-[90px]'>
                    <div className='text-gray-600 font-normal mt-1'>₹{item.quantity * item.price}</div>
                  </div>
                </div>
                <div className='h-[32px] mt-4 md:mt-0'>
                  <QuantitySelector
                    quantity={item.quantity}
                    handleDecrement={() => handleQuantityDecrement(index)}
                    handleIncrement={() => handleQuantityIncrement(index)}
                  />
                </div>
              </div>
            ))}
          </div>
          {/* New Section */}
          <div>
            <div className='border-1 border rounded-md h-fit w-fit mt-5 p-6 md:mt-0 md:p-10'>
              <div className='md:flex md:flex-col md:justify-center'>
                <div className='font-bold mb-5'>Bill Details</div>
                <div className='flex flex-row justify-between mb-2 md:w-[400px]'>
                  <div className='text-gray-400  text-xs'>Item Total</div>
                  <div className='text-gray-400  text-xs font-bold'>₹{paymentDetails.itemTotal}</div>
                </div>
                <div className='flex flex-row justify-between mb-2 md:w-[400px]'>
                  <div className='text-gray-400  text-xs'>Platform Fee</div>
                  <div className='text-gray-400  text-xs font-bold'>₹5</div>
                </div>
                <div className='flex flex-row justify-between mb-2 md:w-[400px]'>
                  <div className='text-gray-400  text-xs'>GST and Restaurant Charges</div>
                  <div className='text-gray-400  text-xs font-bold'>₹37</div>
                </div>
                <div className='border-t border-dotted border-gray-400 mt-5'></div>
                <div className='flex flex-row justify-between mt-5 md:w-[400px]'>
                  <div className='font-extrabold'>Total</div>
                  <div className='font-extrabold'>₹{paymentDetails.total}</div>
                </div>
              </div>
              <button
                className='bg-red-500 flex flex-col w-[100%] px-5 py-3 rounded-[10px] mt-[20px]'
                onClick={() => navigate('/booking-confirmation')}
              >
                <div className='text-white text-md font-semibold self-center -mb-px'>Proceed To Payment</div>
              </button>
            </div>
            {/* New Section */}
            <div className='border-1 border rounded-md h-fit mt-16 p-10 w-[310px] md:w-[480px]'>
              <div className='text-center text-red-400'>Cancellation Policy</div>
              <div className='border-t border-dotted border-red-400'></div>
              <div className='text-xs text-gray-400 mt-2'>
                We apologize, but we do not allow cancellations for food orders once they are placed. Please review your
                order carefully before confirming it to ensure accuracy. If you have any concerns or issues with your
                order, please contact our customer support for assistance. Thank you for your understanding.
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    </LayoutWithHeader>
  );
}
