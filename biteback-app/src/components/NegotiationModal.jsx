import React, { useState, useEffect } from 'react';
import { FiX, FiMinus, FiPlus, FiTrendingDown, FiSend } from 'react-icons/fi';

const NegotiationModal = ({ product, farm, onClose }) => {
  const [quantity, setQuantity] = useState(product.minOrder);
  const [offerPrice, setOfferPrice] = useState(product.price);
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const totalListPrice = quantity * product.price;
  const totalOfferPrice = quantity * offerPrice;
  const savings = totalListPrice - totalOfferPrice;
  const discountPercentage = ((savings / totalListPrice) * 100).toFixed(1);

  useEffect(() => {
    setOfferPrice(product.price * 0.9); // Default to 10% discount
  }, [product.price]);

  const handleQuantityChange = (change) => {
    const newQuantity = Math.max(product.minOrder, quantity + change);
    if (newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  const handleOfferPriceChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setOfferPrice(Math.max(0, value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
    }, 2000);
  };

  const isValidOffer = offerPrice > 0 && offerPrice < product.price && quantity >= product.minOrder;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">Make an Offer</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <FiX />
          </button>
        </div>

        {showSuccess ? (
          <div className="p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiSend className="text-green-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Offer Sent!</h3>
            <p className="text-gray-600">
              Your offer has been sent to {farm.owner}. They typically respond within 2 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6">
            <div className="flex items-start space-x-4 mb-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-bold text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{farm.name}</p>
                <p className="text-sm font-semibold text-farm-green">
                  Listed at ${product.price.toFixed(2)} per {product.unit}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Quantity
                </label>
                <div className="flex items-center space-x-4">
                  <button
                    type="button"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= product.minOrder}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FiMinus />
                  </button>
                  <span className="text-xl font-bold w-16 text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= product.stock}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FiPlus />
                  </button>
                  <span className="text-sm text-gray-500">
                    {product.unit}(s)
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Min: {product.minOrder}, Available: {product.stock}
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Offer Price (per {product.unit})
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    $
                  </span>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max={product.price}
                    value={offerPrice}
                    onChange={handleOfferPriceChange}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-farm-green"
                    required
                  />
                </div>
                {savings > 0 && (
                  <div className="flex items-center space-x-2 mt-2 text-sm">
                    <FiTrendingDown className="text-green-600" />
                    <span className="text-green-600 font-medium">
                      {discountPercentage}% discount
                    </span>
                  </div>
                )}
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Listed total:</span>
                  <span className="font-medium">${totalListPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Your offer total:</span>
                  <span className="font-bold text-farm-green">${totalOfferPrice.toFixed(2)}</span>
                </div>
                {savings > 0 && (
                  <div className="flex justify-between items-center border-t pt-2">
                    <span className="text-green-600">You save:</span>
                    <span className="font-bold text-green-600">${savings.toFixed(2)}</span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Message to Seller (Optional)
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi! I'm interested in your product. Would you consider my offer?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-farm-green"
                  rows="3"
                />
              </div>

              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!isValidOffer}
                  className="flex-1 py-3 bg-farm-green text-white rounded-lg hover:bg-green-700 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <FiSend />
                  <span>Send Offer</span>
                </button>
              </div>

              {!isValidOffer && offerPrice >= product.price && (
                <p className="text-sm text-red-600 text-center">
                  Your offer must be lower than the listed price
                </p>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default NegotiationModal;