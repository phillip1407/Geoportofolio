import React, { useState } from 'react';
import { X, Save, Plus, Trash2 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { AboutContent, EducationItem, ExperienceItem, ClientItem } from '../types';

interface EditAboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EditAboutModal({ isOpen, onClose }: EditAboutModalProps) {
  const { data, updateData } = usePortfolio();
  const [aboutContent, setAboutContent] = useState<AboutContent>(data.aboutContent);
  const [education, setEducation] = useState<EducationItem[]>(data.education);
  const [experience, setExperience] = useState<ExperienceItem[]>(data.experience);
  const [clients, setClients] = useState<ClientItem[]>(data.clients);

  if (!isOpen) return null;

  const handleSave = () => {
    updateData({
      aboutContent,
      education,
      experience,
      clients
    });
    onClose();
  };

  const addEducationItem = () => {
    setEducation(prev => [...prev, {
      id: Date.now().toString(),
      title: '',
      institution: '',
      period: ''
    }]);
  };

  const removeEducationItem = (id: string) => {
    setEducation(prev => prev.filter(item => item.id !== id));
  };

  const addExperienceItem = () => {
    setExperience(prev => [...prev, {
      id: Date.now().toString(),
      company: '',
      position: '',
      period: ''
    }]);
  };

  const removeExperienceItem = (id: string) => {
    setExperience(prev => prev.filter(item => item.id !== id));
  };

  const addClientItem = () => {
    setClients(prev => [...prev, {
      id: Date.now().toString(),
      name: ''
    }]);
  };

  const removeClientItem = (id: string) => {
    setClients(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-medium">Edit About Content</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-8">
          {/* About Content */}
          <div>
            <h3 className="text-lg font-medium mb-4">About Me Section</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Profile Image URL
                </label>
                <input
                  type="url"
                  value={aboutContent.profileImage}
                  onChange={(e) => setAboutContent(prev => ({ ...prev, profileImage: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={aboutContent.title}
                  onChange={(e) => setAboutContent(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={aboutContent.description}
                  onChange={(e) => setAboutContent(prev => ({ ...prev, description: e.target.value }))}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Call to Action
                </label>
                <input
                  type="text"
                  value={aboutContent.callToAction}
                  onChange={(e) => setAboutContent(prev => ({ ...prev, callToAction: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Education</h3>
              <button
                onClick={addEducationItem}
                className="flex items-center space-x-1 px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm"
              >
                <Plus className="w-4 h-4" />
                <span>Add</span>
              </button>
            </div>
            <div className="space-y-4">
              {education.map((item) => (
                <div key={item.id} className="border rounded-lg p-4">
                  <div className="flex justify-end mb-2">
                    <button
                      onClick={() => removeEducationItem(item.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                      type="text"
                      placeholder="Title"
                      value={item.title}
                      onChange={(e) => setEducation(prev => prev.map(edu => 
                        edu.id === item.id ? { ...edu, title: e.target.value } : edu
                      ))}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      placeholder="Institution"
                      value={item.institution}
                      onChange={(e) => setEducation(prev => prev.map(edu => 
                        edu.id === item.id ? { ...edu, institution: e.target.value } : edu
                      ))}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      placeholder="Period"
                      value={item.period}
                      onChange={(e) => setEducation(prev => prev.map(edu => 
                        edu.id === item.id ? { ...edu, period: e.target.value } : edu
                      ))}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Experience</h3>
              <button
                onClick={addExperienceItem}
                className="flex items-center space-x-1 px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm"
              >
                <Plus className="w-4 h-4" />
                <span>Add</span>
              </button>
            </div>
            <div className="space-y-4">
              {experience.map((item) => (
                <div key={item.id} className="border rounded-lg p-4">
                  <div className="flex justify-end mb-2">
                    <button
                      onClick={() => removeExperienceItem(item.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                      type="text"
                      placeholder="Company"
                      value={item.company}
                      onChange={(e) => setExperience(prev => prev.map(exp => 
                        exp.id === item.id ? { ...exp, company: e.target.value } : exp
                      ))}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      placeholder="Position"
                      value={item.position}
                      onChange={(e) => setExperience(prev => prev.map(exp => 
                        exp.id === item.id ? { ...exp, position: e.target.value } : exp
                      ))}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      placeholder="Period"
                      value={item.period}
                      onChange={(e) => setExperience(prev => prev.map(exp => 
                        exp.id === item.id ? { ...exp, period: e.target.value } : exp
                      ))}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Clients */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Selected Clients</h3>
              <button
                onClick={addClientItem}
                className="flex items-center space-x-1 px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm"
              >
                <Plus className="w-4 h-4" />
                <span>Add</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {clients.map((client) => (
                <div key={client.id} className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Client name"
                    value={client.name}
                    onChange={(e) => setClients(prev => prev.map(cli => 
                      cli.id === client.id ? { ...cli, name: e.target.value } : cli
                    ))}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => removeClientItem(client.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-3 mt-8 pt-6 border-t">
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