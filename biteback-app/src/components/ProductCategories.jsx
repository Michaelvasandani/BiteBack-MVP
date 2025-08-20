import React from 'react';
import { categories } from '../data/mockData';
import { FiArrowRight } from 'react-icons/fi';

const ProductCategories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Shop by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse fresh produce, dairy, meats, and more from local farms
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-farm-green">
                <div className="relative h-24 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 text-3xl">
                    {category.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-farm-green transition">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {category.count} items
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-green-50 to-farm-cream rounded-2xl p-8 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Weekly Farmers Market
              </h3>
              <p className="text-gray-600 mb-4">
                Shop in-person every Saturday 8am-2pm
              </p>
              <button className="flex items-center space-x-2 text-farm-green font-semibold hover:underline">
                <span>Find Locations</span>
                <FiArrowRight />
              </button>
            </div>
            <div className="text-6xl">🌽</div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Seasonal Favorites
              </h3>
              <p className="text-gray-600 mb-4">
                Fresh picks perfectly in season now
              </p>
              <button className="flex items-center space-x-2 text-orange-600 font-semibold hover:underline">
                <span>Shop Seasonal</span>
                <FiArrowRight />
              </button>
            </div>
            <div className="text-6xl">🎃</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;