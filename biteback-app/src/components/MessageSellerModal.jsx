import React, { useState } from 'react';
import { FiX, FiSend, FiUser } from 'react-icons/fi';

const MessageSellerModal = ({ farm, onClose }) => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
    }, 2000);
  };

  const isValidMessage = subject.trim() && message.trim();

  const commonSubjects = [
    'General Inquiry',
    'Product Availability',
    'Bulk Order Request',
    'Custom Order',
    'Pickup Arrangement',
    'Other'
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">Message Seller</h2>
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
            <p className="text-gray-600">
              Your message has been sent to {farm.owner}. {farm.responseTime.toLowerCase()}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6">
            <div className="flex items-center space-x-4 mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-farm-green/10 rounded-full flex items-center justify-center">
                <FiUser className="text-farm-green text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{farm.owner}</h3>
                <p className="text-sm text-gray-600">{farm.name}</p>
                <p className="text-xs text-gray-500">{farm.responseTime}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Subject
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-farm-green"
                  required
                >
                  <option value="">Select a subject...</option>
                  {commonSubjects.map((subj) => (
                    <option key={subj} value={subj}>{subj}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Related Product (Optional)
                </label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-farm-green"
                >
                  <option value="">No specific product</option>
                  {farm.products.map((product) => (
                    <option key={product.id} value={product.name}>
                      {product.name} - ${product.price.toFixed(2)}/{product.unit}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi! I'm interested in learning more about your products..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-farm-green"
                  rows="6"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  {message.length}/500 characters
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">💡 Tips for messaging sellers:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Be specific about quantities and pickup preferences</li>
                  <li>• Ask about seasonal availability</li>
                  <li>• Mention if you're a regular customer or new to the area</li>
                  <li>• Include your preferred contact method</li>
                </ul>
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
                  disabled={!isValidMessage}
                  className="flex-1 py-3 bg-farm-green text-white rounded-lg hover:bg-green-700 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <FiSend />
                  <span>Send Message</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default MessageSellerModal;