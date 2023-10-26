import { useState, useEffect } from 'react';
import { useLottie } from 'lottie-react';

import { Footer, Header, RestaurantCard, LayoutWithHeader } from '../components';
import PizzaLoader from '../assets/lottie/pizzaLoader.json';
import RestaurantHome from '../assets/png/restaurant_home.png';

import HeaderRight from '../components/HeaderRight/HeaderRight';

const HomePage = () => {
  const options = {
    animationData: PizzaLoader,
    loop: true
  };

  const { View } = useLottie(options);

  const [restaurantName, setRestaurantName] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [isLoadingRestaurants, setIsLoadingRestaurants] = useState(true);

  useEffect(() => {
    fetch('https://dev-5u7m662s3dh14m5.api.raw-labs.com/restaurantsList')
      .then((response) => response.json())
      .then((data) => {
        setRestaurants(data.response);
        setIsLoadingRestaurants(false);
      })
      .catch((err) => {
        setIsLoadingRestaurants(false);
        console.log(err);
      });
  }, []);

  const handleRestaurantNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRestaurantName(event?.target?.value);
  };

  const handleSearch = () => {
    // handle search logic here
  };

  return (
    <LayoutWithHeader header={<Header headerRight={<HeaderRight />} />}>
      <>
        {isLoadingRestaurants && (
          <div className='bg-neutral-100 self-center flex w-full flex-col justify-center items-center absolute'>
            {View}
          </div>
        )}
        <section className='w-full max-md:max-w-full px-9 lg:px-20 pt-14 pb-10'>
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
                <div className='bg-neutral-100 flex md:w-[400px] max-w-full items-start justify-between gap-5 mt-16 pl-5 pr-2 py-2 rounded-[14px] max-md:flex-wrap'>
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
            <div className='flex justify-left item-center w-full max-md:w-full px-9 lg:px-20 pt-10'>
              <img
                loading='lazy'
                src={RestaurantHome}
                className='object-contain overflow-hidden max-w-full mx-20'
                alt='Food'
              />
            </div>
          </div>
        </section>
        <section className='self-center flex w-full flex-col mt-20 max-md:max-w-full px-9 lg:px-20'>
          <div className='items-center self-center w-full flex max-w-full flex-col mb-10'>
            <h1 className='text-center text-4xl font-bold'>
              <span className='font-semibold text-zinc-900 capitalize'>More Than </span>
              <span className='font-bold text-red-500'>1000</span>
              <span className='font-semibold text-zinc-900'> DISHES TO ORDER!</span>
            </h1>
            <p className='text-zinc-900 text-xl self-center mt-2'>Welcome to The Biggest Network of Food Dinein</p>
          </div>
          <div className='flex flex-wrap gap-6'>
            {restaurants?.map((restaurant: { id: string; name: string; description: string; coverImage: string }) => {
              return <RestaurantCard key={restaurant.id} restaurant={restaurant} />;
            })}
          </div>
        </section>
        <Footer />
      </>
    </LayoutWithHeader>
  );
};

export default HomePage;
