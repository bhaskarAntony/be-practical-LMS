import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Trophy } from 'lucide-react';
import { quizzes } from '../data/dummyData'; // Assuming dummyData contains quiz data

function Quiz() {
  const [category, setCategory] = useState('all');

  // Filter quizzes based on category
  const filteredQuizzes = category === 'all'
    ? quizzes
    : quizzes.filter(quiz => quiz.category === category);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quiz Section</h1>
          <p className="mt-2 text-gray-600">Test your knowledge and earn certificates</p>
        </div>
        <select
          className="border rounded-lg px-4 py-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="dsa">DSA</option>
        </select>
      </div>

      <div className="w-full">
        <table className="min-w-full bg-white rounded-lg shadow-sm overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Title</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Description</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Duration</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Points</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Passing Score</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredQuizzes.map(quiz => (
              <tr
                key={quiz.id}
                className="border-b last:border-none hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 text-sm font-semibold text-gray-900">{quiz.title}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{quiz.description}</td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {quiz.duration}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Trophy className="h-4 w-4 mr-1" />
                    {quiz.totalPoints} points
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{quiz.passingScore}%</td>
                <td className="px-6 py-4">
                  <Link to={`/quiz/${quiz.id}`}>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                      Start Quiz
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredQuizzes.length === 0 && (
          <p className="text-center text-gray-600 mt-4">No quizzes found for this category.</p>
        )}
      </div>
    </div>
  );
}

export default Quiz;