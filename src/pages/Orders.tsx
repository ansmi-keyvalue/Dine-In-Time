import { useState } from 'react';

import { Footer, Header } from '../components';
import { foodImage } from '../components/MenuItem';
import { IOrderItem } from '../components/MenuItem/types';
import Login from './Login';
import SignUp from './SignUp';

const OrderItems: IOrderItem[] = [
  {
    id: '1',
    imageSrc: foodImage,
    restaurant: 'Hotel Paradise',
    price: '$10',
    location: 'Kakkanad',
    orderTimestamp: '2023-10-01T14:46:22.001Z',
    deliveryTimestamp: '2023-10-01T15:10:22.001Z',
    summary: 'Plain Dosa × 2',
    amount: '₹ 152'
  },
  {
    id: '2',
    imageSrc: foodImage,
    restaurant: 'Hotel Paradise',
    price: '$10',
    location: 'Kakkanad',
    orderTimestamp: '2023-10-01T14:46:22.001Z',
    deliveryTimestamp: '2023-10-01T15:10:22.001Z',
    summary: 'Plain Dosa × 2',
    amount: '₹ 152'
  },
  {
    id: '3',
    imageSrc: foodImage,
    restaurant: 'Hotel Paradise',
    price: '$10',
    location: 'Kakkanad',
    orderTimestamp: '2023-10-01T14:46:22.001Z',
    deliveryTimestamp: '2023-10-01T15:10:22.001Z',
    summary: 'Plain Dosa × 2',
    amount: '₹ 152'
  },
  {
    id: '4',
    imageSrc: foodImage,
    restaurant: 'Hotel Paradise',
    price: '$10',
    location: 'Kakkanad',
    orderTimestamp: '2023-10-01T14:46:22.001Z',
    deliveryTimestamp: '2023-10-01T15:10:22.001Z',
    summary: 'Plain Dosa × 2',
    amount: '₹ 152'
  },
  {
    id: '5',
    imageSrc: foodImage,
    restaurant: 'Hotel Paradise',
    price: '$10',
    location: 'Kakkanad',
    orderTimestamp: '2023-10-01T14:46:22.001Z',
    deliveryTimestamp: '2023-10-01T15:10:22.001Z',
    summary: 'Plain Dosa × 2',
    amount: '₹ 152'
  }
];

const Orders = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };

  const handleLogin = () => {
    document.documentElement.style.overflow = 'hidden';
    setShowLogin(true);
  };

  const onClose = () => {
    document.documentElement.style.overflow = 'auto';
    showLogin && setShowLogin(false);
    showSignUp && setShowSignUp(false);
  };

  const handleSignUp = () => {
    document.documentElement.style.overflow = 'hidden';
    setShowSignUp(true);

    // handle sign up logic here
  };

  const rightHeader = () => {
    return (
      <nav className='flex w-[250px] justify-between gap-5'>
        <button className='text-zinc-900 text-right text-lg font-semibold leading-[175%]' onClick={handleLogin}>
          Login
        </button>
        <div className='bg-red-500 self-stretch flex w-[110px] max-w-full flex-col px-1 py-3 rounded-[8px]'>
          <button
            className='text-white text-center text-md font-semibold leading-[100%] self-center -mb-0.5'
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>
      </nav>
    );
  };

  return (
    <>
      <div className='flex flex-col '>
        <div className='px-16'>
          <Header headerRight={rightHeader()} />
        </div>
        <div className='text-black text-3xl font-semibold px-32 pt-6 pb-8'>Orders</div>
        <div className=' w-2/3 ml-32'>
          {OrderItems.map(
            (
              item // TODO: change this to a separate component
            ) => (
              <div className='border-t p-8  divide-y-2 divide-dotted divide-gray-300' key={item.id}>
                <div className='flex flex-row '>
                  <div className='flex flex-row w-3/5 items-center mb-3'>
                    <img
                      loading='lazy'
                      src={item.imageSrc}
                      className='aspect-[1.25] h-28 w-auto overflow-hidden mr-5'
                      alt='Food Image'
                    />
                    <div>
                      <div className='text-gray-800 text-lg font-semibold hover:text-red-500'>{item.restaurant}</div>
                      <div className=' text-base text-gray-600'>{item.location}</div>
                      <span className=' text-base text-gray-500'>{`ORDER #${item.id} | `}</span>
                      <span className=' text-base text-gray-500'>
                        {new Date(item.orderTimestamp).toLocaleDateString('en-US', options)}
                      </span>
                      <div className=' my-4 text-base font-bold text-red-500 hover:text-gray-800'>VIEW DETAILS</div>
                    </div>
                  </div>
                  <div className='w-2/5'>
                    <div className='text-right text-base text-gray-500 '>
                      {new Date(item.deliveryTimestamp).toLocaleDateString('en-US', options)}
                    </div>
                  </div>
                </div>
                <div className='flex flex-row content-between'>
                  <div className='flex flex-col'>
                    <div className='py-6 text-gray-800 text-lg font-normal'>{item.summary}</div>
                    <div className='flex flex-row'>
                      <button className='h-[40px] w-[120px] mr-5 items-center bg-red-500 text-base font-semibold text-white'>
                        REORDER
                      </button>
                      <button className='h-[40px] w-[120px]  items-center bg-white  border-2 border-red-500 text-base font-semibold text-red-500'>
                        HELP
                      </button>
                    </div>
                  </div>
                  <div className='flex flex-1'>
                    <div className='text-right text-base text-gray-500 flex-1 pt-6'>{`Total paid : ${item.amount}`}</div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <Footer />
      <Login onClose={onClose} show={showLogin} />
      <SignUp onClose={onClose} show={showSignUp} />
    </>
  );
};

export default Orders;
