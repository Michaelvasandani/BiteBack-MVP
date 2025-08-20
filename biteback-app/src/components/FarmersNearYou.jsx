import React from 'react';
import { FiMapPin, FiStar, FiChevronRight } from 'react-icons/fi';
import { farmers } from '../data/mockData';

const FarmerCard = ({ farmer }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
      data-testid="farmer-card"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={farmer.image}
          alt={farmer.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
          <FiMapPin className="text-farm-green text-sm" />
          <span className="text-xs font-medium text-gray-700">{farmer.location}</span>
        </div>
        {farmer.popular && (
          <div className="absolute top-3 right-3 bg-farm-green text-white px-3 py-1 rounded-full text-xs font-semibold">
            Popular
          </div>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-lg text-gray-900 group-hover:text-farm-green transition">
              {farmer.name}
            </h3>
            <p className="text-sm text-gray-600">by {farmer.owner}</p>
          </div>
          <div className="flex items-center space-x-1">
            <FiStar className="text-yellow-400 fill-current" />
            <span className="text-sm font-semibold">{farmer.rating}</span>
            <span className="text-xs text-gray-500">({farmer.reviewCount})</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {farmer.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {farmer.specialties.slice(0, 3).map((specialty, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-farm-green/10 text-farm-green text-xs rounded-full font-medium"
            >
              {specialty}
            </span>
          ))}
        </div>
        
        <div className="border-t pt-3">
          <div className="text-sm font-semibold text-gray-700 mb-2">Available Now:</div>
          <div className="space-y-1">
            {farmer.products.slice(0, 2).map((product, index) => (
              <div key={index} className="flex justify-between items-center text-sm">
                <span className="text-gray-600">{product.name}</span>
                <span className={`font-semibold ${product.available ? 'text-farm-green' : 'text-gray-400'}`}>
                  {product.price}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <button className="mt-4 w-full py-2 bg-farm-green text-white rounded-lg hover:bg-green-700 transition font-medium text-sm flex items-center justify-center group">
          View Farm
          <FiChevronRight className="ml-1 group-hover:translate-x-1 transition" />
        </button>
      </div>
    </div>
  );
};

const FarmersNearYou = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Farmers Near You
            </h2>
            <p className="text-gray-600">
              Discover local farms within 10 miles delivering fresh produce daily
            </p>
          </div>
          <button className="hidden md:flex items-center space-x-2 px-4 py-2 border border-farm-green text-farm-green rounded-full hover:bg-farm-green hover:text-white transition">
            <span>View All Farmers</span>
            <FiChevronRight />
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {farmers.slice(0, 3).map((farmer) => (
            <FarmerCard key={farmer.id} farmer={farmer} />
          ))}
        </div>
        
        <div className="md:hidden mt-6">
          <button className="w-full py-3 border border-farm-green text-farm-green rounded-full hover:bg-farm-green hover:text-white transition font-medium">
            View All Farmers
          </button>
        </div>
      </div>
    </section>
  );
};

export default FarmersNearYou;