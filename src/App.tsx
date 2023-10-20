import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
const HomePage = lazy(() => import('./pages/Home').then((module) => ({ default: module.default })));

const CartPage = lazy(() => import('./pages/Cart').then((module) => ({ default: module.default })));

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<div>Loading.....</div>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
