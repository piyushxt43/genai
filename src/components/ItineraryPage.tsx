import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Star, Edit, CreditCard, Phone, Mail, Wifi } from 'lucide-react';

interface ItineraryPageProps {
  onPageChange: (page: string) => void;
}

export const ItineraryPage: React.FC<ItineraryPageProps> = ({ onPageChange }) => {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const itinerary = [
    {
      day: 1,
      title: 'Arrival & Beach Exploration',
      activities: [
        {
          time: '10:00 AM',
          activity: 'Airport Pickup',
          location: 'Goa Airport',
          description: 'Private transfer to hotel',
          type: 'transport'
        },
        {
          time: '12:00 PM',
          activity: 'Check-in at Luxury Resort',
          location: 'Taj Exotica Resort & Spa',
          description: 'Premium oceanview suite with complimentary breakfast',
          type: 'accommodation',
          rating: 4.8,
          price: '₹8,500/night'
        },
        {
          time: '3:00 PM',
          activity: 'Calangute Beach Visit',
          location: 'Calangute Beach',
          description: 'Relax on golden sands, water sports optional',
          type: 'activity'
        },
        {
          time: '7:00 PM',
          activity: 'Sunset Dinner Cruise',
          location: 'Mandovi River',
          description: 'Romantic dinner with live music and cultural show',
          type: 'dining',
          rating: 4.6,
          price: '₹2,500/person'
        }
      ]
    },
    {
      day: 2,
      title: 'Cultural Heritage Tour',
      activities: [
        {
          time: '9:00 AM',
          activity: 'Old Goa Churches Tour',
          location: 'Basilica of Bom Jesus',
          description: 'UNESCO World Heritage site visit with guided tour',
          type: 'sightseeing'
        },
        {
          time: '11:30 AM',
          activity: 'Se Cathedral',
          location: 'Old Goa',
          description: 'Historic Portuguese architecture and religious artifacts',
          type: 'sightseeing'
        },
        {
          time: '1:00 PM',
          activity: 'Traditional Goan Lunch',
          location: 'Vinayak Family Restaurant',
          description: 'Authentic fish curry rice and bebinca dessert',
          type: 'dining',
          rating: 4.4,
          price: '₹800/person'
        },
        {
          time: '3:00 PM',
          activity: 'Spice Plantation Visit',
          location: 'Sahakari Spice Farm',
          description: 'Guided tour with spice tasting and elephant ride',
          type: 'activity',
          rating: 4.5,
          price: '₹600/person'
        },
        {
          time: '7:00 PM',
          activity: 'Night Market Shopping',
          location: 'Anjuna Flea Market',
          description: 'Local handicrafts, jewelry, and souvenirs',
          type: 'shopping'
        }
      ]
    },
    {
      day: 3,
      title: 'Adventure & Departure',
      activities: [
        {
          time: '8:00 AM',
          activity: 'Dudhsagar Falls Trek',
          location: 'Dudhsagar Waterfalls',
          description: 'Jeep safari and trekking to spectacular waterfalls',
          type: 'adventure',
          rating: 4.7,
          price: '₹1,200/person'
        },
        {
          time: '2:00 PM',
          activity: 'Beach Lunch & Relaxation',
          location: 'Palolem Beach',
          description: 'Final beach time with fresh seafood lunch',
          type: 'dining'
        },
        {
          time: '5:00 PM',
          activity: 'Hotel Checkout',
          location: 'Taj Exotica Resort',
          description: 'Pack up and prepare for departure',
          type: 'accommodation'
        },
        {
          time: '7:00 PM',
          activity: 'Airport Transfer',
          location: 'Goa Airport',
          description: 'Private transfer for evening flight',
          type: 'transport'
        }
      ]
    }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'accommodation': return '🏨';
      case 'dining': return '🍽️';
      case 'activity': return '🎯';
      case 'sightseeing': return '🏛️';
      case 'transport': return '🚗';
      case 'adventure': return '🏔️';
      case 'shopping': return '🛍️';
      default: return '📍';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Goa Adventure</h1>
              <p className="text-gray-600 text-lg mb-6">AI-curated itinerary based on your preferences</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-5 h-5 text-emerald-600" />
                  <span>3 Days, 2 Nights</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                  <span>Goa, India</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Star className="w-5 h-5 text-emerald-600" />
                  <span>Heritage & Beach</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  <span>Nov 15-17, 2024</span>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => onPageChange('planner')}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-semibold transition-all duration-200"
                >
                  <Edit className="w-4 h-4" />
                  Edit Preferences
                </button>
                <button
                  onClick={() => onPageChange('checkout')}
                  className="flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-all duration-200"
                >
                  <CreditCard className="w-4 h-4" />
                  Book with TripAI
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Goa Beach"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-2 rounded-full">
                <span className="font-bold text-emerald-600 text-lg">₹47,500</span>
                <span className="text-gray-600 text-sm">/person</span>
              </div>
            </div>
          </div>
        </div>

        {/* Itinerary Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {itinerary.map((day) => (
                <div key={day.day} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-emerald-600 text-white p-6">
                    <h3 className="text-2xl font-bold">Day {day.day}</h3>
                    <p className="text-emerald-100">{day.title}</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-4">
                      {day.activities.map((activity, index) => (
                        <div
                          key={index}
                          className="group cursor-pointer p-4 rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all duration-200"
                          onClick={() => setSelectedDay(selectedDay === (day.day * 10 + index) ? null : (day.day * 10 + index))}
                        >
                          <div className="flex items-start gap-4">
                            <div className="text-2xl">{getActivityIcon(activity.type)}</div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                                  {activity.activity}
                                </h4>
                                <span className="text-sm text-gray-500 font-medium">{activity.time}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-600 mb-2">
                                <MapPin className="w-4 h-4" />
                                <span className="text-sm">{activity.location}</span>
                              </div>
                              <p className="text-gray-600 text-sm">{activity.description}</p>
                              
                              {(activity.rating || activity.price) && (
                                <div className="flex items-center gap-4 mt-2">
                                  {activity.rating && (
                                    <div className="flex items-center gap-1">
                                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                      <span className="text-sm font-medium">{activity.rating}</span>
                                    </div>
                                  )}
                                  {activity.price && (
                                    <span className="text-sm font-semibold text-emerald-600">{activity.price}</span>
                                  )}
                                </div>
                              )}

                              {selectedDay === (day.day * 10 + index) && (
                                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                                  <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div className="flex items-center gap-2">
                                      <Phone className="w-4 h-4 text-gray-500" />
                                      <span>+91 98765 43210</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Mail className="w-4 h-4 text-gray-500" />
                                      <span>info@venue.com</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Wifi className="w-4 h-4 text-gray-500" />
                                      <span>Free WiFi</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Clock className="w-4 h-4 text-gray-500" />
                                      <span>Open 24/7</span>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar - Package Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Your Package</h3>
              
              <div className="relative mb-6">
                <img
                  src="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Goa Package"
                  className="w-full h-32 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl" />
                <div className="absolute bottom-3 left-3 text-white">
                  <h4 className="font-bold">Goa: Heritage & Beach</h4>
                  <p className="text-sm">From Maharashtra, India</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-semibold">3 days / 2 nights</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Departure:</span>
                  <span className="font-semibold">15/11/2024</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Return:</span>
                  <span className="font-semibold">17/11/2024</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Travelers:</span>
                  <span className="font-semibold">2 adults</span>
                </div>
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Accommodation</span>
                    <span>₹17,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Activities</span>
                    <span>₹12,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Transport</span>
                    <span>₹8,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Meals</span>
                    <span>₹6,600</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Service Fee</span>
                    <span>₹3,400</span>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total</span>
                  <span className="text-emerald-600">₹47,500</span>
                </div>
              </div>

              <button
                onClick={() => onPageChange('checkout')}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2"
              >
                <CreditCard className="w-4 h-4" />
                Book Now
              </button>

              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => onPageChange('demo-trips')}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium text-sm transition-all duration-200"
                >
                  View Details
                </button>
                <button
                  onClick={() => onPageChange('planner')}
                  className="flex-1 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 py-2 px-4 rounded-lg font-medium text-sm transition-all duration-200"
                >
                  Change
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};