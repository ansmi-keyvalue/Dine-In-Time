import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Cart from '../../assets/svg/cart.svg';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import { HeaderRightProps } from './types';

const HeaderRight: FC<HeaderRightProps> = ({
  showCartButton = true,
  showLoginButton = true,
  showSignupButton = true
}) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = () => {
    document.documentElement.style.overflow = 'hidden';
    setShowSignUp(true);
  };

  const handleLogin = () => {
    document.documentElement.style.overflow = 'hidden';
    setShowLogin(true);
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  const onClose = () => {
    document.documentElement.style.overflow = 'auto';
    showLogin && setShowLogin(false);
    showSignUp && setShowSignUp(false);
  };

  return (
    <>
      <nav className='flex w-[250px] justify-between gap-5'>
        {showLoginButton && (
          <button className='text-zinc-900 text-right text-lg font-semibold leading-[175%]' onClick={handleLogin}>
            Login
          </button>
        )}
        {showSignupButton && (
          <button
            onClick={handleSignUp}
            className='bg-red-500 self-stretch flex w-[110px] max-w-full flex-col px-1 py-3 rounded-[8px]'
          >
            <div className='text-white text-center text-md font-semibold leading-[100%] self-center -mb-0.5'>
              Sign Up
            </div>
          </button>
        )}
        {showCartButton && (
          <button
            className='text-zinc-900 text-right text-lg font-semibold leading-[175%] ml-2 mr-2'
            onClick={handleCartClick}
          >
            <img loading='lazy' src={Cart} className='w-10 h-10' alt='Food' />
          </button>
        )}
      </nav>
      <Login onClose={onClose} show={showLogin} />
      <SignUp onClose={onClose} show={showSignUp} />
    </>
  );
};

export default HeaderRight;
