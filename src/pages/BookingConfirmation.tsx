import QRCode from 'react-qr-code';
import { useNavigate } from 'react-router-dom';

import { Header } from '../components';

export default function BookingConfirmation() {
  const navigate = useNavigate();

  const handleMoreFood = () => {
    navigate('/');
  };

  return (
    <main className='bg-white flex flex-col'>
      <Header />
      <section className='relative flex flex-col md:justify-center text-center md:w-[500px] md:m-20 m-5 px-[20px] py-[50px] bg-gray-100 rounded-lg'>
      <div className="w-8 h-8 rounded-full absolute bg-white top-1/2 -left-4 transform -translate-y-1/2"></div>
        <h2 className='text-3xl font-bold text-red-500'>Congrats !!!</h2>
        <div className='text-black-400 font-normal text-[16px] mt-5'> Your order has been placed</div>

        <div className='text-black-400 font-normal text-[14px] mt-2 '>Scan the QR code while picking up your order</div>
        <div className='my-10'>
          <QRCode
            size={400}
            style={{ height: 'auto', maxWidth: '50%', width: '50%', marginLeft: '25%' }}
            value={'test-qr-code'}
            viewBox={`0 0 256 256`}
          />
        </div>
        <div className='bg-red-500  w-9/12 px-5 py-5 rounded-[40px] text-center ml-8 mt-10 md:ml-16'>
          <button className='text-white text-xl font-semibold self-center -mb-px' onClick={handleMoreFood}>
            More Food
          </button>
        </div>
        <div className="w-8 h-8 rounded-full absolute bg-white top-1/2 -right-4 transform -translate-y-1/2"></div>
      </section>
    </main>
  );
}
