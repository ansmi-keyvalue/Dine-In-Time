import { useState } from 'react';

import { Footer, Header, ModalWrapper } from '../components';
import { foodImage, menuCategories, menuCategoriesMap, RestaurantMenuCategories } from '../components/MenuItem';
import MenuItem from '../components/MenuItem/MenuItem';
import { IMenuItem } from '../components/MenuItem/types';
import Login from './Login';
import SignUp from './SignUp';

const menuItems: IMenuItem[] = [
  {
    id: '1',
    imageSrc: foodImage,
    title: 'Pizza',
    price: '$10',
    description: 'Delicious pizza with various toppings.',
    weight: '400gm'
  },
  {
    id: '2',
    imageSrc: foodImage,
    title: 'Burger',
    price: '$5',
    description: 'A classic burger with fries.',
    weight: '250gm'
  },
  {
    id: '3',
    imageSrc: foodImage,
    title: 'Sushi',
    price: '$15',
    description: 'Fresh sushi rolls with wasabi and soy sauce.',
    weight: '350gm'
  },
  {
    id: '4',
    imageSrc: foodImage,
    title: 'Pasta',
    price: '$8',
    description: 'Homemade pasta with tomato sauce and parmesan cheese.',
    weight: '300gm'
  },
  {
    id: '5',
    imageSrc: foodImage,
    title: 'Salad',
    price: '$6',
    description: 'A healthy mix of fresh vegetables and dressing.',
    weight: '200gm'
  }
];

const timeSlots = [
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '12:30 PM',
  '01:00 PM',
  '01:30 PM',
  '02:00 PM',
  '02:30 PM',
  '03:00 PM',
  '03:30 PM',
  '04:00 PM',
  '04:30 PM',
  '05:00 PM',
  '05:30 PM',
  '06:00 PM',
  '06:30 PM'
];

const RestaurantMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState<RestaurantMenuCategories>(
    RestaurantMenuCategories.Recommended
  );
  const [isTimeSlotModalOpen, setIsTimeSlotModalOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const handleAddItem = () => {
    // handle Add item logic
  };

  const handleModalClose = () => {
    setIsTimeSlotModalOpen(false);
  };

  const handleTimeSelection = (time: string) => {
    setSelectedTime(time);
    handleModalClose();
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
      <div className='flex flex-col h-screen overflow-hidden'>
        <div className='px-16'>
          <Header headerRight={rightHeader()} />
        </div>
        <div className='overflow-x-hidden overflow-y-scroll px-28 shadow-inner'>
          <section className='flex flex-col mt-6'>
            <h1 className='text-slate-800 text-4xl font-semibold'>Samover</h1>
            <p className='text-zinc-900 text-3xl w-full mt-3 max-md:max-w-full'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since the 1500s, when an unknown printer took a galley Ipsum.
            </p>
            <div className='w-full bg-black h-[2px] mt-4' />
          </section>
          <div className='mt-16 mb-14 flex justify-between items-center'>
            <div className='font-medium text-3xl'>
              Available Dishes at <span className='font-bold'>{selectedTime}</span>
            </div>
            <button
              className='bg-red-500 rounded-md p-3 text-white font-bold'
              onClick={() => setIsTimeSlotModalOpen((val) => !val)}
            >
              Change time slot
            </button>
          </div>
          <div className='flex mt-10 gap-2'>
            <div>
              <div className='flex flex-col gap-3'>
                {menuCategories.map((item) => (
                  <button
                    key={item}
                    className={`flex text-black text-3xl font-semibold ${
                      selectedCategory === item ? 'text-orange-600' : ''
                    }`}
                    onClick={() => setSelectedCategory(item as RestaurantMenuCategories)}
                  >
                    {menuCategoriesMap[item as RestaurantMenuCategories].name}
                  </button>
                ))}
              </div>
            </div>
            <div className='flex flex-col px-5'></div>
            <div className='w-[1px] bg-black mr-5' />
            <div className='flex flex-col gap-8 flex-[4] pb-16'>
              {menuItems.map((item) => (
                <MenuItem key={item.id} item={item} onAddItem={handleAddItem} />
              ))}
            </div>
          </div>
        </div>
        <ModalWrapper
          isOpen={isTimeSlotModalOpen}
          containerClassName='bg-white p-6 w-[35%]'
          handleModalClose={handleModalClose}
        >
          <div className='flex items-center'>
            <div className='flex flex-col'>
              <div className='mb-6 font-semibold text-xl'>Available Time slots</div>
              <div className='flex flex-wrap gap-2'>
                {/* TODO: Change font color based on appropriate logic */}
                {timeSlots.map((time, key) => (
                  <button
                    className='border-2 border-black p-2 rounded-md'
                    key={key}
                    onClick={() => handleTimeSelection(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
            {/* TODO: Replace with SVG */}
            <button onClick={handleModalClose} className='font-semibold text-2xl self-start'>
              X
            </button>
          </div>
        </ModalWrapper>
      </div>

      <Footer />
      <Login onClose={onClose} show={showLogin} />
      <SignUp onClose={onClose} show={showSignUp} />
    </>
  );
};

export default RestaurantMenu;
