import React, { useState } from 'react';
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX, FiMapPin } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <img 
                src="https://raw.githubusercontent.com/user-attachments/assets/cow-logo.png"
                alt="BiteBack"
                className="h-10 w-10"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div className="hidden text-3xl" style={{display: 'none'}}>🐄</div>
              <h1 className="text-2xl font-bold text-farm-green">
                BITE<span className="text-farm-brown">BACK</span>
              </h1>
            </div>

            <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
              <FiMapPin className="text-farm-green" />
              <span>Delivering to</span>
              <button className="font-semibold text-farm-green hover:underline">
                San Francisco, CA
              </button>
            </div>
          </div>

          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for farms, products, or categories..."
                className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:border-farm-green"
                data-testid="search-bar"
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <a href="#farmers" className="text-gray-700 hover:text-farm-green transition">
                Farmers
              </a>
              <a href="#products" className="text-gray-700 hover:text-farm-green transition">
                Products
              </a>
              <a href="#about" className="text-gray-700 hover:text-farm-green transition">
                About
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-700 hover:text-farm-green transition">
                <FiShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-farm-green text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
              
              <button className="flex items-center space-x-2 px-4 py-2 bg-farm-green text-white rounded-full hover:bg-green-700 transition">
                <FiUser />
                <span>Sign In</span>
              </button>
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="px-4 pb-4">
              <input
                type="text"
                placeholder="Search farms & products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-farm-green"
              />
            </div>
            
            <nav className="flex flex-col space-y-2 px-4">
              <a href="#farmers" className="py-2 text-gray-700 hover:text-farm-green">
                Farmers
              </a>
              <a href="#products" className="py-2 text-gray-700 hover:text-farm-green">
                Products
              </a>
              <a href="#about" className="py-2 text-gray-700 hover:text-farm-green">
                About
              </a>
              <div className="pt-4 flex flex-col space-y-2">
                <button className="w-full py-2 px-4 bg-farm-green text-white rounded-full">
                  Sign In
                </button>
                <button className="w-full py-2 px-4 border border-farm-green text-farm-green rounded-full">
                  View Cart (0)
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;