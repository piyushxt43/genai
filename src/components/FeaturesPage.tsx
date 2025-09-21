import React, { useState } from 'react';
import { Sparkles, Zap, MapPin, Clock, Brain, Globe, Shield, Smartphone } from 'lucide-react';

interface FeaturesPageProps {
  onPageChange: (page: string) => void;
}

export const FeaturesPage: React.FC<FeaturesPageProps> = ({ onPageChange }) => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'AI Itinerary Generator',
      description: 'Advanced machine learning algorithms analyze your preferences, budget, and travel style to create perfectly tailored itineraries.',
      details: [
        'Analyzes over 10,000 travel patterns daily',
        'Considers weather, local events, and crowd levels',
        'Personalizes based on your travel history',
        'Updates recommendations in real-time'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Real-Time Adjustments',
      description: 'Dynamic itinerary updates based on weather conditions, local events, traffic, and your changing preferences during the trip.',
      details: [
        'Weather-based activity suggestions',
        'Traffic-aware route optimization',
        'Local event integration',
        'Instant rebooking capabilities'
      ],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Hidden Gems Discovery',
      description: 'Uncover secret spots and local favorites that only locals know about, making your trip truly unique and memorable.',
      details: [
        'Local insider recommendations',
        'Off-the-beaten-path locations',
        'Community-driven suggestions',
        'Verified authentic experiences'
      ],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'One-Click Booking',
      description: 'Seamless booking experience for flights, hotels, activities, and transport with instant confirmations and best price guarantees.',
      details: [
        'Integrated payment gateway',
        'Best price guarantee',
        'Instant confirmation',
        'Cancel anytime protection'
      ],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Smart Budget Optimization',
      description: 'Intelligent budget allocation that maximizes your travel experience while staying within your financial limits.',
      details: [
        'Dynamic pricing analysis',
        'Cost-benefit optimization',
        'Alternative suggestions',
        'Budget tracking tools'
      ],
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Coverage',
      description: 'Comprehensive destination coverage with local partnerships in over 150 countries worldwide.',
      details: [
        '150+ countries covered',
        'Local partner network',
        'Multi-language support',
        '24/7 global assistance'
      ],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Travel Insurance & Safety',
      description: 'Comprehensive travel protection with real-time safety monitoring and emergency assistance.',
      details: [
        'Comprehensive travel insurance',
        'Real-time safety alerts',
        'Emergency assistance',
        'Medical support network'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Companion',
      description: 'Offline-capable mobile app with GPS navigation, translation, and instant customer support.',
      details: [
        'Offline map access',
        'Real-time translation',
        'GPS navigation',
        'Instant chat support'
      ],
      color: 'from-violet-500 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Powerful Features for Modern Travelers</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Experience the future of travel planning with cutting-edge AI technology and seamless booking integration
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:scale-105 ${
                  activeFeature === index ? 'ring-4 ring-emerald-500' : ''
                }`}
                onClick={() => setActiveFeature(activeFeature === index ? null : index)}
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Accordion Content */}
                  <div className={`transition-all duration-300 overflow-hidden ${
                    activeFeature === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="border-t pt-6 mt-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Key Benefits:</h4>
                      <ul className="space-y-3">
                        {feature.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0" />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <span className="text-emerald-600 font-medium group-hover:text-emerald-700 transition-colors">
                      {activeFeature === index ? 'Click to collapse' : 'Click to expand'}
                    </span>
                    <div className={`w-6 h-6 transform transition-transform duration-200 ${
                      activeFeature === index ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-full h-full text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Experience the Future of Travel?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join thousands of travelers who have discovered the perfect trip planning experience with TripAI
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => onPageChange('planner')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Planning Your Trip
            </button>
            <button
              onClick={() => onPageChange('demo-trips')}
              className="bg-white border-2 border-emerald-600 hover:bg-emerald-50 text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View Demo Trips
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">10K+</div>
              <div className="text-gray-300">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">150+</div>
              <div className="text-gray-300">Countries Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">98%</div>
              <div className="text-gray-300">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};