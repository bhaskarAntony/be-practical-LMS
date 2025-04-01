import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  GraduationCap, 
  Code, 
  Users, 
  Video, 
  FlaskConical, 
  Book, 
  Trophy, 
  BadgeCheck, 
  BookOpenCheck, 
  Library, 
  User, 
  ShoppingCart 
} from "lucide-react";

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: GraduationCap, label: 'Courses', path: '/courses' },
    { icon: Code, label: 'DSA Playground', path: '/dsa-playground' },
    { icon: Users, label: 'Discussion Hubs', path: 'https://learning.be-practical.com/community' },
    { icon: Video, label: 'Live Events', path: '/live-events' },
    { icon: FlaskConical, label: 'Labs', path: '/labs' },
    { icon: Book, label: 'Blogs', path: '/blogs' },
    { icon: Trophy, label: 'Leaderboard', path: '/leaderboard' },
    { icon: BadgeCheck, label: 'Gamification', path: '/gamification' },
    { icon: BookOpenCheck, label: 'Affiliate Dashboard', path: '/affliate' },
    { icon: BookOpenCheck, label: 'Quiz', path: '/quiz' },
    { icon: Library, label: 'Digital Library', path: '/digital-library' },
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: ShoppingCart, label: 'Purchase History', path: '/history' }
  ];
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1  bg-indigo-900">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <GraduationCap className="h-8 w-8 text-white" />
              <span className="ml-2 text-white font-semibold">Learning Portal</span>
            </div>
            <nav className="mt-5 flex-1 px-2 space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`${
                      isActive
                        ? ' bg-white  bg-indigo-500'
                        : 'text-gray-300 hover:bg-indigo-600 hover:text-white'
                    } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                  >
                    <Icon className="mr-3 h-6 w-6" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;