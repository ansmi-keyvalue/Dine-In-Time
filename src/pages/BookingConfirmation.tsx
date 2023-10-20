import QRCode from 'react-qr-code';

export default function BookingConfirmation() {
  return (
    <main className='bg-white flex flex-col'>
      <header className='justify-between items-start self-center flex w-full max-w-[1420px] gap-2 mt-12 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center'>
        <div className='flex'>
          <h1 className='text-5xl self-center my-auto max-md:text-4xl' aria-label='Pizza'>
            🍕
          </h1>
          <h2 className='text-zinc-900 text-2xl font-semibold self-center w-[146px] my-auto'>DineInTime</h2>
        </div>
      </header>
      <section className='flex flex-col items-stretch w-[47%] ml-5 max-md:w-full p-[100px]  justify-center'>
        <div className='text-black-400 font-bold text-lg mt-1 w-96'>Congrats !!!</div>
        <div className='text-black-400 font-normal text-sm mt-1 w-96'> Your order has been placed</div>

        <div className='text-black-400 font-normal text-sm mt-1 w-96'> Scan the QR code while picking up your order</div>

        <div className='my-5 max-w-[200px] '>
          <QRCode
            size={400}
            style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
            value={'test-qr-code'}
            viewBox={`0 0 256 256`}
          />
        </div>
      </section>
    </main>
  );
}
