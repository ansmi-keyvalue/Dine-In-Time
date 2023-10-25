import { useState } from 'react';

import { Footer, Header, ModalWrapper } from '../components';
import { foodImage, menuCategories, menuCategoriesMap, RestaurantMenuCategories } from '../components/MenuItem';
import MenuItem from '../components/MenuItem/MenuItem';
import { IMenuItem } from '../components/MenuItem/types';
import HeaderRight from '../components/HeaderRight/HeaderRight';

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
  '09:00 AM',
  '09:30 AM',
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
  const [selectedTime, setSelectedTime] = useState(timeSlots[0]);
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

  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      <div>
        <Header headerRight={<HeaderRight />} />
      </div>
      <div className='overflow-x-hidden overflow-y-scroll shadow-inner'>
        <div className='px-20'>
          <section className='flex flex-col mt-6'>
            <h1 className='text-slate-800 text-4xl font-semibold'>Samover</h1>
            <p className='text-zinc-900 text-xl w-full mt-3 max-md:max-w-full'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since the 1500s, when an unknown printer took a galley Ipsum.
            </p>
          </section>
          <div className='mt-10 mb-8 flex items-center'>
            <div className='font-medium text-2xl w-[320px]'>
              Available Dishes at <span className='font-bold'>{selectedTime}</span>
            </div>
            <button
              className='bg-red-500 rounded-md px-3 py-2 text-white font-semibold ml-3'
              onClick={() => setIsTimeSlotModalOpen((val) => !val)}
            >
              Change time slot
            </button>
          </div>
          <div className='flex flex-col mt-10 gap-2'>
            <div className='flex flex-row mb-1'>
              {menuCategories.map((item) => (
                <button
                  key={item}
                  className={`flex text-black text-xl pr-[20px] font-semibold ${
                    selectedCategory === item ? 'text-orange-600' : ''
                  }`}
                  onClick={() => setSelectedCategory(item as RestaurantMenuCategories)}
                >
                  {menuCategoriesMap[item as RestaurantMenuCategories].name}
                </button>
              ))}
            </div>
            <div className='w-[100%] h-[0.1px] border mb-5'></div>
            <div className='flex flex-wrap gap-3 pb-16'>
              {menuItems.map((item) => (
                <MenuItem key={item.id} item={item} onAddItem={handleAddItem} />
              ))}
            </div>
          </div>
        </div>
        <ModalWrapper
          isOpen={isTimeSlotModalOpen}
          containerClassName='bg-white p-[20px] w-[600px] justify-center'
          handleModalClose={handleModalClose}
        >
          <div className='flex items-center'>
            <div className='flex flex-col'>
              <div className='mb-6 font-medium text-xl'>Available Time slots</div>
              <div className='flex flex-wrap gap-[10px]'>
                {/* TODO: Change font color based on appropriate logic */}
                {timeSlots.map((time, key) => (
                  <button
                    className='border-[1px] w-[100px] border-black p-[4px] rounded-md'
                    key={key}
                    onClick={() => handleTimeSelection(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
            {/* TODO: Replace with SVG */}
            <button onClick={handleModalClose} className='text-[24px] self-start'>
              X
            </button>
          </div>
        </ModalWrapper>
        <Footer />
      </div>
    </div>
  );
};

export default RestaurantMenu;
