import { FooterProps } from './types';

export default function Footer({ handlePrivacyClick, handlePolicyClick, handleTermsAndServicesClick }: FooterProps) {
  return (
    <footer className='bg-black flex justify-between p-6 px-10 mt-20'>
      <div className='text-gray-400 font-medium'>© 2023 pizza.All right reserved</div>
      <nav className='flex gap-5 text-gray-400'>
        <button onClick={handlePrivacyClick}>Privacy</button>
        <button onClick={handlePolicyClick}>Policy</button>
        <button onClick={handleTermsAndServicesClick}>Terms & Services</button>
      </nav>
    </footer>
  );
}
