import React from 'react';
import salesOffer from '../assets/Images/sales offer.jpg'

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-8 mb-4 flex items-center">
      <div className="w-2/3">
        <h2 className="text-3xl font-bold text-white mb-4">Discover our Signature Collection</h2>
        <p className="text-white mb-6">
          Explore our exclusive lineup of premium products handpicked for the discerning customer. From cutting-edge electronics to timeless home decor, each item in our Signature Collection represents the epitome of quality and style.
        </p>
        <a
          href="#"
          className="bg-white text-indigo-500 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Shop the Collection
        </a>
      </div>
      <div className="w-1/3">
        <img
          src={salesOffer}
          alt="Signature Collection"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Banner;