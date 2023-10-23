export default function Footer() {
  const handlePrivacyClick = () => {
    // handle privacy click logic here
  };

  const handlePolicyClick = () => {
    // handle privacy click logic here
  };

  const handleTermsAndServicesClick = () => {
    // handle privacy click logic here
  };
  return (
    <footer className='bg-black flex justify-between p-6 px-10 mt-20 flex-col sm:flex-row'>
      <div className='text-gray-400 font-medium max-sm:text-center'>© 2023 pizza.All right reserved</div>
      <nav className='flex gap-5 text-gray-400 max-sm:justify-center'>
        <button onClick={handlePrivacyClick}>Privacy</button>
        <button onClick={handlePolicyClick}>Policy</button>
        <button onClick={handleTermsAndServicesClick}>Terms & Services</button>
      </nav>
    </footer>
  );
}
