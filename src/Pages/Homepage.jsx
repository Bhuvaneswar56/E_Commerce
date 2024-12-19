import React, { useState, useEffect } from 'react';
import { Outlet, useOutlet } from 'react-router-dom';
import Header from '../Components/Header.jsx';
import CategoryNavigation from '../Components/CategoryNavigation.jsx';
import ProductGrid from '../Components/ProductGrid.jsx'
import Footer from '../Components/Footer.jsx';
import E_COMMERCE_INSTANCE from '../Services/api';
import Banner from '../Components/Banner.jsx';
import SearchSection from '../Components/SearchSection.jsx';

function Home_page() {
  const isOutlet = useOutlet();
  const [categoryList, setCategoryList] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  async function getCategoryList() {
    try {
      let res1 = await E_COMMERCE_INSTANCE.get('/products/category-list');
      setCategoryList(res1.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function getAllProducts() {
    try {
      let res2 = await E_COMMERCE_INSTANCE.get('/products');
      setAllProducts(res2.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getCategoryList();
    if (!isOutlet) {
      getAllProducts();
    }
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <Header />
      <div className="container mx-auto">
        <SearchSection />
      </div>
      <Banner />
      <CategoryNavigation />
      <div className="container mx-auto">
        {isOutlet ? (
          <Outlet />
        ) : (
          <ProductGrid products={allProducts?.products} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home_page;