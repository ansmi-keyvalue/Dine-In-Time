import { useNavigate } from 'react-router-dom';

export default function useHeader() {
  const navigate = useNavigate();
  const handleLogin = () => {
    // handle login logic here
  };
  const handleSignUp = () => {
    // handle login logic here
  };
  const handleCartClick = () => {
    navigate('/cart');
  };

  return {
    handleLogin,
    handleSignUp,
    handleCartClick
  };
}
