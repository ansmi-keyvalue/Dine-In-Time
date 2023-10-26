import { useState } from 'react';

import HamburgerMenu from '../assets/svg/hamburger-menu.svg';
import { useNavigate } from 'react-router-dom';
import SideBar from './SideBar.tsx/SideBar';

export default function Header(props: { title?: string; headerRight?: JSX.Element }) {
  const navigate = useNavigate();
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <header className='justify-between h-200 items-center self-center flex w-full  max-md:max-w-full max-md:flex-wrap px-3 md:px-8 py-6'>
      <div className='flex max-sm:flex-1'>
        <button className='md:hidden ml-4 mr-4' onClick={() => setShowSideBar(true)}>
          <img src={HamburgerMenu} className='h-8' alt='hamburger-menu' />
        </button>
        <button
          className='text-5xl self-center my-auto max-md:text-4xl'
          aria-label='Pizza'
          onClick={() => navigate('/')}
        >
          🍕
        </button>
        <h2 className='text-zinc-900 text-2xl font-semibold self-center w-[146px] my-auto'>
          {props.title || 'DineInTime'}
        </h2>
      </div>
      <div className='flex max-sm:flex-1 max-sm:justify-center max-md:hidden'>{props.headerRight}</div>
      <div className='md:hidden'>
        <SideBar onCloseIconPress={() => setShowSideBar(false)} show={showSideBar} />
      </div>
    </header>
  );
}
