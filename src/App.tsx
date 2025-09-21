import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { TripPlannerForm } from './components/TripPlannerForm';
import { ItineraryPage } from './components/ItineraryPage';
import { FeaturesPage } from './components/FeaturesPage';
import { DemoTripsPage } from './components/DemoTripsPage';
import { CheckoutPage } from './components/CheckoutPage';
import { SuccessPage } from './components/SuccessPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';

type PageType = 'home' | 'planner' | 'itinerary' | 'features' | 'demo-trips' | 'checkout' | 'success' | 'about' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={setCurrentPage} />;
      case 'planner':
        return <TripPlannerForm onPageChange={setCurrentPage} />;
      case 'itinerary':
        return <ItineraryPage onPageChange={setCurrentPage} />;
      case 'features':
        return <FeaturesPage onPageChange={setCurrentPage} />;
      case 'demo-trips':
        return <DemoTripsPage onPageChange={setCurrentPage} />;
      case 'checkout':
        return <CheckoutPage onPageChange={setCurrentPage} />;
      case 'success':
        return <SuccessPage onPageChange={setCurrentPage} />;
      case 'about':
        return <AboutPage onPageChange={setCurrentPage} />;
      case 'contact':
        return <ContactPage onPageChange={setCurrentPage} />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;