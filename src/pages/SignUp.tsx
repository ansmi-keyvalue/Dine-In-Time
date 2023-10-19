import { ChangeEvent, useState } from 'react';
import LoginModalLayout from '../components/LoginModalLayout';

interface SignUpType {
  onClose: () => void;
}

export default function SignUp({ onClose }: SignUpType) {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [organization, setOrganization] = useState<string>('');

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

  const renderLogin = () => (
    <div>
      <div className=' text-zinc-900 text-[32px] font-bold'>SignUp</div>
      <div className='mb-6'>
        <span className='text-sm font-semibold '>or </span>
        <span className=' text-red-500 text-sm font-semibold  ' onClick={handleLogin}>
          already have an account
        </span>
      </div>
      <div className=' h-[73px] w-11/12 overflow-hidden bg-white rounded-[10px] border border-neutral-400 px-[30px] py-[18px] flex items-center mb-5'>
        <input
          className='appearance-none focus:outline-none text-zinc-900 text-3xl font-medium  px-2'
          type='text'
          onChange={handleName}
          placeholder='Full name'
        />
      </div>
      <div className=' h-[73px] w-11/12 overflow-hidden bg-white rounded-[10px] border border-neutral-400 px-[30px] py-[18px] flex items-center mb-5'>
        <input
          className='appearance-none focus:outline-none text-zinc-900 text-3xl font-medium  px-2'
          type='email'
          onChange={handleEmail}
          placeholder='Email'
        />
      </div>
      <div className=' h-[73px] w-11/12 overflow-hidden bg-white rounded-[10px] border border-neutral-400 px-[30px] py-[18px] flex items-center mb-5'>
        <input
          className='appearance-none focus:outline-none text-zinc-900 text-3xl font-medium  px-2'
          type='tel'
          onChange={handlePhoneNumber}
          placeholder='+91'
        />
      </div>
      <div className=' h-[73px] w-11/12 overflow-hidden bg-white rounded-[10px] border border-neutral-400 px-[30px] py-[18px] flex items-center mb-5'>
        <input
          className='appearance-none focus:outline-none text-zinc-900 text-3xl font-medium  px-2'
          type='text'
          onChange={handleOrganization}
          placeholder='Organization'
        />
      </div>
      <div
        className='w-11/12 h-[67px] px-[22px] py-[18px] bg-red-500 rounded-[10px] shadow flex items-center justify-center mb-8'
        onClick={onSubmit}
      >
        <div className='w-[385px] h-[35px] text-center text-white text-3xl font-semibold '>Login</div>
      </div>

      <div>
        <span className='text-black text-[15px] font-medium'>By clicking on Login, I accept the </span>
        <span className='text-black text-[15px] font-medium underline'>Terms & Conditions</span>
        <span className='text-black text-[15px] font-medium '> and </span>
        <div className='text-black text-[15px] font-medium underline'>Privacy Policy</div>
      </div>
    </div>
  );

  return <LoginModalLayout onClose={onClose} children={renderLogin()} />;
}
