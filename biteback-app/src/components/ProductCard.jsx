import React from 'react';
import { FiPackage, FiDollarSign } from 'react-icons/fi';

const ProductCard = ({ product, onNegotiate }) => {
  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  const getStockStatus = (stock) => {
    if (stock === 0) return { text: 'Out of Stock', color: 'text-red-600', bg: 'bg-red-50' };
    if (stock <= 5) return { text: `Only ${stock} left`, color: 'text-orange-600', bg: 'bg-orange-50' };
    return { text: 'In Stock', color: 'text-green-600', bg: 'bg-green-50' };
  };

  const stockStatus = getStockStatus(product.stock);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${stockStatus.bg} ${stockStatus.color}`}>
          {stockStatus.text}
        </div>
        {!product.available && (
          <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
            <span className="bg-white px-4 py-2 rounded-full text-gray-900 font-semibold">
              Currently Unavailable
            </span>
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-gray-900 group-hover:text-farm-green transition">
            {product.name}
          </h3>
          <div className="text-right">
            <div className="text-xl font-bold text-farm-green">
              {formatPrice(product.price)}
            </div>
            <div className="text-sm text-gray-500">per {product.unit}</div>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-1">
            <FiPackage />
            <span>Min order: {product.minOrder} {product.unit}</span>
          </div>
          <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
            {product.category}
          </span>
        </div>

        <div className="space-y-2">
          {product.available && product.stock > 0 ? (
            <>
              <button
                onClick={() => onNegotiate(product)}
                className="w-full py-2 bg-farm-green text-white rounded-lg hover:bg-green-700 transition font-medium flex items-center justify-center space-x-2"
              >
                <FiDollarSign />
                <span>Make an Offer</span>
              </button>
              <button className="w-full py-2 border-2 border-farm-green text-farm-green rounded-lg hover:bg-farm-green hover:text-white transition font-medium">
                Buy at Listed Price
              </button>
            </>
          ) : (
            <button
              disabled
              className="w-full py-2 bg-gray-300 text-gray-500 rounded-lg font-medium cursor-not-allowed"
            >
              {product.stock === 0 ? 'Out of Stock' : 'Unavailable'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;