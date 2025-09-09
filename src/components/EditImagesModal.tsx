import React, { useState } from 'react';
import { X, Save } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { ProjectImage } from '../types';

interface EditImagesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EditImagesModal({ isOpen, onClose }: EditImagesModalProps) {
  const { data, updateData } = usePortfolio();
  const [images, setImages] = useState<ProjectImage[]>(data.projectImages);

  if (!isOpen) return null;

  const handleImageChange = (id: string, field: keyof ProjectImage, value: string) => {
    setImages(prev => prev.map(img => 
      img.id === id ? { ...img, [field]: value } : img
    ));
  };

  const handleSave = () => {
    updateData({ projectImages: images });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-medium">Edit Project Images</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          {images.map((image) => (
            <div key={image.id} className="border rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Title
                  </label>
                  <input
                    type="text"
                    value={image.title}
                    onChange={(e) => handleImageChange(image.id, 'title', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image URL
                  </label>
                  <input
                    type="url"
                    value={image.imageUrl}
                    onChange={(e) => handleImageChange(image.id, 'imageUrl', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              {image.imageUrl && (
                <div className="mt-4">
                  <img
                    src={image.imageUrl}
                    alt={image.title}
                    className="w-full h-32 object-cover rounded-md"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-end space-x-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <Save className="w-4 h-4" />
            <span>Save Changes</span>
          </button>
        </div>
      </div>
    </div>
  );
}