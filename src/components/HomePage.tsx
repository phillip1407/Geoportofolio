import React from 'react';
import { Edit3 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface HomePageProps {
  onEditImages: () => void;
}

export function HomePage({ onEditImages }: HomePageProps) {
  const { data, isAdmin } = usePortfolio();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {isAdmin && (
        <div className="mb-6 flex justify-end">
          <button
            onClick={onEditImages}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <Edit3 className="w-4 h-4" />
            <span>Edit Images</span>
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {data.projectImages.map((project) => (
          <div key={project.id} className="group">
            <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}