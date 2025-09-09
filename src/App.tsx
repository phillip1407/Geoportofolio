import React, { useState } from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { LoginModal } from './components/LoginModal';
import { EditImagesModal } from './components/EditImagesModal';
import { EditAboutModal } from './components/EditAboutModal';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showEditImagesModal, setShowEditImagesModal] = useState(false);
  const [showEditAboutModal, setShowEditAboutModal] = useState(false);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage onEditAbout={() => setShowEditAboutModal(true)} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onEditImages={() => setShowEditImagesModal(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onAdminClick={() => setShowLoginModal(true)}
      />
      
      {renderCurrentPage()}

      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />

      <EditImagesModal
        isOpen={showEditImagesModal}
        onClose={() => setShowEditImagesModal(false)}
      />

      <EditAboutModal
        isOpen={showEditAboutModal}
        onClose={() => setShowEditAboutModal(false)}
      />
    </div>
  );
}

function App() {
  return (
    <PortfolioProvider>
      <AppContent />
    </PortfolioProvider>
  );
}

export default App;