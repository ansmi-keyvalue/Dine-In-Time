import { ChangeEvent, useState } from 'react';
import LoginModalLayout from '../components/LoginModalLayout';

interface OtpverifyType {
  onClose: () => void;
  show: boolean;
}

export default function OtpVerify({ onClose, show }: OtpverifyType) {
  const [Otp, setOtp] = useState<string>('');
  console.log(Otp);

  const handleOTPEntry = (e: ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  const onVerify = () => {};

  const renderOtpEntry = () => (
    <div>
      <div className=' text-zinc-900 text-[32px] font-bold mb-6'>Verify Phone</div>
      <div className=' h-[73px]w-full sm:w-11/12 overflow-hidden bg-white rounded-[10px] border border-neutral-400 px-[30px] py-[18px] flex items-center mb-5'>
        <input
          className='appearance-none focus:outline-none text-zinc-900 text-2xl sm:text-3xl  font-medium  px-2'
          type='tel'
          placeholder='Enter OTP'
          onChange={handleOTPEntry}
        />
      </div>
      <div
        className='w-full sm:w-11/12 h-[67px] px-[22px] py-[18px] bg-red-500 rounded-[10px] shadow flex items-center justify-center mb-8'
        onClick={onVerify}
      >
        <div className='w-[385px] h-[35px] text-center text-white text-2xl sm:text-3xl font-semibold '>Verify</div>
      </div>

      <div>
        <span className='text-black text-[15px] font-medium'>By clicking on Login, I accept the </span>
        <span className='text-black text-[15px] font-medium underline'>Terms & Conditions</span>
        <span className='text-black text-[15px] font-medium '> and </span>
        <div className='text-black text-[15px] font-medium underline'>Privacy Policy</div>
      </div>
    </div>
  );

  return (
    <LoginModalLayout show={show} onClose={onClose}>
      {renderOtpEntry()}
    </LoginModalLayout>
  );
}
