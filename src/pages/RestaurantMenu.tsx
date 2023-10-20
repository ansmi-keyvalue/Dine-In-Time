import { useState } from 'react';

import { menuItems } from '.';
import { Footer, Header } from '../components';
import { menuCategories, menuCategoriesMap, RestaurantMenuCategories } from '../components/MenuItem.tsx';
import MenuItem from '../components/MenuItem.tsx/MenuItem';
import useFooter from '../hooks/useFooter';
import useLogin from '../hooks/useHeader';

export default function RestaurantMenu() {
  const [selectedCategory, setSelectedCategory] = useState<RestaurantMenuCategories>(
    RestaurantMenuCategories.Recommended
  );
  const { handleLogin, handleSignUp, handleCartClick } = useLogin();
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
          <div className='flex mt-10 gap-2'>
            <div>
              <div className='text-3xl font-semibold flex-[1]'>Items</div>
              <div className='flex flex-col mt-10 ml-10 gap-3'>
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
            <div className='w-[1px] bg-black mr-5 mt-20' />
            <div className='flex flex-col gap-8 flex-[4] mt-20 pb-16'>
              {menuItems.map((item) => (
                <MenuItem key={item.id} item={item} onAddItem={handleAddItem} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer
        handlePrivacyClick={handlePrivacyClick}
        handlePolicyClick={handlePolicyClick}
        handleTermsAndServicesClick={handleTermsAndServicesClick}
      />
    </>
  );
}
