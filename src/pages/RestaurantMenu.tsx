import { useState } from 'react';

import { Footer, Header, ModalWrapper } from '../components';
import { foodImage, menuCategories, menuCategoriesMap, RestaurantMenuCategories } from '../components/MenuItem.tsx';
import MenuItem from '../components/MenuItem.tsx/MenuItem';
import { IMenuItem } from '../components/MenuItem.tsx/types';
import useFooter from '../hooks/useFooter';
import useHeader from '../hooks/useHeader';

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

const RestaurantMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState<RestaurantMenuCategories>(
    RestaurantMenuCategories.Recommended
  );
  const [isTimeSlotModalOpen, setIsTimeSlotModalOpen] = useState(false);
  const { handleLogin, handleSignUp, handleCartClick } = useHeader();
  const { handlePolicyClick, handlePrivacyClick, handleTermsAndServicesClick } = useFooter();
  const handleAddItem = () => {
    // handle Add item logic
  };

  return (
    <>
      <div className='px-48'>
        <Header handleLogin={handleLogin} handleSignUp={handleSignUp} handleCartClick={handleCartClick} />
        <div className='mt-14 pb-36'>
          <section className='flex flex-col'>
            <h1 className='text-slate-800 text-4xl font-semibold'>Samover</h1>
            <p className='text-zinc-900 text-3xl w-full mt-3 max-md:max-w-full'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since the 1500s, when an unknown printer took a galley Ipsum.
            </p>
            <div className='w-full bg-black h-[2px] mt-4' />
          </section>
          <div className='mt-16 mb-14 flex justify-between items-center'>
            <div className='font-medium text-3xl'>
              Available Dishes at <span className='font-bold'>9:00 AM</span>
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
        <ModalWrapper isOpen={isTimeSlotModalOpen} containerClassName='bg-white p-4'>
          <div className='flex-col '>
            <div className='mb-6'>Available Time slots</div>
            {/* TODO: Complete after finalising time slot logics */}
            <button className='border-2 border-black p-2'>9:00AM</button>
          </div>
        </ModalWrapper>
      </div>
      <Footer
        handlePrivacyClick={handlePrivacyClick}
        handlePolicyClick={handlePolicyClick}
        handleTermsAndServicesClick={handleTermsAndServicesClick}
      />
    </>
  );
};

export default RestaurantMenu;
