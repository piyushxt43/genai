import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, MapPin, Calendar, DollarSign, Heart, Mountain, Camera, Coffee } from 'lucide-react';

interface TripPlannerFormProps {
  onPageChange: (page: string) => void;
}

export const TripPlannerForm: React.FC<TripPlannerFormProps> = ({ onPageChange }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    budget: 50000,
    duration: '',
    themes: [] as string[],
    destination: ''
  });

  const themes = [
    { id: 'heritage', name: 'Heritage', icon: <Camera className="w-6 h-6" />, color: 'bg-amber-100 text-amber-600 border-amber-200' },
    { id: 'nightlife', name: 'Nightlife', icon: <Coffee className="w-6 h-6" />, color: 'bg-purple-100 text-purple-600 border-purple-200' },
    { id: 'adventure', name: 'Adventure', icon: <Mountain className="w-6 h-6" />, color: 'bg-red-100 text-red-600 border-red-200' },
    { id: 'leisure', name: 'Leisure', icon: <Heart className="w-6 h-6" />, color: 'bg-pink-100 text-pink-600 border-pink-200' }
  ];

  const destinations = [
    'Goa', 'Kerala', 'Rajasthan', 'Himachal Pradesh', 'Kashmir', 'Tamil Nadu', 
    'Karnataka', 'Maharashtra', 'Uttarakhand', 'West Bengal'
  ];

  const handleThemeToggle = (themeId: string) => {
    setFormData(prev => ({
      ...prev,
      themes: prev.themes.includes(themeId)
        ? prev.themes.filter(t => t !== themeId)
        : [...prev.themes, themeId]
    }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      onPageChange('itinerary');
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
                    step <= currentStep
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {step}
                </div>
                {step < 4 && (
                  <div
                    className={`flex-1 h-1 mx-4 ${
                      step < currentStep ? 'bg-emerald-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-gray-600">
              Step {currentStep} of 4
            </p>
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Step 1: Budget */}
          {currentStep === 1 && (
            <div className="text-center">
              <DollarSign className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What's your budget?</h2>
              <p className="text-gray-600 mb-12">Select your preferred spending range for this trip</p>
              
              <div className="max-w-md mx-auto">
                <div className="mb-8">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">
                    ₹{formData.budget.toLocaleString()}
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="200000"
                    step="5000"
                    value={formData.budget}
                    onChange={(e) => setFormData(prev => ({ ...prev, budget: parseInt(e.target.value) }))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>₹10,000</span>
                    <span>₹2,00,000</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {[
                    { min: 10000, max: 30000, label: 'Budget Travel' },
                    { min: 30000, max: 75000, label: 'Comfortable' },
                    { min: 75000, max: 150000, label: 'Luxury' },
                    { min: 150000, max: 200000, label: 'Premium' }
                  ].map((range, index) => (
                    <button
                      key={index}
                      onClick={() => setFormData(prev => ({ ...prev, budget: (range.min + range.max) / 2 }))}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        formData.budget >= range.min && formData.budget <= range.max
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                          : 'border-gray-200 hover:border-emerald-300'
                      }`}
                    >
                      <div className="font-semibold">{range.label}</div>
                      <div className="text-sm text-gray-600">₹{range.min.toLocaleString()} - ₹{range.max.toLocaleString()}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Duration */}
          {currentStep === 2 && (
            <div className="text-center">
              <Calendar className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How long is your trip?</h2>
              <p className="text-gray-600 mb-12">Choose the duration that works best for you</p>
              
              <div className="max-w-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { value: '2-3 days', label: 'Weekend', desc: 'Quick getaway' },
                  { value: '4-6 days', label: 'Short Trip', desc: 'Extended weekend' },
                  { value: '1 week', label: '1 Week', desc: 'Perfect balance' },
                  { value: '2 weeks', label: '2 Weeks', desc: 'Extended vacation' }
                ].map((option, index) => (
                  <button
                    key={index}
                    onClick={() => setFormData(prev => ({ ...prev, duration: option.value }))}
                    className={`p-6 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
                      formData.duration === option.value
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                        : 'border-gray-200 hover:border-emerald-300'
                    }`}
                  >
                    <div className="font-bold text-lg mb-1">{option.label}</div>
                    <div className="text-sm font-medium mb-1">{option.value}</div>
                    <div className="text-xs text-gray-500">{option.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Themes */}
          {currentStep === 3 && (
            <div className="text-center">
              <Heart className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What interests you?</h2>
              <p className="text-gray-600 mb-12">Select all themes that match your travel style (multiple selection allowed)</p>
              
              <div className="max-w-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                {themes.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => handleThemeToggle(theme.id)}
                    className={`p-8 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
                      formData.themes.includes(theme.id)
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-700 transform scale-105'
                        : `border-gray-200 hover:border-emerald-300 ${theme.color}`
                    }`}
                  >
                    <div className="mb-4">
                      {theme.icon}
                    </div>
                    <div className="font-semibold">{theme.name}</div>
                  </button>
                ))}
              </div>

              {formData.themes.length > 0 && (
                <div className="mt-8 p-4 bg-emerald-50 rounded-lg max-w-md mx-auto">
                  <p className="text-emerald-700 font-medium">
                    Selected: {formData.themes.map(t => themes.find(theme => theme.id === t)?.name).join(', ')}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Step 4: Destination */}
          {currentStep === 4 && (
            <div className="text-center">
              <MapPin className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Where do you want to go?</h2>
              <p className="text-gray-600 mb-12">Choose your preferred destination from our top recommendations</p>
              
              <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {destinations.map((destination, index) => (
                  <button
                    key={index}
                    onClick={() => setFormData(prev => ({ ...prev, destination }))}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 hover:scale-105 ${
                      formData.destination === destination
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                        : 'border-gray-200 hover:border-emerald-300'
                    }`}
                  >
                    <div className="font-semibold text-sm">{destination}</div>
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <input
                  type="text"
                  placeholder="Or type a custom destination..."
                  value={formData.destination}
                  onChange={(e) => setFormData(prev => ({ ...prev, destination: e.target.value }))}
                  className="max-w-md mx-auto w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-600 focus:outline-none"
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12">
            {currentStep > 1 ? (
              <button
                onClick={handlePrev}
                className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-semibold transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </button>
            ) : (
              <div />
            )}

            <button
              onClick={handleNext}
              disabled={
                (currentStep === 2 && !formData.duration) ||
                (currentStep === 3 && formData.themes.length === 0) ||
                (currentStep === 4 && !formData.destination)
              }
              className="flex items-center gap-2 px-8 py-3 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-all duration-200"
            >
              {currentStep === 4 ? 'Generate Itinerary' : 'Next'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};