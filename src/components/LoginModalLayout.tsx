import Close from '../assets/svg/close.svg';
import DeliveryMan from '../assets/svg/deliveryman.svg';

interface LoginModalType {
  onClose: () => void;
  children: JSX.Element;
  isSignUp?: boolean;
}

export default function LoginModalLayout({ onClose, children, isSignUp }: LoginModalType) {
  return (
    <div className='fixed inset-0 z-50 '>
      <div className='fixed inset-0 opacity-70 bg-zinc-300 transition-opacity'></div>
      <div className='flex'>
        <div className='relative z-50 h-screen lg:w-1/2 '></div>
        <div className='relative z-50 bg-white h-screen lg:w-1/2 px-[68px] py-[35px] flex flex-row w-screen'>
          <div className='sm:w-2/3 mr-10 '>
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
