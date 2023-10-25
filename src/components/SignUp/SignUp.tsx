import { ChangeEvent, useState } from 'react';
import LoginModalLayout from '../LoginModalLayout';

interface SignUpType {
  onClose: () => void;
  show: boolean;
}

export default function SignUp({ onClose, show }: SignUpType) {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [organization, setOrganization] = useState<string>('');
  console.log(name, email, phoneNumber, organization);

  const handleLogin = () => {};

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleOrganization = (e: ChangeEvent<HTMLInputElement>) => {
    setOrganization(e.target.value);
  };

  const onSubmit = () => {};

  const renderSignUp = () => (
    <div>
      <div className='text-zinc-900 text-[24px] font-bold'>SignUp</div>
      <div className='mb-6'>
        <span className='text-sm font-semibold '>or </span>
        <span className=' text-red-500 text-sm font-semibold  ' onClick={handleLogin}>
          already have an account
        </span>
      </div>
      <div className='h-[54px] w-full sm:w-11/12 overflow-hidden bg-white rounded-[10px] border border-neutral-400 px-[20px] py-[18px] flex items-center mb-5'>
        <input
          className='appearance-none focus:outline-none text-zinc-900 text-[20px] font-medium'
          type='text'
          onChange={handleName}
          placeholder='Full name'
        />
      </div>
      <div className='h-[54px] w-full sm:w-11/12 overflow-hidden bg-white rounded-[10px] border border-neutral-400 px-[20px] py-[18px] flex items-center mb-5'>
        <input
          className='appearance-none focus:outline-none text-zinc-900 text-[20px] font-medium'
          type='email'
          onChange={handleEmail}
          placeholder='Email'
        />
      </div>
      <div className='h-[54px] w-full sm:w-11/12 overflow-hidden bg-white rounded-[10px] border border-neutral-400 px-[20px] py-[18px] flex items-center mb-5'>
        <input
          className='appearance-none focus:outline-none text-zinc-900 text-[20px] font-medium'
          type='tel'
          onChange={handlePhoneNumber}
          placeholder='+91'
        />
      </div>
      <div className='h-[54px] w-full sm:w-11/12  overflow-hidden bg-white rounded-[10px] border border-neutral-400 px-[20px] py-[18px] flex items-center mb-5'>
        <input
          className='appearance-none focus:outline-none text-zinc-900 text-[20px] font-medium'
          type='text'
          onChange={handleOrganization}
          placeholder='Organization'
        />
      </div>
      <div
        className='w-full sm:w-11/12  h-[54px] px-[22px] py-[18px] bg-red-500 rounded-[10px] shadow flex items-center justify-center mb-2'
        onClick={onSubmit}
      >
        <div className='w-[385px] h-[35px] text-center text-white text-[20px] font-semibold '>Login</div>
      </div>
      <div>
        <span className='text-black text-[14px] font-medium'>By clicking on Login, I accept the </span>
        <span className='text-black text-[14px] font-medium underline'>Terms & Conditions</span>
        <span className='text-black text-[14px] font-medium '> and </span>
        <div className='text-black text-[14px] font-medium underline'>Privacy Policy</div>
      </div>
    </div>
  );

  return (
    <LoginModalLayout onClose={onClose} isSignUp show={show}>
      {renderSignUp()}
    </LoginModalLayout>
  );
}
