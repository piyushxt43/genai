import React, { useState } from 'react';
import { Users, Award, Globe, Heart, Linkedin, Mail, MapPin } from 'lucide-react';

interface AboutPageProps {
  onPageChange: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onPageChange }) => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const teamMembers = [
    {
      id: 1,
      name: 'Arjun Patel',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With 15 years in the travel industry, Arjun founded TripAI to revolutionize how people plan their adventures. His vision combines cutting-edge AI with deep travel expertise.',
      expertise: ['Travel Industry', 'AI Strategy', 'Business Development'],
      location: 'Mumbai, India'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Head of AI & Technology',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former Google AI researcher, Priya leads our machine learning initiatives. She specializes in recommendation systems and natural language processing for travel planning.',
      expertise: ['Machine Learning', 'Data Science', 'AI Architecture'],
      location: 'Bangalore, India'
    },
    {
      id: 3,
      name: 'Rahul Kumar',
      role: 'Head of Travel Operations',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'A seasoned travel expert with connections across 50+ countries, Rahul ensures our AI recommendations are backed by real-world travel knowledge and local partnerships.',
      expertise: ['Global Travel', 'Local Partnerships', 'Operations'],
      location: 'Delhi, India'
    },
    {
      id: 4,
      name: 'Sneha Gupta',
      role: 'Head of User Experience',
      image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former Airbnb product designer, Sneha crafts intuitive experiences that make complex travel planning feel effortless. She focuses on user-centered design and accessibility.',
      expertise: ['UX Design', 'Product Strategy', 'User Research'],
      location: 'Pune, India'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Happy Travelers', icon: <Users className="w-8 h-8" /> },
    { number: '150+', label: 'Countries Covered', icon: <Globe className="w-8 h-8" /> },
    { number: '98%', label: 'Satisfaction Rate', icon: <Heart className="w-8 h-8" /> },
    { number: '25+', label: 'Industry Awards', icon: <Award className="w-8 h-8" /> }
  ];

  const values = [
    {
      title: 'AI-Powered Personalization',
      description: 'Every trip is unique. Our advanced AI learns from millions of travel patterns to create perfectly tailored experiences.',
      icon: '🤖'
    },
    {
      title: 'Local Expertise',
      description: 'We partner with local guides and experts worldwide to ensure authentic experiences and hidden gem discoveries.',
      icon: '🌍'
    },
    {
      title: 'Seamless Experience',
      description: 'From planning to booking to traveling, we eliminate friction at every step of your journey.',
      icon: '✨'
    },
    {
      title: 'Sustainable Travel',
      description: 'We promote responsible tourism that benefits local communities and preserves destinations for future generations.',
      icon: '🌱'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About TripAI</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            We're on a mission to make travel planning effortless and unforgettable through the power of artificial intelligence and human expertise.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2023, TripAI was born from a simple frustration: planning the perfect trip shouldn't take weeks of research and countless hours of coordination.
                </p>
                <p>
                  Our founders, seasoned travelers and technologists, realized that artificial intelligence could transform how people discover, plan, and book their adventures. By combining cutting-edge AI with deep travel industry expertise, we created a platform that understands your unique preferences and crafts personalized itineraries in minutes, not days.
                </p>
                <p>
                  Today, we've helped over 50,000 travelers explore 150+ destinations worldwide, turning their travel dreams into perfectly planned realities.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team planning travel"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold">2023</div>
                <div className="text-emerald-200">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-emerald-400 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              The passionate minds behind TripAI's innovative travel planning platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                  selectedMember === member.id ? 'ring-4 ring-emerald-500' : ''
                }`}
                onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
              >
                <div className="relative h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-emerald-200 text-sm">{member.role}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{member.location}</span>
                  </div>

                  {/* Expandable Content */}
                  <div className={`transition-all duration-300 overflow-hidden ${
                    selectedMember === member.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="border-t pt-4">
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {member.bio}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, idx) => (
                            <span
                              key={idx}
                              className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">
                          <Linkedin className="w-4 h-4" />
                        </button>
                        <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                          <Mail className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <span className="text-emerald-600 text-sm font-medium">
                      {selectedMember === member.id ? 'Click to collapse' : 'Click to learn more'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future of Travel?</h2>
          <p className="text-xl text-emerald-100 mb-12 max-w-2xl mx-auto">
            Join thousands of travelers who have discovered the perfect trip planning experience with TripAI
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => onPageChange('planner')}
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Planning Your Trip
            </button>
            <button
              onClick={() => onPageChange('contact')}
              className="border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};