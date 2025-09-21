import React, { useState } from 'react';
import { CreditCard, Shield, Check, ArrowLeft, Smartphone, Building } from 'lucide-react';

interface CheckoutPageProps {
  onPageChange: (page: string) => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ onPageChange }) => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [travelerData, setTravelerData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    traveler2FirstName: '',
    traveler2LastName: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setTravelerData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePayment = () => {
    onPageChange('success');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  ✓
                </div>
                <span className="ml-2 text-sm text-emerald-600 font-medium">Your selection</span>
              </div>
              <div className="w-20 h-px bg-emerald-600"></div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  2
                </div>
                <span className="ml-2 text-sm text-emerald-600 font-medium">Personal data</span>
              </div>
              <div className="w-20 h-px bg-gray-300"></div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-semibold">
                  3
                </div>
                <span className="ml-2 text-sm text-gray-500 font-medium">Payment</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Account Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-sm">👤</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">Do you have an account?</h2>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <p className="text-emerald-700 font-medium mb-2">Log in and make your reservation faster</p>
                <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                  Log in →
                </button>
              </div>
            </div>

            {/* Traveler Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Details</h2>
              <p className="text-gray-600 mb-8">Include the details as they are shown on your ID/Passport.</p>

              {/* Traveler 1 */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Traveler 1</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      value={travelerData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="Enter your First Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      value={travelerData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Enter your Last Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telephone</label>
                    <div className="flex">
                      <select className="px-3 py-3 border border-gray-300 rounded-l-lg bg-gray-50 text-sm">
                        <option>🇮🇳 +91</option>
                      </select>
                      <input
                        type="tel"
                        value={travelerData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                    <input
                      type="email"
                      value={travelerData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your name and surname"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                    />
                  </div>
                </div>
                <label className="flex items-center mt-4 text-sm text-gray-600">
                  <input type="checkbox" className="mr-3 w-4 h-4 text-emerald-600" />
                  Use this data as contact information
                </label>
              </div>

              {/* Traveler 2 */}
              <div className="border-t pt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Traveler 2</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      value={travelerData.traveler2FirstName}
                      onChange={(e) => handleInputChange('traveler2FirstName', e.target.value)}
                      placeholder="Enter your First Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      value={travelerData.traveler2LastName}
                      onChange={(e) => handleInputChange('traveler2LastName', e.target.value)}
                      placeholder="Enter your Last Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Special Questions */}
              <div className="border-t pt-8 mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Any Special Questions</h3>
                <p className="text-gray-600 mb-4">
                  We will do our best to fulfill your requests, but they cannot be guaranteed.
                </p>
                <textarea
                  placeholder="Please specify any special requests or dietary requirements..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Payment Method</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-emerald-300 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="upi"
                    checked={paymentMethod === 'upi'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4 text-emerald-600"
                  />
                  <Smartphone className="w-6 h-6 text-purple-600" />
                  <div className="flex-1">
                    <div className="font-semibold">UPI Payment</div>
                    <div className="text-sm text-gray-600">Pay using Google Pay, PhonePe, Paytm</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-emerald-300 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4 text-emerald-600"
                  />
                  <CreditCard className="w-6 h-6 text-blue-600" />
                  <div className="flex-1">
                    <div className="font-semibold">Credit/Debit Card</div>
                    <div className="text-sm text-gray-600">Visa, MasterCard, RuPay accepted</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-emerald-300 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="netbanking"
                    checked={paymentMethod === 'netbanking'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4 text-emerald-600"
                  />
                  <Building className="w-6 h-6 text-green-600" />
                  <div className="flex-1">
                    <div className="font-semibold">Net Banking</div>
                    <div className="text-sm text-gray-600">All major banks supported</div>
                  </div>
                </div>
              </div>

              {paymentMethod === 'card' && (
                <div className="space-y-4 p-6 bg-gray-50 rounded-lg">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                    />
                  </div>
                </div>
              )}

              <div className="flex items-center gap-2 mt-6 p-4 bg-emerald-50 rounded-lg">
                <Shield className="w-5 h-5 text-emerald-600" />
                <span className="text-sm text-emerald-700">Your payment is secured with SSL encryption</span>
              </div>
            </div>
          </div>

          {/* Booking Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Your Package</h3>
                
                <div className="relative mb-6">
                  <img
                    src="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Goa Package"
                    className="w-full h-32 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <h4 className="font-bold">✈️ Goa: Heritage & Beach</h4>
                    <p className="text-sm">From Maharashtra, India</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">🏨 Category A</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Departure date:</span>
                    <span className="font-semibold">23/11/2023</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Return date:</span>
                    <span className="font-semibold">01/12/2023</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Reservation for:</span>
                    <span className="font-semibold">2 adults</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-6">
                  <div className="text-yellow-500">⭐</div>
                  <span className="font-semibold text-gray-900">Fast-Track Entry</span>
                </div>

                <div className="space-y-3 mb-6">
                  <button
                    onClick={() => onPageChange('itinerary')}
                    className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
                  >
                    Change selection
                  </button>
                  <button
                    onClick={() => onPageChange('itinerary')}
                    className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors ml-6"
                  >
                    View details
                  </button>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-4">Price summary</h4>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span>Base price (2 adults)</span>
                      <span>₹40,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxes & fees</span>
                      <span>₹7,500</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span>-₹5,000</span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total</span>
                      <span className="text-emerald-600">₹47,500</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button
                  onClick={handlePayment}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-5 h-5" />
                  Confirm & Pay ₹47,500
                </button>
                <button
                  onClick={() => onPageChange('itinerary')}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Itinerary
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};