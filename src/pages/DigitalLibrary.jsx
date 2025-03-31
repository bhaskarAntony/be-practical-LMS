import React, { useState } from 'react';
import { Search, BookOpen, Download, ExternalLink } from 'lucide-react';

const resources = [
  {
    id: '1',
    title: 'Complete Guide to Full Stack Development',
    type: 'PDF',
    category: 'Web Development',
    size: '2.5 MB',
    downloads: 1250,
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
    url: '#',
    description: 'A comprehensive guide to full stack web development covering front-end and back-end technologies.'
  },
  {
    id: '2',
    title: 'Data Structures and Algorithms Handbook',
    type: 'PDF',
    category: 'DSA',
    size: '3.1 MB',
    downloads: 2100,
    thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800',
    url: '#',
    description: 'This handbook covers the essential data structures and algorithms for competitive programming.'
  },
  // Add more resources...
];

function DigitalLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [selectedResource, setSelectedResource] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'all' || resource.category === category;
    return matchesSearch && matchesCategory;
  });

  const handleResourceClick = (resource) => {
    setSelectedResource(resource);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedResource(null);
  };

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Digital Library</h1>
            <p className="mt-2 text-gray-600">Access learning resources and materials</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <select
            className="border rounded-lg px-4 py-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="Web Development">Web Development</option>
            <option value="DSA">DSA</option>
            <option value="Mobile Development">Mobile Development</option>
            <option value="DevOps">DevOps</option>
          </select>
        </div>

        <div className="overflow-x-auto border border-gray-300 rounded-lg shadow-sm">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-left">Category</th>
                <th className="px-4 py-2 text-left">Size</th>
                <th className="px-4 py-2 text-left">Downloads</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredResources.map(resource => (
                <tr key={resource.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{resource.title}</td>
                  <td className="px-4 py-2">{resource.category}</td>
                  <td className="px-4 py-2">{resource.size}</td>
                  <td className="px-4 py-2">{resource.downloads}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleResourceClick(resource)}
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isPopupOpen && selectedResource && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white w-full sm:w-1/2 p-6 rounded-lg shadow-lg max-h-[80vh] overflow-auto">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{selectedResource.title}</h3>
              <button
                onClick={closePopup}
                className="text-gray-500 hover:text-gray-700"
              >
                Close
              </button>
            </div>
            <p className="mt-4 text-gray-600">{selectedResource.description}</p>
            <div className="mt-4 flex items-center text-sm text-gray-500">
              <BookOpen className="h-4 w-4 mr-1" />
              <span>{selectedResource.size}</span>
              <span className="mx-2">•</span>
              <Download className="h-4 w-4 mr-1" />
              <span>{selectedResource.downloads} downloads</span>
            </div>
            <div className="mt-6 flex justify-between">
              <a
                href={selectedResource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 flex items-center"
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                Preview
              </a>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center">
                <Download className="h-4 w-4 mr-2" />
                Download
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DigitalLibrary;
