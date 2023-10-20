import { Routes, Route } from 'react-router-dom';

import { Suspense, lazy } from 'react';

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

const RestaurantMenuPage = lazy(() =>
  import('./pages/RestaurantMenu').then((module) => {
    return { default: module.default };
  })
);

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<div>Loading.....</div>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/restaurants/:id' element={<RestaurantMenuPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
