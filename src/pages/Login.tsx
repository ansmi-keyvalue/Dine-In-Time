import { ChangeEvent, useState } from 'react';
import LoginModalLayout from '../components/LoginModalLayout';
import OtpVerify from './OtpVerification';

interface LoginType {
  onClose: () => void;
  show: boolean;
}

export default function Login({ onClose, show }: LoginType) {
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
      <div className=' text-zinc-900 text-[24px] font-bold'>Login</div>
      <div className='mb-6'>
        <span className='text-sm font-semibold '>or </span>
        <span className=' text-red-500 text-sm font-semibold  ' onClick={handleAccountCreation}>
          create an account
        </span>
      </div>
      <div className='h-[54px] w-full sm:w-11/12 overflow-hidden bg-white rounded-[10px] border border-neutral-400 px-[10px] py-[10px] flex items-center mb-5'>
        <span className='text-zinc-900 text-[24px] font-medium  tracking-tight'>+91</span>
        <input
          className='appearance-none focus:outline-none text-zinc-900 text-[24px] font-medium  px-1'
          type='tel'
          maxLength={10}
          onChange={handlePhoneInput}
        />
      </div>
      <div
        className='text-white text-[20px] font-semibold w-full sm:w-11/12 h-[54px] px-[15px] py-[18px] bg-red-500 rounded-[10px] shadow flex items-center justify-center mb-8'
        onClick={onSubmitNumber}
      >
        Login
      </div>

      <span className='text-black text-[14px] font-medium'>By clicking on Login, I accept the </span>
      <span className='text-black text-[14px] font-medium underline'>Terms & Conditions</span>
      <span className='text-black text-[14px] font-medium '> and </span>
      <span className='text-black text-[14px] font-medium underline'>Privacy Policy</span>
    </div>
  );

  return verification ? (
    <OtpVerify onClose={onClose} show={show} />
  ) : (
    <LoginModalLayout onClose={onClose} show={show}>
      {renderLogin()}
    </LoginModalLayout>
  );
}
