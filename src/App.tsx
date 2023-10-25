import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLottie } from 'lottie-react';

import PizzaLoader from '../src/assets/lottie/pizzaLoader.json';

const HomePage = lazy(() =>
  import('./pages/Home').then((module) => {
    return { default: module.default };
  })
);

const CartPage = lazy(() =>
  import('./pages/Cart').then((module) => {
    return { default: module.default };
  })
);

const BookingConfirmationPage = lazy(() =>
  import('./pages/BookingConfirmation').then((module) => {
    return { default: module.default };
  })
);

const RestaurantMenuPage = lazy(() => import('./pages/RestaurantMenu').then((module) => ({ default: module.default })));

const options = {
  animationData: PizzaLoader,
  loop: true
};

function App() {
  const { View } = useLottie(options);
  return (
    <div className='App'>
      <Suspense
        fallback={
          <div className='bg-neutral-100 self-center flex w-full flex-col justify-center items-center absolute'>
            {View}
          </div>
        }
      >
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/booking-confirmation' element={<BookingConfirmationPage />} />
          <Route path='/restaurants/:id' element={<RestaurantMenuPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
