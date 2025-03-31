import React from 'react';
import { Trophy, Star, Award, TrendingUp, Medal } from 'lucide-react';
import { achievements } from '../utils/dummyData';
import Confetti from 'react-confetti';

function Gamification() {
  const [showConfetti, setShowConfetti] = React.useState(false);

  const handleAchievementClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <div className="space-y-6 p-6 bg-gray-100 min-h-screen">
      {showConfetti && <Confetti />}
      
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Achievements & Rewards</h1>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Star className="h-6 w-6 text-yellow-400" />
            <span className="text-lg font-semibold">1,250 Points</span>
          </div>
          <div className="flex items-center space-x-2">
            <Trophy className="h-6 w-6 text-purple-500" />
            <span className="text-lg font-semibold">Rank #42</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
            onClick={handleAchievementClick}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <Award className="h-6 w-6 text-indigo-600" />
              </div>
              <span className="text-sm font-medium text-indigo-600">{achievement.reward}</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{achievement.description}</p>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-indigo-600 bg-indigo-200">
                    Progress
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold text-indigo-600">{achievement.progress}%</span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                <div
                  style={{ width: `${achievement.progress}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Leaderboard */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Leaderboard</h2>
          <div className="space-y-4">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-2xl font-bold text-gray-500">#{index + 1}</span>
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${index}`}
                    alt="User avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium">User {index + 1}</p>
                    <p className="text-sm text-gray-500">Level {10 - index}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{1500 - index * 100} pts</p>
                  <p className="text-sm text-gray-500">{20 - index} achievements</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <ul className="space-y-4">
            {[...Array(5)].map((_, index) => (
              <li key={index} className="flex items-center space-x-4">
                <Medal className="h-6 w-6 text-green-500" />
                <span className="text-gray-700">Earned a new badge: "Expert Level {index + 1}"</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Gamification;