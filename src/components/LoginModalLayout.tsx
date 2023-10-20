import { ReactNode } from 'react';
import Close from '../assets/svg/close.svg';
import DeliveryMan from '../assets/svg/deliveryman.svg';

interface LoginModalType {
  onClose: () => void;
  children: ReactNode;
  isSignUp?: boolean;
}

export default function LoginModalLayout({ onClose, children, isSignUp = false }: LoginModalType) {
  return (
    <div className='fixed inset-0 z-50 '>
      <div className='fixed inset-0 opacity-70 bg-zinc-300 transition-opacity'></div>
      <div className='flex flex-row-reverse'>
        <div className='relative z-50 bg-white h-screen lg:w-1/2 px-[5%] md:px-[68px] py-[35px] flex flex-row w-screen'>
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
  );
}
