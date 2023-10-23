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
      <section className='flex flex-col md:justify-center text-center md:w-[500px] md:m-20 m-5 p-[20px]'>
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
        <div className='bg-red-500  w-[350px] px-5 py-5 rounded-[10px] mt-10 md:ml-16'>
          <button className='text-white text-xl font-semibold self-center -mb-px' onClick={handleMoreFood}>
            More Food
          </button>
        </div>
      </section>
    </main>
  );
}
