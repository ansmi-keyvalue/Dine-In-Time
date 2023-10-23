import { Fragment, ReactNode } from 'react';
import { Transition } from '@headlessui/react';
import Close from '../assets/svg/close.svg';
import DeliveryMan from '../assets/svg/deliveryman.svg';

interface LoginModalType {
  onClose: () => void;
  children: ReactNode;
  isSignUp?: boolean;
  show: boolean;
}

export default function LoginModalLayout({ onClose, children, show, isSignUp = false }: LoginModalType) {
  return (
    <Transition.Root show={show}>
      <Transition.Child
        enter='transition-opacity ease-in-out duration-500'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity ease-in-out duration-500'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <div className='fixed inset-0 opacity-70 bg-zinc-300 transition-opacity z-30 ' />
      </Transition.Child>

      <Transition.Child
        as={Fragment}
        enter='transform transition ease-in-out duration-500'
        enterFrom='translate-x-full'
        enterTo='translate-x-0'
        leave='transform transition ease-in-out duration-500 delay-100'
        leaveFrom='translate-x-0'
        leaveTo='translate-x-full'
      >
        <div className='fixed inset-0 overflow-hidden z-50'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='flex flex-row-reverse'>
              <div className='relative z-50 bg-white h-screen lg:w-1/2 px-[5%] md:px-[68px] py-[35px] flex flex-row w-screen '>
                <div className='sm:w-2/3 sm:mr-10 w-full'>
                  <button className='mb-8' onClick={onClose}>
                    <img src={Close} alt='close' />
                  </button>
                  {children}
                </div>

                <div className={`w-2/3 ${isSignUp ? 'h-5/6' : 'h-3/5'} sm:flex justify-center items-center hidden `}>
                  <img className='scale-125' src={DeliveryMan} alt='coutry-code' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition.Child>
    </Transition.Root>
  );
}
