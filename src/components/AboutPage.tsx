import React from 'react';
import { Edit3 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface AboutPageProps {
  onEditAbout: () => void;
}

export function AboutPage({ onEditAbout }: AboutPageProps) {
  const { data, isAdmin } = usePortfolio();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {isAdmin && (
        <div className="mb-6 flex justify-end">
          <button
            onClick={onEditAbout}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <Edit3 className="w-4 h-4" />
            <span>Edit Content</span>
          </button>
        </div>
      )}

      {/* About Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
        <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={data.aboutContent.profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-medium text-gray-900 mb-6">
            {data.aboutContent.title}
          </h2>
          <div className="text-gray-600 leading-relaxed mb-8 space-y-4">
            {data.aboutContent.description.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <button className="text-gray-900 hover:text-gray-600 transition-colors text-left">
            {data.aboutContent.callToAction}
          </button>
        </div>
      </div>

      {/* Education, Experience, Clients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {/* Education */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-6">Education</h3>
          <div className="space-y-6">
            {data.education.map((item) => (
              <div key={item.id}>
                <h4 className="font-medium text-gray-900 mb-1">{item.title}</h4>
                <p className="text-gray-600 mb-1">{item.institution}</p>
                <p className="text-gray-500 text-sm">{item.period}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-6">Experience</h3>
          <div className="space-y-6">
            {data.experience.map((item) => (
              <div key={item.id}>
                <h4 className="font-medium text-gray-900 mb-1">{item.company}</h4>
                <p className="text-gray-600 mb-1">{item.position}</p>
                <p className="text-gray-500 text-sm">{item.period}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Clients */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-6">Selected clients</h3>
          <div className="space-y-2">
            {data.clients.map((client) => (
              <p key={client.id} className="text-gray-600">{client.name}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}