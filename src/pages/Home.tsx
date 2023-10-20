import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Footer, Header } from '../components';
import RestaurantHome from '../assets/restaurant_home.png';
import Cart from '../assets/cart.svg';

const HomePage = () => {
  const [restaurantName, setRestaurantName] = useState('');
  const navigate = useNavigate();

  const handleRestaurantNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRestaurantName(event?.target?.value);
  };

  const handleSearch = () => {
    // handle search logic here
  };

  const handleLogin = () => {
    // handle login logic here
  };

  const handleSignUp = () => {
    // handle signup logic here
  };

  const handleCartClick = () => {
    navigate('/cart');
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
        <button
          className='text-zinc-900 text-right text-lg font-semibold leading-[175%] ml-2 mr-2'
          onClick={handleCartClick}
        >
          <img loading='lazy' src={Cart} className='w-10 h-10' alt='Food' />
        </button>
      </nav>
    );
  };

  return (
    <div className='flex flex-col h-screen overflow-hidden bg-red-200'>
      <Header headerRight={rightHeader()} />
      <div className='flex flex-col overflow-y-scroll overflow-x-hidden shadow-inner'>
        <section className='w-full max-md:max-w-full  px-20 pt-14 pb-10'>
          <div className='flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
            <div className='flex flex-col items-stretch w-[53%] max-md:w-full'>
              <div className='flex flex-col mt-2 max-md:max-w-full max-md:mt-12 pt-5'>
                <h2 className='text-zinc-900 text-6xl font-bold leading-[108.33%] max-w-[668px] max-md:max-w-full max-md:text-2xl'>
                  Grab Your Favorite Food In Time
                </h2>
                <p className='text-zinc-900 text-xl leading-[166.67%] tracking-tight w-[683px] max-w-full mt-3'>
                  The early access to your favourite food. Why starve when you have us. You hunger partner. Pre-book
                  your food now for avoid the waiting time.
                </p>
                <div className='bg-neutral-100 flex w-[400px] max-w-full items-start justify-between gap-5 mt-16 pl-5 pr-2 py-2 rounded-[14px] max-md:flex-wrap'>
                  <input
                    className='bg-neutral-100 text-base font-medium self-center my-auto w-[60%] p-2 focus:outline-none focus:bg-transparent'
                    type='text'
                    id='name'
                    placeholder='Type restaurant name'
                    value={restaurantName}
                    onChange={handleRestaurantNameChange}
                  />
                  <div className='bg-red-500 flex w-[150px] flex-col -mt-px px-5 py-3 rounded-[8px]'>
                    <button className='text-white text-md font-semibold self-center -mb-px' onClick={handleSearch}>
                      Search Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-left item-center w-full max-md:w-full px-20, pt-10'>
              <img
                loading='lazy'
                src={RestaurantHome}
                className='object-contain overflow-hidden max-w-full mx-20'
                alt='Food'
              />
            </div>
          </div>
        </section>
        <section className='self-center flex w-full flex-col mt-20 max-md:max-w-full'>
          <div className='items-center self-center w-full flex max-w-full flex-col ml-8 px-5 mb-10'>
            <h1 className=' text-red-500 text-center text-4xl font-bold tracking-tight lowercase self-stretch w-full -mr-5 max-md:text-4xl'>
              <span className='font-semibold text-zinc-900 capitalize '>More Than </span>
              <span className='font-bold text-red-500'>1000</span>
              <span className='font-semibold text-zinc-900'> DISHES TO ORDER!</span>
            </h1>
            <p className='text-zinc-900 text-xl leading-[166.67%] tracking-tight self-center mt-5 max-md:max-w-full'>
              Welcome to The Biggest Network of Food Dinein
            </p>
          </div>
          {/* list restaurant cards */}
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
