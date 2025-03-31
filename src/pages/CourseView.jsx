import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Play, CheckCircle, Clock, BookOpen } from 'lucide-react';
import { courses } from '../data/dummyData';
import { getItem, setItem } from '../utils/localStorage';

function CourseView() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [activeWeek, setActiveWeek] = useState(0);
  const [activeItem, setActiveItem] = useState(null);
  const [progress, setProgress] = useState({});

  useEffect(() => {
    const foundCourse = courses.find(c => c.slug === courseId);
    setCourse(foundCourse);
    
    // Load progress from localStorage
    const userProgress = getItem('progress') || {};
    setProgress(userProgress.courses?.[courseId] || {});
  }, [courseId]);

  const markCompleted = (weekIndex, itemIndex) => {
    const newProgress = {
      ...progress,
      [`${weekIndex}-${itemIndex}`]: true
    };
    setProgress(newProgress);

    // Update localStorage
    const userProgress = getItem('progress') || {};
    setItem('progress', {
      ...userProgress,
      courses: {
        ...userProgress.courses,
        [courseId]: newProgress
      }
    });
  };

  if (!course) return <div>Loading...</div>;

  return (
    <div className="flex h-full">
      {/* Sidebar with course content */}
      <div className="w-80 bg-white border-r overflow-y-auto">
        <div className="p-4">
          <h2 className="text-lg font-semibold">{course.name}</h2>
          <p className="text-sm text-gray-600 mt-1">{course.instructor}</p>
        </div>
        
        <div className="border-t">
          {course.topics.map((week, weekIndex) => (
            <div key={weekIndex}>
              <button
                className="w-full px-4 py-3 flex justify-between items-center hover:bg-gray-50"
                onClick={() => setActiveWeek(weekIndex)}
              >
                <span className="font-medium">Week {week.week}</span>
                <span className="text-sm text-gray-500">
                  {week.items.filter(item => progress[`${weekIndex}-${item.index}`]).length} / {week.items.length}
                </span>
              </button>
              
              {activeWeek === weekIndex && (
                <div className="bg-gray-50">
                  {week.items.map((item, itemIndex) => (
                    <button
                      key={itemIndex}
                      className={`w-full px-6 py-2 flex items-center text-left ${
                        activeItem === `${weekIndex}-${itemIndex}` ? 'bg-indigo-50 text-indigo-600' : ''
                      }`}
                      onClick={() => setActiveItem(`${weekIndex}-${itemIndex}`)}
                    >
                      {item.type === 'video' && <Play className="h-4 w-4 mr-2" />}
                      {item.type === 'article' && <BookOpen className="h-4 w-4 mr-2" />}
                      {item.type === 'quiz' && <Clock className="h-4 w-4 mr-2" />}
                      <span className="flex-1 text-sm">{item.title}</span>
                      {progress[`${weekIndex}-${itemIndex}`] && (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 overflow-y-auto p-6">
        {activeItem ? (
          <div>
            <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg mb-6">
              {/* Video player or content area */}
              <div className="flex items-center justify-center text-white">
                Video Player
              </div>
            </div>
            
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">
                {course.topics[parseInt(activeItem.split('-')[0])].items[parseInt(activeItem.split('-')[1])].title}
              </h2>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                onClick={() => markCompleted(...activeItem.split('-').map(Number))}
              >
                Mark as Complete
              </button>
            </div>

            <div className="prose max-w-none">
              <p>Course content goes here...</p>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-20">
            Select a lesson to start learning
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseView;