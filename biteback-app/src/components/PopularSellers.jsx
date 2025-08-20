import React from 'react';
import { FiStar, FiTrendingUp, FiAward } from 'react-icons/fi';
import { farmers } from '../data/mockData';

const PopularSellers = () => {
  const popularFarmers = farmers.filter(f => f.popular);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-yellow-100 px-4 py-2 rounded-full mb-4">
            <FiTrendingUp className="text-yellow-600" />
            <span className="text-sm font-semibold text-yellow-800">Trending This Week</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Popular Sellers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Top-rated farmers loved by our community for their quality, service, and fresh produce
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularFarmers.map((farmer, index) => (
            <div key={farmer.id} className="relative group">
              {index === 0 && (
                <div className="absolute -top-3 -right-3 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                    <FiAward />
                    <span>#1 Seller</span>
                  </div>
                </div>
              )}
              
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-farm-green hover:shadow-lg transition-all p-6 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <img
                      src={farmer.image}
                      alt={farmer.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-farm-green text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                      <FiStar className="text-yellow-300 fill-current" />
                      <span>{farmer.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-lg text-gray-900 mb-1">
                    {farmer.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{farmer.owner}</p>
                  
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                    <span className="font-semibold text-farm-green">{farmer.reviewCount}</span>
                    <span>happy customers</span>
                  </div>
                  
                  <div className="space-y-2 w-full mb-4">
                    {farmer.specialties.slice(0, 2).map((specialty, idx) => (
                      <div key={idx} className="text-xs bg-farm-green/10 text-farm-green py-1 px-3 rounded-full">
                        {specialty}
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full py-2 bg-farm-green text-white rounded-lg hover:bg-green-700 transition font-medium text-sm">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-farm-green to-green-600 rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Become a Seller</h3>
              <p className="text-green-100">
                Join our community of local farmers and reach thousands of customers
              </p>
            </div>
            <button className="px-8 py-3 bg-white text-farm-green font-semibold rounded-full hover:bg-gray-100 transition">
              Start Selling
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularSellers;