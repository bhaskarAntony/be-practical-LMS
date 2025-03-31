import React from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';
import { BookOpen, Code2, Trophy, Briefcase } from 'lucide-react';
import { getItem } from '../utils/localStorage';

const progressData = [
  { name: 'Week 1', progress: 100 },
  { name: 'Week 2', progress: 85 },
  { name: 'Week 3', progress: 70 },
  { name: 'Week 4', progress: 55 }
];

const activityData = [
  { day: 'Mon', hours: 2.5 },
  { day: 'Tue', hours: 3.2 },
  { day: 'Wed', hours: 1.8 },
  { day: 'Thu', hours: 4.0 },
  { day: 'Fri', hours: 2.7 },
  { day: 'Sat', hours: 1.5 },
  { day: 'Sun', hours: 3.0 }
];

function Dashboard() {
  const user = getItem('user');

  return (
    <div className="p-6">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name}! 👋</h1>
        <p className="mt-2 text-gray-600">Track your progress and continue learning</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <BookOpen className="h-10 w-10 text-blue-500" />
            <div className="ml-4">
              <p className="text-sm text-gray-600">Enrolled Courses</p>
              <h3 className="text-2xl font-bold">{user?.enrolledCourses?.length ||2}</h3>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <Code2 className="h-10 w-10 text-green-500" />
            <div className="ml-4">
              <p className="text-sm text-gray-600">DSA Problems Solved</p>
              <h3 className="text-2xl font-bold">{user?.dsaProgress?.solved || 0}</h3>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <Trophy className="h-10 w-10 text-yellow-500" />
            <div className="ml-4">
              <p className="text-sm text-gray-600">Achievement Points</p>
              <h3 className="text-2xl font-bold">{user?.points || 0}</h3>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <Briefcase className="h-10 w-10 text-purple-500" />
            <div className="ml-4">
              <p className="text-sm text-gray-600">Job Matches</p>
              <h3 className="text-2xl font-bold">24</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Course Progress</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="progress" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Learning Activity</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="hours" stroke="#4F46E5" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Activity & Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <p className="ml-3 text-sm text-gray-600">Completed "Introduction to React" lesson</p>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <p className="ml-3 text-sm text-gray-600">Solved DSA problem "Two Sum"</p>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <p className="ml-3 text-sm text-gray-600">Earned "Fast Learner" badge</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Recommended Jobs</h2>
          <div className="space-y-4">
            <Link to="/jobs" className="block p-4 border rounded-lg hover:bg-gray-50">
              <h3 className="font-medium">Full Stack Developer</h3>
              <p className="text-sm text-gray-600">TechCorp Solutions • Bangalore</p>
              <p className="text-sm text-gray-500 mt-1">₹12-18 LPA • 2-4 years</p>
            </Link>
            <Link to="/jobs" className="block p-4 border rounded-lg hover:bg-gray-50">
              <h3 className="font-medium">Frontend Developer</h3>
              <p className="text-sm text-gray-600">WebTech India • Remote</p>
              <p className="text-sm text-gray-500 mt-1">₹8-12 LPA • 1-3 years</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;