import { Fragment, useState } from 'react';
import { Transition } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';

import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import Close from '../../assets/svg/close.svg';

export interface SideBarType {
  onCloseIconPress: () => void;
  show: boolean;
  showCartButton?: boolean;
  showLoginButton?: boolean;
  showSignupButton?: boolean;
}

export default function SideBar({
  onCloseIconPress,
  show,
  showCartButton = true,
  showLoginButton = true,
  showSignupButton = true
}: SideBarType) {
  console.log(show);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = () => {
    onCloseIconPress?.();
    document.documentElement.style.overflow = 'hidden';
    setShowSignUp(true);
  };

  const handleLogin = () => {
    onCloseIconPress?.();
    document.documentElement.style.overflow = 'hidden';
    setShowLogin(true);
  };

  const handleCartClick = () => {
    onCloseIconPress?.();
    navigate('/cart');
  };

  const onClose = () => {
    document.documentElement.style.overflow = 'auto';
    showLogin && setShowLogin(false);
    showSignUp && setShowSignUp(false);
  };

  return (
    <>
      <Transition.Root show={show}>
        <Transition.Child
          as={Fragment}
          enter='transform transition ease-in-out duration-500'
          enterFrom='translate-x-[-70%]'
          enterTo='translate-x-0'
          leave='transform transition ease-in-out duration-500 delay-100'
          leaveFrom='translate-x-0'
          leaveTo='translate-x-[-70%]'
        >
          <div className='fixed inset-0 overflow-hidden z-50'>
            <div className='overflow-hidden'>
              <div className='z-50 bg-white h-screen px-[5%] md:px-[68px] py-[35px] flex flex-row w-[40%]'>
                <div className='sm:w-2/3 sm:mr-10 w-full'>
                  <button className='mb-8' onClick={onCloseIconPress}>
                    <img src={Close} alt='close' />
                  </button>
                  <nav className='flex w-[250px] flex-col justify-between gap-5'>
                    {showLoginButton && (
                      <button
                        className='text-zinc-900 text-left text-lg font-semibold leading-[175%]'
                        onClick={handleLogin}
                      >
                        Login
                      </button>
                    )}
                    {showSignupButton && (
                      <button
                        onClick={handleSignUp}
                        className='text-zinc-900 text-left text-lg font-semibold leading-[175%]'
                      >
                        Sign Up
                      </button>
                    )}
                    {showCartButton && (
                      <button
                        className='text-zinc-900 text-left text-lg font-semibold leading-[175%]'
                        onClick={handleCartClick}
                      >
                        Cart
                      </button>
                    )}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </Transition.Child>
        <Transition.Child
          enter='transition-opacity ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 opacity-70 bg-zinc-300 transition-opacity z-30' />
        </Transition.Child>
      </Transition.Root>
      <Login onClose={onClose} show={showLogin} />
      <SignUp onClose={onClose} show={showSignUp} />
    </>
  );
}
