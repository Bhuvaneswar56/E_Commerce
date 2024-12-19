import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header.jsx'

const Home_page = lazy(() => import('./Pages/Homepage.jsx'));
const Product_page = lazy(() => import('./Pages/Productdetailspage.jsx'));
const Search_page = lazy(() => import('./Pages/Searchpage.jsx'))
const Category_page = lazy(() => import('./Pages/Cartspage.jsx'));
const Cart_page = lazy(() => import('./Pages/Cartspage.jsx'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home_page />} />
          <Route path="/product/:productId" element={<Product_page />} />
          <Route path="/search/:searchItem" element={<Search_page />} />
          <Route path="/category/:category" element={<Category_page />} />
          <Route path="/cart" element={<Cart_page />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;