import React from 'react';
import { Settings, Instagram, Linkedin, Music, Facebook } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  onAdminClick: () => void;
}

export function Navigation({ currentPage, onPageChange, onAdminClick }: NavigationProps) {
  const { isAdmin, logout } = usePortfolio();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onPageChange('home')}
              className="text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors"
            >
              Phillip Geo
            </button>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">BareetDesign</span>
          </div>
          
          <div className="flex items-center space-x-8">
            <button
              onClick={() => onPageChange('about')}
              className={`text-gray-900 hover:text-blue-600 transition-colors duration-200 ${
                currentPage === 'about' ? 'font-medium' : ''
              }`}
            >
              About
            </button>
            <button
              onClick={() => onPageChange('contact')}
              className={`text-gray-900 hover:text-blue-600 transition-colors duration-200 ${
                currentPage === 'contact' ? 'font-medium' : ''
              }`}
            >
              Contact
            </button>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-3 ml-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500 transition-colors duration-200"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors duration-200"
                title="TikTok"
              >
                <Music className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-700 transition-colors duration-200"
                title="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            
            <button
              onClick={isAdmin ? logout : onAdminClick}
              className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors duration-200 ml-4"
              title={isAdmin ? 'Logout' : 'Admin Login'}
            >
              <Settings className="w-4 h-4" />
              {isAdmin && <span className="text-xs">Admin</span>}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}