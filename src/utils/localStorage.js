// Utility functions for handling local storage

export const setItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

export const getItem = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return null;
  }
};

export const removeItem = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing from localStorage:', error);
  }
};

// Initialize default data if not exists
export const initializeData = () => {
  if (!getItem('user')) {
    setItem('user', {
      id: '1',
      name: 'Bhaskar Antony',
      email: 'bhaskarantony@gmail.com',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=bhaskar',
      enrolledCourses: [],
      completedCourses: [],
      dsaProgress: {
        solved: 0,
        total: 100,
        rank: 1500,
      },
      achievements: [],
      points: 0,
    });
  }

  if (!getItem('progress')) {
    setItem('progress', {
      courses: {},
      dsa: {},
      labs: {},
      quizzes: {},
    });
  }
};