export default function Header(props: { title?: string; headerRight?: any }) {
  return (
    <header className='justify-between h-200 items-center self-center flex w-full  max-md:max-w-full max-md:flex-wrap max-md:justify-center px-8 sticky top-0 z-10 py-6'>
      <div className='flex'>
        <h1 className='text-5xl self-center my-auto max-md:text-4xl' aria-label='Pizza'>
          🍕
        </h1>
        <h2 className='text-zinc-900 text-2xl font-semibold self-center w-[146px] my-auto'>
          {props.title || 'DineInTime'}
        </h2>
      </div>
      {props.headerRight}
    </header>
  );
}
