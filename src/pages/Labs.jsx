import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { labs } from '../data/dummyData';

function Labs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [difficulty, setDifficulty] = useState('all');

  const filteredLabs = labs.filter(lab => {
    const matchesSearch = lab.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lab.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = difficulty === 'all' || lab.difficulty.toLowerCase() === difficulty.toLowerCase();
    return matchesSearch && matchesDifficulty;
  });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Interactive Labs</h1>
          <p className="mt-2 text-gray-600">Practice with hands-on coding exercises</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search labs..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <select
          className="border rounded-lg px-4 py-2"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="all">All Difficulties</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-gray-700">Title</th>
              <th className="px-6 py-3 text-left text-gray-700">Description</th>
              <th className="px-6 py-3 text-left text-gray-700">Duration</th>
              <th className="px-6 py-3 text-left text-gray-700">Difficulty</th>
              <th className="px-6 py-3 text-left text-gray-700">Technologies</th>
              <th className="px-6 py-3 text-left text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredLabs.map(lab => (
              <tr key={lab.id} className="border-b">
                <td className="px-6 py-4 font-semibold text-gray-900">{lab.title}</td>
                <td className="px-6 py-4 text-gray-600">{lab.description}</td>
                <td className="px-6 py-4 text-gray-600">{lab.duration}</td>
                <td className="px-6 py-4 text-gray-600">{lab.difficulty}</td>
                <td className="px-6 py-4 text-gray-600">
                  <div className="flex flex-wrap gap-2">
                    {lab.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <Link
                    to={`/labs/${lab.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    View Lab
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Labs;
