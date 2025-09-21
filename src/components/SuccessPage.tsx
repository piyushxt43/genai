import React, { useEffect, useState } from 'react';
import { Check, Calendar, Mail, Phone, Download, Star } from 'lucide-react';

interface SuccessPageProps {
  onPageChange: (page: string) => void;
}

export const SuccessPage: React.FC<SuccessPageProps> = ({ onPageChange }) => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-20 relative overflow-hidden">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-emerald-500 rounded opacity-80 animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Booking Confirmed! 🎉</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your amazing Goa adventure has been successfully booked. Get ready for an unforgettable experience!
          </p>
        </div>

        {/* Booking Details Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Booking Details</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-600">Booking Reference:</span>
                  <span className="font-bold text-emerald-600">TRP-GOA-2024-001</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-emerald-600" />
                  <span className="text-gray-600">Travel Dates:</span>
                  <span className="font-semibold">Nov 23 - Dec 1, 2024</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 text-center text-emerald-600">👥</div>
                  <span className="text-gray-600">Travelers:</span>
                  <span className="font-semibold">2 Adults</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 text-center text-emerald-600">🏨</div>
                  <span className="text-gray-600">Accommodation:</span>
                  <span className="font-semibold">Taj Exotica Resort & Spa</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 text-center text-emerald-600">💳</div>
                  <span className="text-gray-600">Total Paid:</span>
                  <span className="font-bold text-emerald-600 text-lg">₹47,500</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-emerald-600" />
                  <span className="font-semibold text-emerald-700">Fast-Track Entry Included</span>
                </div>
                <p className="text-emerald-600 text-sm">
                  Skip the lines and enjoy priority access to all included attractions!
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Goa Beach"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-bold">Goa Heritage & Beach Experience</h3>
                <p className="text-white/80">Golden beaches, Portuguese heritage & spice adventures</p>
              </div>
            </div>
          </div>
        </div>

        {/* What's Next Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Happens Next?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Confirmation Email</h3>
              <p className="text-gray-600 text-sm">
                You'll receive a detailed confirmation email with your itinerary within 5 minutes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Pre-Trip Call</h3>
              <p className="text-gray-600 text-sm">
                Our travel expert will call you 24 hours before departure with final details.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Travel Documents</h3>
              <p className="text-gray-600 text-sm">
                Download your vouchers and travel guide from your dashboard.
              </p>
            </div>
          </div>
        </div>

        {/* Contact & Support */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white mb-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help? We're Here for You!</h2>
            <p className="text-emerald-100 mb-6">
              Our 24/7 support team is ready to assist you with any questions about your trip.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg">
                <Mail className="w-4 h-4" />
                <span>support@tripai.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => onPageChange('itinerary')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download Itinerary
          </button>
          
          <button
            onClick={() => onPageChange('home')}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
          >
            Plan Another Trip
          </button>
          
          <button
            onClick={() => onPageChange('contact')}
            className="border-2 border-emerald-600 hover:bg-emerald-50 text-emerald-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
          >
            Contact Support
          </button>
        </div>

        {/* Testimonial */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-lg text-gray-700 italic mb-4">
              "TripAI made our Goa trip absolutely perfect! Every detail was taken care of, 
              and we discovered amazing hidden gems we would have never found on our own."
            </blockquote>
            <div className="font-semibold text-gray-900">- Priya & Arjun Sharma</div>
            <div className="text-gray-600 text-sm">Recent TripAI travelers</div>
          </div>
        </div>
      </div>
    </div>
  );
};