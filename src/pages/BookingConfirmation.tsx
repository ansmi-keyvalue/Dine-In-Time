import QRCode from 'react-qr-code';
import { useNavigate } from 'react-router-dom';

import { Footer, Header, LayoutWithHeader } from '../components';

export default function BookingConfirmation() {
  const navigate = useNavigate();

  const handleMoreFood = () => {
    navigate('/');
  };

  return (
    <LayoutWithHeader header={<Header />}>
      <>
        <section className='flex justify-center items-center flex-col w-full text-center px-[20px] py-[20px]'>
          <div className='md:m-20 justify-center items-center p-10 bg-gray-100 rounded-lg md:w-[500px]'>
            <h2 className='text-3xl font-bold text-red-500'>Congrats !!!</h2>
            <div className='text-black-400 font-normal text-[16px] mt-5'> Your order has been placed</div>

            <div className='text-black-400 font-normal text-[14px] mt-2 '>
              Scan the QR code while picking up your order
            </div>
            <div className='my-10'>
              <QRCode
                size={400}
                style={{ height: 'auto', maxWidth: '50%', width: '50%', marginLeft: '25%' }}
                value={'test-qr-code'}
                viewBox={`0 0 256 256`}
              />
            </div>
            <button
              className='bg-red-500 text-center w-[300px] h-[60px] text-white text-xl rounded-[20px] font-semibold self-center -mb-px'
              onClick={handleMoreFood}
            >
              More Food
            </button>
            <div className='w-8 h-8 rounded-full absolute bg-white top-1/2 -right-4 transform -translate-y-1/2'></div>
          </div>
        </section>
        <Footer />
      </>
    </LayoutWithHeader>
  );
}
