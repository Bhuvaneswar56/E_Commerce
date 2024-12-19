import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-6 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="text-2xl font-bold">
            eCom Emporium
          </Link>
          <p className="text-sm">© 2023 eCom Emporium. All rights reserved.</p>
        </div>
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
        <div className="flex items-center space-x-4">
          <Link
            to="#"
            className="bg-white text-blue-500 p-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm6.002 17.126c-.401.572-1.165.806-1.923.401a5.757 5.757 0 01-1.357-.697 11.016 11.016 0 01-2.297-1.845 11.111 11.111 0 01-2.687-3.132c-.401-.697-.165-1.562.436-1.963.534-.377 1.262-.211 1.597.465.214.401.378.844.544 1.246.187.428.09.893-.214 1.214-.293.321-.436.715-.293 1.109a5.114 5.114 0 002.053 2.634 1.785 1.785 0 001.277.244c.544-.117.849-.658.637-1.201-.187-.515-.436-.962-.686-1.429-.187-.401-.09-.893.187-1.214.277-.321.515-.658.715-1.026.293-.606.726-1.073 1.357-1.201.587-.128 1.134.158 1.405.658.321.544.215 1.214-.276 1.63z" />
            </svg>
          </Link>
          <Link
            to="#"
            className="bg-white text-blue-500 p-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm6.002 17.126c-.401.572-1.165.806-1.923.401a5.757 5.757 0 01-1.357-.697 11.016 11.016 0 01-2.297-1.845 11.111 11.111 0 01-2.687-3.132c-.401-.697-.165-1.562.436-1.963.534-.377 1.262-.211 1.597.465.214.401.378.844.544 1.246.187.428.09.893-.214 1.214-.293.321-.436.715-.293 1.109a5.114 5.114 0 002.053 2.634 1.785 1.785 0 001.277.244c.544-.117.849-.658.637-1.201-.187-.515-.436-.962-.686-1.429-.187-.401-.09-.893.187-1.214.277-.321.515-.658.715-1.026.293-.606.726-1.073 1.357-1.201.587-.128 1.134.158 1.405.658.321.544.215 1.214-.276 1.63z" />
            </svg>
          </Link>
          <Link
            to="#"
            className="bg-white text-blue-500 p-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm6.002 17.126c-.401.572-1.165.806-1.923.401a5.757 5.757 0 01-1.357-.697 11.016 11.016 0 01-2.297-1.845 11.111 11.111 0 01-2.687-3.132c-.401-.697-.165-1.562.436-1.963.534-.377 1.262-.211 1.597.465.214.401.378.844.544 1.246.187.428.09.893-.214 1.214-.293.321-.436.715-.293 1.109a5.114 5.114 0 002.053 2.634 1.785 1.785 0 001.277.244c.544-.117.849-.658.637-1.201-.187-.515-.436-.962-.686-1.429-.187-.401-.09-.893.187-1.214.277-.321.515-.658.715-1.026.293-.606.726-1.073 1.357-1.201.587-.128 1.134.158 1.405.658.321.544.215 1.214-.276 1.63z" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;