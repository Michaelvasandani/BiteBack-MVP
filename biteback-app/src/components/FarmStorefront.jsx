import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiStar, FiMapPin, FiClock, FiMessageCircle, FiPackage } from 'react-icons/fi';
import { farmers } from '../data/mockData';
import ProductCard from './ProductCard';
import NegotiationModal from './NegotiationModal';
import MessageSellerModal from './MessageSellerModal';

const FarmStorefront = () => {
  const { farmId } = useParams();
  const navigate = useNavigate();
  const [showNegotiationModal, setShowNegotiationModal] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const farm = farmers.find(f => f.id === parseInt(farmId));
  
  if (!farm) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Farm not found</h2>
          <button 
            onClick={() => navigate('/')}
            className="text-farm-green hover:underline"
          >
            Return to homepage
          </button>
        </div>
      </div>
    );
  }

  const handleNegotiate = (product) => {
    setSelectedProduct(product);
    setShowNegotiationModal(true);
  };

  const categorizedProducts = farm.products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-600 hover:text-farm-green transition mb-4"
          >
            <FiArrowLeft />
            <span>Back to marketplace</span>
          </button>
        </div>
      </div>

      <div className="relative h-64 md:h-80">
        <img
          src={farm.image}
          alt={farm.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">{farm.name}</h1>
          <div className="flex items-center space-x-4 text-sm md:text-base">
            <div className="flex items-center space-x-1">
              <FiMapPin />
              <span>{farm.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FiStar className="text-yellow-400 fill-current" />
              <span>{farm.rating} ({farm.reviewCount} reviews)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-4">
              <div className="text-center mb-6">
                <div className="w-20 h-20 rounded-full mx-auto mb-3 border-4 border-farm-green/20 bg-farm-green/10 flex items-center justify-center text-3xl">
                  👨‍🌾
                </div>
                <h3 className="text-xl font-bold text-gray-900">{farm.owner}</h3>
                <p className="text-gray-600">Farm Owner</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <FiClock className="text-farm-green" />
                  <span>{farm.responseTime}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <FiPackage className="text-farm-green" />
                  <span>{farm.products.length} products available</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">About this farm</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{farm.bio}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Specialties</h4>
                <div className="flex flex-wrap gap-2">
                  {farm.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-farm-green/10 text-farm-green text-xs rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setShowMessageModal(true)}
                className="w-full py-3 bg-farm-green text-white rounded-lg hover:bg-green-700 transition font-medium flex items-center justify-center space-x-2"
              >
                <FiMessageCircle />
                <span>Message Seller</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Available Products</h2>
              <p className="text-gray-600">Fresh products from {farm.name}</p>
            </div>

            {Object.entries(categorizedProducts).map(([category, products]) => (
              <div key={category} className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onNegotiate={() => handleNegotiate(product)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showNegotiationModal && (
        <NegotiationModal
          product={selectedProduct}
          farm={farm}
          onClose={() => setShowNegotiationModal(false)}
        />
      )}

      {showMessageModal && (
        <MessageSellerModal
          farm={farm}
          onClose={() => setShowMessageModal(false)}
        />
      )}
    </div>
  );
};

export default FarmStorefront;