import React, { useState } from 'react';
import { MapPin, Calendar, Star, Users, ArrowRight, Clock, DollarSign } from 'lucide-react';

interface DemoTripsPageProps {
  onPageChange: (page: string) => void;
}

export const DemoTripsPage: React.FC<DemoTripsPageProps> = ({ onPageChange }) => {
  const [selectedTrip, setSelectedTrip] = useState<number | null>(null);

  const demoTrips = [
    {
      id: 1,
      title: 'Budget Goa Adventure',
      subtitle: 'Beach Paradise on a Budget',
      image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '4 Days, 3 Nights',
      price: '₹25,000',
      originalPrice: '₹35,000',
      rating: 4.6,
      location: 'Goa, India',
      travelers: '2 Adults',
      description: 'Explore golden beaches, vibrant markets, and authentic Portuguese cuisine without breaking the bank.',
      highlights: [
        'Beachside accommodation in Calangute',
        'Sunset dinner cruise on Mandovi River',
        'Old Goa heritage tour with guide',
        'Spice plantation visit with lunch',
        'Water sports at Baga Beach',
        'Night market shopping in Anjuna'
      ],
      includes: ['Accommodation', 'Daily Breakfast', 'Airport Transfers', 'Sightseeing Tours'],
      itinerary: [
        { day: 1, activities: ['Airport pickup', 'Beach hotel check-in', 'Calangute Beach visit', 'Sunset at Baga Beach'] },
        { day: 2, activities: ['Old Goa churches tour', 'Spice plantation visit', 'Traditional Goan lunch', 'Free evening'] },
        { day: 3, activities: ['Water sports morning', 'Beach relaxation', 'Dinner cruise', 'Night market visit'] },
        { day: 4, activities: ['Final beach time', 'Souvenir shopping', 'Airport transfer'] }
      ]
    },
    {
      id: 2,
      title: 'Cultural Jaipur Experience',
      subtitle: 'Royal Heritage & Majestic Palaces',
      image: 'https://images.pexels.com/photos/3262693/pexels-photo-3262693.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '5 Days, 4 Nights',
      price: '₹45,000',
      originalPrice: '₹60,000',
      rating: 4.8,
      location: 'Jaipur, Rajasthan',
      travelers: '2 Adults',
      description: 'Immerse yourself in the rich heritage of the Pink City with majestic palaces, vibrant bazaars, and royal cuisine.',
      highlights: [
        'Heritage hotel accommodation',
        'Amber Fort elephant ride',
        'City Palace and Hawa Mahal tour',
        'Traditional Rajasthani cooking class',
        'Chokhi Dhani village experience',
        'Johari Bazaar shopping tour'
      ],
      includes: ['Heritage Accommodation', 'All Meals', 'Private Guide', 'Cultural Shows'],
      itinerary: [
        { day: 1, activities: ['Airport pickup', 'Heritage hotel check-in', 'City Palace tour', 'Hawa Mahal visit'] },
        { day: 2, activities: ['Amber Fort visit', 'Elephant ride', 'Jal Mahal photo stop', 'Local bazaar walk'] },
        { day: 3, activities: ['Nahargarh Fort sunrise', 'Cooking class', 'Traditional lunch', 'Rest and spa'] },
        { day: 4, activities: ['Chokhi Dhani visit', 'Cultural show', 'Folk dance', 'Rajasthani dinner'] },
        { day: 5, activities: ['Johari Bazaar shopping', 'Final sightseeing', 'Airport transfer'] }
      ]
    },
    {
      id: 3,
      title: 'Mumbai Nightlife Special',
      subtitle: 'City Lights & Urban Adventures',
      image: 'https://images.pexels.com/photos/2629233/pexels-photo-2629233.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '3 Days, 2 Nights',
      price: '₹35,000',
      originalPrice: '₹45,000',
      rating: 4.7,
      location: 'Mumbai, Maharashtra',
      travelers: '2 Adults',
      description: 'Experience the city that never sleeps with rooftop bars, street food tours, and iconic Bollywood glamour.',
      highlights: [
        'Luxury hotel in Bandra',
        'Bollywood studio tour',
        'Marine Drive sunset walk',
        'Street food tour in Mohammed Ali Road',
        'Rooftop bar hopping',
        'Gateway of India boat ride'
      ],
      includes: ['Luxury Hotel', 'Welcome Drinks', 'Food Tours', 'Nightclub Entries'],
      itinerary: [
        { day: 1, activities: ['Airport pickup', 'Hotel check-in', 'Marine Drive walk', 'Rooftop dinner'] },
        { day: 2, activities: ['Bollywood tour', 'Street food walk', 'Colaba shopping', 'Nightclub experience'] },
        { day: 3, activities: ['Gateway boat ride', 'Elephanta Caves', 'Final shopping', 'Airport transfer'] }
      ]
    },
    {
      id: 4,
      title: 'Kerala Backwaters Retreat',
      subtitle: 'Tranquil Waters & Spice Gardens',
      image: 'https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '6 Days, 5 Nights',
      price: '₹55,000',
      originalPrice: '₹70,000',
      rating: 4.9,
      location: 'Alleppey, Kerala',
      travelers: '2 Adults',
      description: 'Sail through serene backwaters, stay in traditional houseboats, and discover the spice coast of India.',
      highlights: [
        'Traditional houseboat stay',
        'Backwater cruise experience',
        'Spice plantation tour',
        'Ayurvedic spa treatment',
        'Kathakali dance performance',
        'Chinese fishing nets visit'
      ],
      includes: ['Houseboat Accommodation', 'All Meals', 'Backwater Cruises', 'Spa Treatments'],
      itinerary: [
        { day: 1, activities: ['Cochin airport pickup', 'Chinese nets visit', 'Spice market tour', 'Hotel check-in'] },
        { day: 2, activities: ['Houseboat boarding', 'Backwater cruise', 'Village visit', 'Sunset viewing'] },
        { day: 3, activities: ['Morning cruise', 'Spice plantation', 'Cooking demonstration', 'Traditional lunch'] },
        { day: 4, activities: ['Ayurvedic spa', 'Beach resort transfer', 'Kathakali show', 'Dinner by beach'] },
        { day: 5, activities: ['Beach relaxation', 'Sunset cruise', 'Seafood dinner', 'Local shopping'] },
        { day: 6, activities: ['Final boat ride', 'Souvenir shopping', 'Airport transfer'] }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Explore Our Popular Destinations</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Discover hand-crafted itineraries designed by our AI and perfected by local experts
          </p>
        </div>
      </section>

      {/* Demo Trips Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {demoTrips.map((trip, index) => (
              <div
                key={trip.id}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer ${
                  selectedTrip === trip.id ? 'ring-4 ring-emerald-500 transform scale-105' : 'transform hover:scale-105'
                }`}
                onClick={() => setSelectedTrip(selectedTrip === trip.id ? null : trip.id)}
              >
                {/* Image Header */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full">
                    <span className="font-bold text-emerald-600 text-lg">{trip.price}</span>
                    {trip.originalPrice && (
                      <span className="text-gray-500 text-sm line-through ml-2">{trip.originalPrice}</span>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{trip.title}</h3>
                    <p className="text-emerald-200">{trip.subtitle}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm text-gray-600">{trip.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm text-gray-600">{trip.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-sm">{trip.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{trip.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{trip.travelers}</span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onPageChange('itinerary');
                      }}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center gap-1"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Expandable Content */}
                  <div className={`transition-all duration-300 overflow-hidden ${
                    selectedTrip === trip.id ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="border-t pt-6 mt-6 space-y-6">
                      {/* Highlights */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Trip Highlights</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {trip.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
                              <span className="text-sm text-gray-700">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Includes */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Package Includes</h4>
                        <div className="flex flex-wrap gap-2">
                          {trip.includes.map((item, idx) => (
                            <span
                              key={idx}
                              className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Quick Itinerary */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Quick Itinerary</h4>
                        <div className="space-y-3">
                          {trip.itinerary.map((day, dayIdx) => (
                            <div key={dayIdx} className="flex gap-3">
                              <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                                {day.day}
                              </div>
                              <div className="flex-1">
                                <div className="text-sm text-gray-600">
                                  {day.activities.join(' • ')}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-4">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onPageChange('itinerary');
                          }}
                          className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200"
                        >
                          Book This Trip
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onPageChange('planner');
                          }}
                          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-semibold transition-all duration-200"
                        >
                          Customize
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-32 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1920')`
        }}
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-5xl font-bold text-white mb-6">
            Can't Find Your Perfect Trip?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let our AI create a completely personalized itinerary just for you!
          </p>
          <button
            onClick={() => onPageChange('planner')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Create Custom Trip
          </button>
        </div>
      </section>
    </div>
  );
};