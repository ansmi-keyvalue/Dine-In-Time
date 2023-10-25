import HamburgerMenu from '../assets/svg/hamburger-menu.svg';

export default function Header(props: { title?: string; headerRight?: JSX.Element }) {
  return (
    <header className='justify-between h-200 items-center self-center flex w-full  max-md:max-w-full max-md:flex-wrap px-3 md:px-8 sticky top-0 z-10 py-6'>
      <div className='flex gap-2 items-center'>
        <button className='md:hidden ml-4'>
          <img src={HamburgerMenu} className='h-8' alt='hamburger-menu' />
        </button>
        <div className='flex max-sm:flex-1 max-sm:justify-center'>
          <h1 className='text-5xl self-center my-auto max-md:text-4xl' aria-label='Pizza'>
            🍕
          </h1>
          <h2 className='text-zinc-900 text-2xl font-semibold self-center w-[146px] my-auto'>
            {props.title || 'DineInTime'}
          </h2>
        </div>
      </div>
      <div className='flex max-sm:flex-1 max-sm:justify-center max-md:hidden'>{props.headerRight}</div>
    </header>
  );
}
