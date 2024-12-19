import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import E_COMMERCE_INSTANCE from '../Services/api';

const CategoryNavigation = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      try {
        const response = await E_COMMERCE_INSTANCE.get('/products/category-list');
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getCategories();
  }, []);

  return (
    <div className="bg-gray-100 py-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Shop by Category</h2>
          <div className="flex gap-2">
            <button className="category-prev-btn bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors">
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button className="category-next-btn bg-blue-500 hover:bg-blue-600 p-2 rounded-full transition-colors">
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        <div className="border border-gray-400 rounded-lg p-6">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '.category-prev-btn',
              nextEl: '.category-next-btn',
            }}
            slidesPerView={5}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
            className="category-swiper"
          >
            {categories.map((category) => (
              <SwiperSlide key={category}>
                <Link
                  to={`/category/${category}`}
                  className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center hover:bg-gray-200 transition-colors"
                >
                  <span className="text-center">{category}</span>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CategoryNavigation;