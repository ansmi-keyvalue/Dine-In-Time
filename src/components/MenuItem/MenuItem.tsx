import { IMenuItemProps } from './types';

const MenuItem = ({ item: { id, imageSrc, description, price, title, weight }, onAddItem }: IMenuItemProps) => {
  return (
    <section className='flex flex-col'>
      <div className='self-stretch max-md:max-w-full'>
        <div className='gap-7 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
          <div className='flex flex-col items-stretch w-[200px] max-md:w-full max-md:ml-0'>
            <div className='flex flex-col mt-1 max-md:mt-11'>
              <img
                loading='lazy'
                srcSet={imageSrc}
                className='aspect-[1.28] object-cover object-center w-full overflow-hidden rounded-[3px]'
                alt='Food Image'
              />
            </div>
          </div>
          <div className='flex flex-col items-stretch w-[63%] max-md:w-full max-md:ml-0'>
            <div className='flex grow flex-col max-md:max-w-full max-md:mt-1'>
              <h1 className='text-black text-xl font-semibold'>{title}</h1>
              <h2 className='text-black text-xl font-semibold mt-1'>{price}</h2>
              <p className='text-black text-md  max-w-full mt-1'>Description: {description}</p>
              <div className='text-black text-md opacity-70 mt-1'>{weight}</div>
              <button
                className='bg-red-500 rounded-md p-1 w-[100px] self-start text-white mt-3 font-semibold'
                onClick={() => onAddItem(id)}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuItem;
