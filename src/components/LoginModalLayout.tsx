import Close from '../assets/svg/close.svg';
import DeliveryMan from '../assets/svg/deliveryman.svg';

interface LoginModalType {
  onClose: () => void;
  children: JSX.Element;
}

export default function LoginModalLayout({ onClose, children }: LoginModalType) {
  return (
    <div className='fixed inset-0 z-50'>
      <div className='fixed inset-0 opacity-70 bg-zinc-300 transition-opacity'></div>
      <div className='flex'>
        <div className='relative z-50 h-screen w-1/2 '></div>
        <div className='relative z-50 bg-white h-screen w-1/2 px-[68px] py-[35px] flex flex-row'>
          <div className='w-2/3 mr-10 '>
            <button className='mb-8' onClick={onClose}>
              <img src={Close} alt='close' />
            </button>
            {children}
          </div>

          <div className='w-2/3 h-3/5 flex justify-center items-center'>
            <img src={DeliveryMan} alt='coutry-code' />
          </div>
        </div>
      </div>
    </div>
  );
}
