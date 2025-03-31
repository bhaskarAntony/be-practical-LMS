import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Trophy, ArrowUp, ArrowDown } from 'lucide-react';
import { dsaProblems, leaderboard } from '../data/dummyData';

function DSAPlayground() {
  const [searchTerm, setSearchTerm] = useState('');
  const [difficulty, setDifficulty] = useState('all');
  const [category, setCategory] = useState('all');

  const filteredProblems = dsaProblems.filter(problem => {
    const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = difficulty === 'all' || problem.difficulty.toLowerCase() === difficulty.toLowerCase();
    const matchesCategory = category === 'all' || problem.category.toLowerCase() === category.toLowerCase();
    return matchesSearch && matchesDifficulty && matchesCategory;
  });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">DSA Playground</h1>
          <p className="mt-2 text-gray-600">Practice Data Structures & Algorithms</p>
        </div>
        <Link
          to="/dsa-playground/leaderboard"
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          <Trophy className="h-5 w-5 mr-2" />
          Leaderboard
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search problems..."
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
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <select
          className="border rounded-lg px-4 py-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="arrays">Arrays</option>
          <option value="strings">Strings</option>
          <option value="linked-lists">Linked Lists</option>
          <option value="trees">Trees</option>
          <option value="graphs">Graphs</option>
        </select>
      </div>

      {/* Problems List */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Difficulty
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acceptance
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredProblems.map((problem) => (
              <tr key={problem.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <Link
                    to={`/dsa-playground/${problem.id}`}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    {problem.title}
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      problem.difficulty === 'Easy'
                        ? 'bg-green-100 text-green-800'
                        : problem.difficulty === 'Medium'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {problem.difficulty}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {problem.acceptance}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {problem.category}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Weekly Leaderboard */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Weekly Leaderboard</h2>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="space-y-4">
            {leaderboard.weekly.slice(0, 5).map((entry, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="w-8 text-lg font-semibold text-gray-500">
                    #{entry.rank}
                  </span>
                  <span className="font-medium">{entry.user}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500">
                    {entry.problemsSolved} problems
                  </span>
                  <span className="text-sm font-medium text-indigo-600">
                    {entry.points} pts
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DSAPlayground;