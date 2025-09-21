import React from 'react';
import { Sparkles, ArrowRight, Zap, MapPin, Clock, Star } from 'lucide-react';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onPageChange }) => {
  const destinations = [
    {
      name: 'Switzerland',
      image: 'https://images.pexels.com/photos/2259917/pexels-photo-2259917.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Alpine adventures and scenic beauty'
    },
    {
      name: 'Bali',
      image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Tropical paradise and cultural wonders'
    },
    {
      name: 'Bora Bora',
      image: 'https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Turquoise waters and luxury resorts'
    },
    {
      name: 'Hawaii',
      image: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Volcanic landscapes and pristine beaches'
    }
  ];

  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'AI-Powered Planning',
      description: 'Smart algorithms create perfect itineraries tailored to your preferences'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Real-Time Updates',
      description: 'Dynamic adjustments based on weather, crowds, and local events'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Hidden Gems',
      description: 'Discover secret spots and local favorites off the beaten path'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'One-Click Booking',
      description: 'Seamless booking experience for flights, hotels, and activities'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.pexels.com/photos/1840559/pexels-photo-1840559.jpeg?auto=compress&cs=tinysrgb&w=1920')`
          }}
        />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Travel the world, <em className="text-emerald-400">your way</em>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Smart itineraries tailored to your budget, interests, and time — powered by AI and booked in one click
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => onPageChange('planner')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Sparkles className="w-5 h-5" />
              Plan My Trip
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => onPageChange('demo-trips')}
              className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105"
            >
              Explore Demo Trips
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search Form Overlay */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">Destination</label>
                <input
                  type="text"
                  placeholder="Where to?"
                  className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">Duration</label>
                <select className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none">
                  <option>3-5 days</option>
                  <option>1 week</option>
                  <option>2 weeks</option>
                  <option>1 month</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">Budget</label>
                <select className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none">
                  <option>₹20,000 - ₹50,000</option>
                  <option>₹50,000 - ₹100,000</option>
                  <option>₹100,000+</option>
                </select>
              </div>
              <button
                onClick={() => onPageChange('planner')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hot Cities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Hot Cities</h2>
            <div className="flex gap-2">
              <button className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
                <ArrowRight className="w-5 h-5 rotate-180 text-gray-600" />
              </button>
              <button className="p-3 rounded-full bg-emerald-600 shadow-md hover:shadow-lg transition-shadow">
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => onPageChange('demo-trips')}
              >
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{destination.name}</h3>
                    <p className="text-white/80 text-sm">{destination.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose TripAI?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of travel planning with AI-powered recommendations and seamless booking
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => onPageChange('features')}
              >
                <div className="bg-emerald-100 group-hover:bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                  <div className="text-emerald-600 group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-32 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1920')`
        }}
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-5xl font-bold text-white mb-6">
            DO YOU WANT NEW EMOTIONS?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            We can find Best Places For You all over the world You are Few Steps Away!
          </p>
          <button
            onClick={() => onPageChange('planner')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Book With Us Now
          </button>
        </div>
      </section>
    </div>
  );
};