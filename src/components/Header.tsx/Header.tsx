import { HeaderProps } from './types';

export default function Header({ handleLogin, handleSignUp, handleCartClick }: HeaderProps) {
  return (
    <header className='justify-between items-start self-center flex w-full max-w-[1420px] gap-2 mt-12 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center'>
      <div className='flex'>
        <h1 className='text-5xl self-center my-auto max-md:text-4xl' aria-label='Pizza'>
          🍕
        </h1>
        <h2 className='text-zinc-900 text-2xl font-semibold self-center w-[146px] my-auto'>DineInTime</h2>
      </div>
      <nav className='flex w-[215px] justify-between gap-5'>
        <button className='text-zinc-900 text-right text-lg font-semibold leading-[175%]' onClick={handleLogin}>
          Login
        </button>
        <button className='text-zinc-900 text-right text-lg font-semibold leading-[175%]' onClick={handleCartClick}>
          Cart
        </button>
        <div className='bg-red-500 self-stretch flex w-[110px] max-w-full flex-col px-5 py-4 rounded-[41.097px]'>
          <button
            className='text-white text-center text-lg font-semibold leading-[175%] self-center -mb-0.5'
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
}
