import React from 'react';
import { FiArrowRight, FiTruck, FiAward, FiUsers } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-farm-cream to-green-50 overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 bg-farm-green/10 rounded-full">
              <span className="text-sm font-medium text-farm-green">
                🌱 Fresh from local farms
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Farm Fresh,
              <br />
              <span className="text-farm-green">Delivered Daily</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Connect directly with local farmers and get the freshest produce, dairy, and meats delivered straight to your door. Support your community while eating better.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-farm-green text-white font-semibold rounded-full hover:bg-green-700 transition transform hover:scale-105 flex items-center justify-center group">
                Shop Now
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition" />
              </button>
              <button className="px-8 py-3 border-2 border-farm-green text-farm-green font-semibold rounded-full hover:bg-farm-green hover:text-white transition">
                Find Farmers Near You
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-farm-green">150+</div>
                <div className="text-sm text-gray-600">Local Farmers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-farm-green">24hr</div>
                <div className="text-sm text-gray-600">Fresh Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-farm-green">100%</div>
                <div className="text-sm text-gray-600">Organic Options</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800"
                alt="Fresh farm produce"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 flex items-center space-x-3">
                <div className="bg-farm-green/10 p-3 rounded-full">
                  <FiTruck className="text-farm-green text-xl" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Next Day Delivery</div>
                  <div className="text-sm text-gray-600">Order by 8pm</div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 flex items-center space-x-3">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <FiAward className="text-yellow-600 text-xl" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Certified Fresh</div>
                  <div className="text-sm text-gray-600">Quality Guaranteed</div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-farm-green/20 rounded-2xl transform rotate-3"></div>
          </div>
        </div>
      </div>
      
      <div className="bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div className="flex items-center space-x-2">
              <FiUsers className="text-farm-green text-xl" />
              <span className="text-gray-600">
                Trusted by <span className="font-semibold text-gray-900">10,000+</span> happy customers
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/32?img=${i}`}
                    alt={`Customer ${i}`}
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
                <span className="ml-2 text-gray-600 font-medium">4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;