import React from 'react';
import { getItem } from '../utils/localStorage';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BookOpen, Award, Star, Trophy } from 'lucide-react';

function Profile() {
  const user = getItem('user');
  const progress = getItem('progress');

  const activityData = [
    { name: 'Mon', hours: 2 },
    { name: 'Tue', hours: 3 },
    { name: 'Wed', hours: 1.5 },
    { name: 'Thu', hours: 4 },
    { name: 'Fri', hours: 2.5 },
    { name: 'Sat', hours: 1 },
    { name: 'Sun', hours: 3 }
  ];

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center">
            <img
              src='https://lh3.googleusercontent.com/a/ACg8ocJM4uYOnNaVsJlcUVoCsOhA_n8NeH7Zn7w_oLTfNr8CJlDFaE-0=s192-c-rg-br100'
              alt={user.name}
              className="h-24 w-24 rounded-full"
            />
            <div className="ml-6">
              <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
              <p className="text-gray-600">{user.email}</p>
              <div className="mt-2 flex items-center">
                <Trophy className="h-5 w-5 text-yellow-400" />
                <span className="ml-2 text-gray-600">{user.points} Points</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <BookOpen className="h-10 w-10 text-blue-500" />
              <div className="ml-4">
              <p className="text-lg font-semibold">{user.completedCourses?.length || 8}</p>
                <p className="text-gray-600">Enrolled Courses</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <Award className="h-10 w-10 text-green-500" />
              <div className="ml-4">
                <p className="text-lg font-semibold">{user.completedCourses?.length || 5}</p>
                <p className="text-gray-600">Completed Courses</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <Star className="h-10 w-10 text-yellow-500" />
              <div className="ml-4">
              <p className="text-lg font-semibold">{user.completedCourses?.length || 10}</p>
                <p className="text-gray-600">Achievements</p>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Chart */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Learning Activity</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="hours" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <p className="ml-3 text-gray-600">Completed "Introduction to React" lesson</p>
              <span className="ml-auto text-sm text-gray-500">2 hours ago</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <p className="ml-3 text-gray-600">Solved DSA problem "Two Sum"</p>
              <span className="ml-auto text-sm text-gray-500">5 hours ago</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <p className="ml-3 text-gray-600">Earned "Fast Learner" badge</p>
              <span className="ml-auto text-sm text-gray-500">1 day ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;