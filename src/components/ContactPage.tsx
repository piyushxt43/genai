import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

interface ContactPageProps {
  onPageChange: (page: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onPageChange }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: '24/7 Phone Support',
      description: 'Speak with our travel experts anytime',
      contact: '+91 98765 43210',
      action: 'Call Now',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email Support',
      description: 'Get detailed help via email',
      contact: 'support@tripai.com',
      action: 'Send Email',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Live Chat',
      description: 'Instant help through our chat system',
      contact: 'Available 24/7',
      action: 'Start Chat',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const offices = [
    {
      city: 'Mumbai',
      address: 'Floor 15, One BKC, G Block, Bandra East',
      phone: '+91 98765 43210',
      email: 'mumbai@tripai.com'
    },
    {
      city: 'Bangalore',
      address: 'UB City Mall, 4th Floor, Vittal Mallya Road',
      phone: '+91 98765 43211',
      email: 'bangalore@tripai.com'
    },
    {
      city: 'Delhi',
      address: 'DLF Cyber City, Phase 2, Sector 24, Gurugram',
      phone: '+91 98765 43212',
      email: 'delhi@tripai.com'
    }
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Send className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for contacting us. Our team will get back to you within 24 hours.
          </p>
          <button
            onClick={() => onPageChange('home')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Have questions about your trip or need personalized assistance? Our travel experts are here to help 24/7.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <div className="font-semibold text-gray-900 mb-4">{method.contact}</div>
                <button className={`w-full bg-gradient-to-r ${method.color} text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-200`}>
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                    >
                      <option value="">Select a subject</option>
                      <option value="booking">Booking Support</option>
                      <option value="technical">Technical Issues</option>
                      <option value="refund">Refund Request</option>
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Quick Info */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Call Us</div>
                      <div className="text-gray-600">+91 98765 43210</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email Us</div>
                      <div className="text-gray-600">support@tripai.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Support Hours</div>
                      <div className="text-gray-600">24/7 Available</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Offices */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Our Offices</h3>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-gray-900">{office.city}</div>
                          <div className="text-gray-600 text-sm mb-2">{office.address}</div>
                          <div className="text-gray-600 text-sm">
                            📞 {office.phone} • ✉️ {office.email}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <p className="text-emerald-100 mb-6">
                  Stay updated with travel tips and exclusive offers
                </p>
                <div className="flex gap-4">
                  <button className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-all duration-200">
                    📘 Facebook
                  </button>
                  <button className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-all duration-200">
                    📷 Instagram
                  </button>
                  <button className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-all duration-200">
                    🐦 Twitter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <p className="text-gray-600 mb-8">
            Can't find what you're looking for? Check out our comprehensive FAQ section.
          </p>
          <button
            onClick={() => onPageChange('features')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
          >
            View FAQ
          </button>
        </div>
      </section>
    </div>
  );
};