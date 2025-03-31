// Dummy data for the LMS
export const coursesData = [
    {
      id: 1,
      name: "Full Stack Web Development",
      slug: "full-stack-web-development",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      duration: "12 weeks",
      level: "Intermediate",
      rating: 4.8,
      enrolled: 1250,
      price: 499,
      instructor: "John Doe",
      description: "Master MERN stack development with hands-on projects",
      topics: [
        {
          week: 1,
          title: "Introduction to Web Development",
          content: [
            { 
              type: "video", 
              title: "Web Fundamentals", 
              duration: "45:00",
              url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            },
            { 
              type: "quiz", 
              title: "HTML Basics Quiz",
              questions: [
                {
                  id: 1,
                  question: "What does HTML stand for?",
                  options: [
                    "Hyper Text Markup Language",
                    "High Tech Modern Language",
                    "Hyper Transfer Markup Language",
                    "Home Tool Markup Language"
                  ],
                  correctAnswer: 0
                }
              ]
            },
            { 
              type: "article", 
              title: "Understanding CSS",
              content: "CSS is a style sheet language..."
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Data Science Bootcamp",
      slug: "data-science-bootcamp",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      duration: "16 weeks",
      level: "Advanced",
      rating: 4.9,
      enrolled: 980,
      price: 699,
      instructor: "Jane Smith",
      description: "Comprehensive data science program with Python"
    }
  ];
  
  export const dsaProblems = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      acceptance: "45%",
      category: "Arrays",
      description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      examples: [
        {
          input: "nums = [2,7,11,15], target = 9",
          output: "[0,1]",
          explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
        }
      ],
      testCases: [
        {
          input: [2, 7, 11, 15],
          target: 9,
          output: [0, 1]
        }
      ],
      starterCode: `function twoSum(nums, target) {
      // Your code here
  };`
    }
  ];
  
  export const liveEvents = [
    {
      id: 1,
      type: "Workshop",
      name: "System Design Interview Preparation",
      date: "2024-04-15T10:00:00",
      duration: "2 hours",
      instructor: "Alex Johnson",
      thumbnail: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1",
      description: "Learn how to tackle system design interviews at top tech companies",
      attendees: 150,
      status: "Upcoming"
    },
    {
      id: 2,
      type: "Webinar",
      name: "Cloud Computing with AWS",
      date: "2024-04-20T15:00:00",
      duration: "1.5 hours",
      instructor: "Sarah Williams",
      thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      description: "Introduction to AWS services and cloud architecture",
      attendees: 200,
      status: "Upcoming"
    }
  ];
  
  export const labsData = [
    {
      id: 1,
      title: "Build a REST API",
      description: "Create a RESTful API using Node.js and Express",
      difficulty: "Intermediate",
      duration: "2 hours",
      technologies: ["Node.js", "Express", "MongoDB"],
      thumbnail: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44",
      tasks: [
        {
          id: 1,
          title: "Setup Express Server",
          description: "Initialize a basic Express server",
          testCases: [
            {
              input: "GET /",
              expectedOutput: "Server running"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "React To-Do App",
      description: "Build a simple to-do app using React and hooks",
      difficulty: "Beginner",
      duration: "3 hours",
      technologies: ["React", "JavaScript", "CSS"],
      thumbnail: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34",
      tasks: [
        {
          id: 1,
          title: "Setup React Project",
          description: "Initialize a React app using Create React App",
          testCases: [
            {
              input: "npm start",
              expectedOutput: "Runs the React app successfully"
            }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Database Design with SQL",
      description: "Design and implement a relational database schema",
      difficulty: "Intermediate",
      duration: "4 hours",
      technologies: ["SQL", "PostgreSQL", "Database Design"],
      thumbnail: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
      tasks: [
        {
          id: 1,
          title: "Create Tables",
          description: "Define tables with primary and foreign keys",
          testCases: [
            {
              input: "SELECT * FROM users;",
              expectedOutput: "Displays user data"
            }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Python Data Analysis",
      description: "Perform data analysis using Pandas and Matplotlib",
      difficulty: "Advanced",
      duration: "5 hours",
      technologies: ["Python", "Pandas", "Matplotlib"],
      thumbnail: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2",
      tasks: [
        {
          id: 1,
          title: "Load Dataset",
          description: "Load a CSV file using Pandas",
          testCases: [
            {
              input: "df.head()",
              expectedOutput: "Displays first 5 rows of the dataset"
            }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Build a MERN Stack App",
      description: "Create a full-stack web application using the MERN stack",
      difficulty: "Advanced",
      duration: "6 hours",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      tasks: [
        {
          id: 1,
          title: "Setup Backend",
          description: "Create an Express.js backend with MongoDB",
          testCases: [
            {
              input: "GET /api/data",
              expectedOutput: "Returns JSON data"
            }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Machine Learning Model Deployment",
      description: "Deploy a trained ML model using Flask and Heroku",
      difficulty: "Advanced",
      duration: "7 hours",
      technologies: ["Python", "Flask", "Heroku", "Machine Learning"],
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      tasks: [
        {
          id: 1,
          title: "Setup Flask App",
          description: "Create a Flask API to serve predictions",
          testCases: [
            {
              input: "POST /predict",
              expectedOutput: "Returns model predictions"
            }
          ]
        }
      ]
    }
  ];
  
  
  
  export const quizzes = [
    {
      id: 1,
      title: "JavaScript Fundamentals",
      duration: 30, // minutes
      totalQuestions: 10,
      passingScore: 70,
      questions: [
        {
          id: 1,
          question: "What is JavaScript?",
          options: [
            "A programming language",
            "A markup language",
            "A styling language",
            "A database"
          ],
          correctAnswer: 0
        }
      ]
    }
  ];
  
  export const digitalLibrary = [
    {
      id: 1,
      title: "Web Development Guide",
      type: "PDF",
      size: "2.5 MB",
      author: "John Doe",
      thumbnail: "https://images.unsplash.com/photo-1532012197267-da84d127e765",
      downloadUrl: "#",
      description: "Complete guide to modern web development"
    }
  ];
  
  export const achievements = [
    {
      id: 1,
      title: "Problem Solver",
      description: "Solved 10 DSA problems",
      icon: "Trophy",
      progress: 80,
      reward: "50 points"
    }
  ];
  
  export const dashboardStats = {
    enrolledCourses: 3,
    completedCourses: 1,
    dsaProblemsAttempted: 25,
    dsaProblemsSolved: 15,
    upcomingEvents: 2,
    certifications: 1,
    ranking: 125,
    totalStudents: 1500,
    recentActivities: [
      {
        id: 1,
        type: "course_progress",
        course: "Full Stack Web Development",
        progress: 65,
        timestamp: "2024-03-31T14:30:00"
      }
    ]
  };
  
  export const jobRecommendations = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Tech Corp",
      location: "Remote",
      salary: "$80,000 - $120,000",
      skills: ["React", "Node.js", "MongoDB"],
      postedDate: "2024-03-30T10:00:00",
      description: "Looking for a full stack developer with 2+ years of experience..."
    }
  ];