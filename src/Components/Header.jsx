import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          eCom 
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-gray-200 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-gray-200 transition-colors">
                Products
              </Link>
            </li>
            <li>
              <Link to="/categories" className="hover:text-gray-200 transition-colors">
                Categories
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-gray-200 transition-colors">
                Cart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;