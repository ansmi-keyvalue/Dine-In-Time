import { ChangeEvent, useState } from 'react';
import LoginModalLayout from '../components/LoginModalLayout';
import OtpVerify from './OtpVerification';

interface LoginType {
  onClose: () => void;
}

export default function Login({ onClose }: LoginType) {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [verification, setVerification] = useState(false);
  const handleAccountCreation = () => {};

  const handlePhoneInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const onSubmitNumber = () => {
    if (phoneNumber.length === 10) setVerification(true);
  };

  const renderLogin = () => (
    <div>
      <div className=' text-zinc-900 text-[32px] font-bold'>Login</div>
      <div className='mb-6'>
        <span className='text-sm font-semibold '>or </span>
        <span className=' text-red-500 text-sm font-semibold  ' onClick={handleAccountCreation}>
          create an account
        </span>
      </div>
      <div className='h-[73px] w-full sm:w-11/12 overflow-hidden bg-white rounded-[10px] border border-neutral-400 px-[30px] py-[18px] flex items-center mb-5'>
        <span className='text-zinc-900 text-2xl sm:text-3xl font-medium  tracking-tight'>+91</span>
        <input
          className='appearance-none focus:outline-none text-zinc-900 text-2xl sm:text-3xl font-medium  px-2'
          type='tel'
          maxLength={10}
          onChange={handlePhoneInput}
        />
      </div>
      <div
        className='w-full sm:w-11/12 h-[67px] px-[22px] py-[18px] bg-red-500 rounded-[10px] shadow flex items-center justify-center mb-8'
        onClick={onSubmitNumber}
      >
        <div className=' h-[35px] text-center text-white text-2xl sm:text-3xl font-semibold '>Login</div>
      </div>

      <div>
        <span className='text-black text-[15px] font-medium'>By clicking on Login, I accept the </span>
        <span className='text-black text-[15px] font-medium underline'>Terms & Conditions</span>
        <span className='text-black text-[15px] font-medium '> and </span>
        <span className='text-black text-[15px] font-medium underline'>Privacy Policy</span>
      </div>
    </div>
  );

  return verification ? (
    <OtpVerify onClose={onClose} />
  ) : (
    <LoginModalLayout onClose={onClose}>{renderLogin()}</LoginModalLayout>
  );
}
