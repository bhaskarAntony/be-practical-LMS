export const courses = [
  {
    id: "1",
    name: "Full Stack Web Development",
    slug: "full-stack-web-development",
    thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800",
    description: "Master MERN Stack Development with real-world projects",
    duration: "24 weeks",
    level: "Intermediate",
    price: 49999,
    enrolled: 1250,
    rating: 4.8,
    instructor: "Bhaskar Kumar",
    topics: [
      {
        week: 1,
        title: "Introduction to Web Development",
        items: [
          {
            type: "video",
            title: "Web Development Overview",
            duration: "45 min",
            completed: false
          },
          {
            type: "article",
            title: "HTML Fundamentals",
            duration: "20 min",
            completed: false
          },
          {
            type: "quiz",
            title: "HTML Basics Quiz",
            questions: 10,
            completed: false
          }
        ]
      },
      // More weeks...
    ]
  },
  {
    id: "2",
    name: "Data Science & Machine Learning",
    slug: "data-science-ml",
    thumbnail: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=800",
    description: "Complete Data Science Program with Python",
    duration: "32 weeks",
    level: "Advanced",
    price: 59999,
    enrolled: 980,
    rating: 4.9,
    instructor: "Dr. Sarah Smith",
    topics: [
      // Similar structure as above
    ]
  }
  // Add 8 more courses with similar structure
];

export const dsaProblems = [
  {
    id: "1",
    title: "Two Sum",
    difficulty: "Easy",
    acceptance: "45%",
    category: "Arrays",
    description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    
You may assume that each input would have exactly one solution, and you may not use the same element twice.`,
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
        expected: [0, 1]
      }
    ],
    hints: [
      "Try using a hash map to store complements",
      "Think about the time complexity requirements"
    ],
    companies: ["Amazon", "Google", "Facebook"],
    solution: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`
  }
  // Add 9 more problems with similar structure
];

export const liveEvents = [
  {
    id: "1",
    type: "Workshop",
    name: "Mastering Full-Stack Java Development",
    description: "Learn to build robust full-stack applications using Java, Spring Boot, and React.js.",
    date: "2025-05-05T10:00:00Z",
    duration: "4 hours",
    instructor: "John Doe",
    thumbnail: "https://images.unsplash.com/photo-1587364212554-d945e72de2cc?w=800",
    attendees: 200,
    status: "Upcoming",
    category: "Full-Stack Java"
  },
  {
    id: "2",
    type: "Webinar",
    name: "Building Scalable React Applications",
    description: "Dive into advanced concepts for building large-scale applications with React.js.",
    date: "2025-06-10T14:00:00Z",
    duration: "3 hours",
    instructor: "Jane Smith",
    thumbnail: "https://images.unsplash.com/photo-1600292857283-2f76e44ab566?w=800",
    attendees: 250,
    status: "Upcoming",
    category: "React.js"
  },
  {
    id: "3",
    type: "Live Coding Session",
    name: "Advanced Python for Data Science",
    description: "Learn to apply Python for data cleaning, machine learning, and deep learning in data science projects.",
    date: "2025-07-12T16:00:00Z",
    duration: "5 hours",
    instructor: "Dr. Alan Lee",
    thumbnail: "https://images.unsplash.com/photo-1565298538-30f1d3126e8e?w=800",
    attendees: 300,
    status: "Upcoming",
    category: "Python & Data Science"
  },
  {
    id: "4",
    type: "Panel Discussion",
    name: "Data Science and Machine Learning Trends in 2025",
    description: "Experts share the latest trends and future directions of machine learning and data science.",
    date: "2025-08-25T15:00:00Z",
    duration: "2.5 hours",
    instructor: "Multiple Speakers",
    thumbnail: "https://images.unsplash.com/photo-1573497496015-0749c27169c0?w=800",
    attendees: 400,
    status: "Upcoming",
    category: "Data Science"
  },
  {
    id: "5",
    type: "Bootcamp",
    name: "Introduction to Digital Marketing",
    description: "Gain a comprehensive understanding of digital marketing strategies and tools.",
    date: "2025-09-10T09:00:00Z",
    duration: "3 days",
    instructor: "Sophia Martin",
    thumbnail: "https://images.unsplash.com/photo-1519052730915-52855965ccfa?w=800",
    attendees: 150,
    status: "Upcoming",
    category: "Digital Marketing"
  },
  {
    id: "6",
    type: "Live Q&A",
    name: "Getting Started with Cloud Computing",
    description: "Learn about cloud technologies and how to deploy applications in cloud environments.",
    date: "2025-10-01T13:00:00Z",
    duration: "2 hours",
    instructor: "Michael White",
    thumbnail: "https://images.unsplash.com/photo-1581091012181-957dd65ac928?w=800",
    attendees: 220,
    status: "Upcoming",
    category: "Cloud Computing"
  },
  {
    id: "7",
    type: "Workshop",
    name: "CloudOps: Managing Cloud Infrastructure",
    description: "Learn the best practices for managing and automating cloud infrastructure with DevOps tools.",
    date: "2025-11-15T11:00:00Z",
    duration: "4 hours",
    instructor: "Daniel Black",
    thumbnail: "https://images.unsplash.com/photo-1581092742290-b22f0a5bcd3d?w=800",
    attendees: 180,
    status: "Upcoming",
    category: "Cloud Operations"
  },
  {
    id: "8",
    type: "Hackathon",
    name: "React.js + Python Full-Stack Challenge",
    description: "Collaborate with others to build a full-stack application using React.js for the front-end and Python for the back-end.",
    date: "2025-12-03T09:00:00Z",
    duration: "24 hours",
    instructor: "Organizing Committee",
    thumbnail: "https://images.unsplash.com/photo-1534298662830-f8dce3a3fd98?w=800",
    attendees: 500,
    status: "Upcoming",
    category: "Full-Stack React.js & Python"
  },
  {
    id: "9",
    type: "Masterclass",
    name: "Advanced Cloud Security and Architecture",
    description: "Master advanced cloud security techniques and build secure cloud architectures for enterprise applications.",
    date: "2026-01-22T14:00:00Z",
    duration: "5 hours",
    instructor: "Chris Anderson",
    thumbnail: "https://images.unsplash.com/photo-1575972300360-88b2491be8f1?w=800",
    attendees: 130,
    status: "Upcoming",
    category: "Cloud Computing"
  },
  {
    id: "10",
    type: "Webinar",
    name: "Marketing Automation with Digital Tools",
    description: "Learn how to automate your marketing campaigns with tools like HubSpot and Google Analytics.",
    date: "2026-02-15T11:00:00Z",
    duration: "2 hours",
    instructor: "Rachel Green",
    thumbnail: "https://images.unsplash.com/photo-1597042980732-1225aebf2451?w=800",
    attendees: 200,
    status: "Upcoming",
    category: "Digital Marketing"
  }
];


export const labs = [
  {
    id: "1",
    title: "Build a REST API with Node.js",
    description: "Create a complete REST API with Node.js, Express, and MongoDB",
    duration: "4 hours",
    difficulty: "Intermediate",
    thumbnail: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800",
    technologies: ["Node.js", "Express", "MongoDB"],
    prerequisites: ["Basic JavaScript", "API fundamentals"],
    testCases: [
      {
        id: "tc1",
        description: "Should create a new user",
        type: "Integration",
        expected: "201 Created Response"
      }
    ]
  },
  {
    id: "2",
    title: "React Authentication System",
    description: "Implement user authentication using Firebase Authentication and React.",
    duration: "3 hours",
    difficulty: "Intermediate",
    thumbnail: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800",
    technologies: ["React", "Firebase", "Auth"],
    prerequisites: ["Basic React knowledge", "JavaScript ES6+"],
    testCases: [
      {
        id: "tc1",
        description: "Should register a new user successfully",
        type: "Integration",
        expected: "200 OK Response"
      }
    ]
  },
  {
    id: "3",
    title: "Deploy a MERN App",
    description: "Deploy a full-stack MERN app using Vercel for frontend and Render for backend.",
    duration: "5 hours",
    difficulty: "Advanced",
    thumbnail: "https://images.unsplash.com/photo-1581092927105-e17e74247b7e?w=800",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    prerequisites: ["Full-stack development basics", "Git & GitHub"],
    testCases: [
      {
        id: "tc1",
        description: "Should render homepage after deployment",
        type: "Integration",
        expected: "200 OK Response"
      }
    ]
  },
  {
    id: "4",
    title: "Build a Chat App with Socket.io",
    description: "Create a real-time chat application using React and Socket.io.",
    duration: "6 hours",
    difficulty: "Advanced",
    thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800",
    technologies: ["React", "Socket.io", "Node.js"],
    prerequisites: ["Basic WebSockets knowledge", "JavaScript ES6+"],
    testCases: [
      {
        id: "tc1",
        description: "Should establish a WebSocket connection",
        type: "Integration",
        expected: "Connected event emitted"
      }
    ]
  },
  {
    id: "5",
    title: "Automate Testing with Jest",
    description: "Learn how to write unit and integration tests for your JavaScript applications.",
    duration: "3 hours",
    difficulty: "Intermediate",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    technologies: ["Jest", "JavaScript"],
    prerequisites: ["JavaScript basics", "Basic understanding of testing"],
    testCases: [
      {
        id: "tc1",
        description: "Should return correct output for add() function",
        type: "Unit",
        expected: "Correct sum of two numbers"
      }
    ]
  },
  {
    id: "6",
    title: "Build a Portfolio Website",
    description: "Design and deploy a personal portfolio website using HTML, CSS, and JavaScript.",
    duration: "4 hours",
    difficulty: "Beginner",
    thumbnail: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800",
    technologies: ["HTML", "CSS", "JavaScript"],
    prerequisites: ["Basic HTML & CSS", "JavaScript fundamentals"],
    testCases: [
      {
        id: "tc1",
        description: "Should load the homepage correctly",
        type: "Integration",
        expected: "200 OK Response"
      }
    ]
  }
];


export const quizzes = [
  {
    id: "1",
    title: "JavaScript Fundamentals",
    description: "Test your knowledge of JavaScript basics",
    duration: "30 minutes",
    questions: [
      { id: "q1", question: "What is the output of console.log(typeof [])?", options: ["array", "object", "undefined", "null"], correctAnswer: 1, explanation: "In JavaScript, arrays are objects. Therefore typeof [] returns 'object'." },
      { id: "q2", question: "Which keyword is used to declare a constant variable?", options: ["var", "let", "const", "static"], correctAnswer: 2, explanation: "const is used to declare constants in JavaScript." },
      { id: "q3", question: "What does NaN stand for?", options: ["Not a Name", "Not a Number", "Null and Nothing", "New and Next"], correctAnswer: 1, explanation: "NaN stands for Not a Number." },
      { id: "q4", question: "Which method converts JSON to a JavaScript object?", options: ["JSON.stringify", "JSON.parse", "JSON.objectify", "JSON.toJS"], correctAnswer: 1, explanation: "JSON.parse() converts a JSON string into a JavaScript object." },
      { id: "q5", question: "Which symbol is used for single-line comments in JavaScript?", options: ["/* */", "//", "<!-- -->", "**"], correctAnswer: 1, explanation: "// is used for single-line comments." },
      { id: "q6", question: "What is the default behavior of JavaScript functions?", options: ["Return undefined", "Return null", "Return 0", "Throw an error"], correctAnswer: 0, explanation: "By default, functions return undefined if no return statement is present." },
      { id: "q7", question: "Which loop is guaranteed to execute at least once?", options: ["for", "while", "do...while", "forEach"], correctAnswer: 2, explanation: "The do...while loop runs at least once before checking the condition." },
      { id: "q8", question: "What does the spread operator (...) do?", options: ["Spreads elements of an array", "Concatenates arrays", "Reverses an array", "Finds duplicates"], correctAnswer: 0, explanation: "The spread operator expands array elements or object properties." },
      { id: "q9", question: "Which method removes the last element of an array?", options: ["shift", "pop", "push", "unshift"], correctAnswer: 1, explanation: "The pop() method removes the last element from an array." },
      { id: "q10", question: "Which function is used to schedule a function after a delay?", options: ["setTimeout", "setInterval", "requestAnimationFrame", "delayFunction"], correctAnswer: 0, explanation: "setTimeout() schedules a function execution after a specified delay." }
    ],
    totalPoints: 100,
    passingScore: 70
  },
  {
    id: "2",
    title: "React Basics",
    description: "Assess your understanding of React fundamentals",
    duration: "30 minutes",
    questions: [
      { id: "q1", question: "What is JSX?", options: ["JavaScript XML", "JavaScript Extension", "Java Syntax", "JSON Syntax"], correctAnswer: 0, explanation: "JSX stands for JavaScript XML, a syntax extension for React." },
      { id: "q2", question: "What is the use of useState hook?", options: ["Manages component state", "Handles routing", "Manipulates the DOM", "Creates components"], correctAnswer: 0, explanation: "useState is a React hook for managing state in functional components." },
      { id: "q3", question: "Which lifecycle method runs after the component mounts?", options: ["componentDidMount", "componentDidUpdate", "componentWillUnmount", "componentWillMount"], correctAnswer: 0, explanation: "componentDidMount runs after a component is inserted into the DOM." },
      { id: "q4", question: "How do you pass data between components in React?", options: ["Using props", "Using state", "Using DOM manipulation", "Using Redux only"], correctAnswer: 0, explanation: "Props are used to pass data from parent to child components." },
      { id: "q5", question: "What is the virtual DOM?", options: ["A copy of the actual DOM", "A real-time database", "An HTML template", "A backend service"], correctAnswer: 0, explanation: "The virtual DOM is a lightweight copy of the actual DOM used for performance optimization." },
      { id: "q6", question: "Which hook is used for side effects?", options: ["useEffect", "useState", "useRef", "useCallback"], correctAnswer: 0, explanation: "useEffect is used to handle side effects in React components." },
      { id: "q7", question: "What is the purpose of useReducer?", options: ["Manages complex state logic", "Handles animations", "Manages API calls", "Creates reusable components"], correctAnswer: 0, explanation: "useReducer is a React hook for managing complex state logic." },
      { id: "q8", question: "What does the key prop do in lists?", options: ["Gives unique identity", "Applies CSS", "Handles events", "Sorts the list"], correctAnswer: 0, explanation: "Keys in lists help React identify elements efficiently." },
      { id: "q9", question: "What does the useRef hook do?", options: ["Stores a mutable reference", "Handles API requests", "Manages local storage", "Creates event listeners"], correctAnswer: 0, explanation: "useRef provides a way to persist values across renders." },
      { id: "q10", question: "What library is commonly used for state management in React?", options: ["Redux", "Axios", "Bootstrap", "Material UI"], correctAnswer: 0, explanation: "Redux is a popular library for managing state in React applications." }
    ],
    totalPoints: 100,
    passingScore: 70
  }
  // More quizzes covering Node.js, Java, Python, etc.
];


export const jobs = [
  {
    id: "1",
    title: "Full Stack Developer",
    company: "TechCorp Solutions",
    location: "Bangalore, India",
    salary: "₹12-18 LPA",
    experience: "2-4 years",
    skills: ["React", "Node.js", "MongoDB", "Express"],
    description:
      "Looking for a Full Stack Developer with strong MERN stack experience. You will be working on building scalable and performant web applications.",
    postedDate: "2025-03-28",
    type: "Full-time",
    remote: true,
    qualifications: [
      "Bachelor's degree in Computer Science or equivalent",
      "Experience with React.js and Node.js",
      "Knowledge of databases like MongoDB or MySQL",
      "Experience with Git and version control systems"
    ],
    responsibilities: [
      "Developing new user-facing features using React.js",
      "Building reusable code and libraries for future use",
      "Ensuring the technical feasibility of UI/UX designs",
      "Collaborating with other team members and stakeholders"
    ]
  },
  {
    id: "2",
    title: "Backend Developer",
    company: "DataTech Innovations",
    location: "Hyderabad, India",
    salary: "₹8-12 LPA",
    experience: "1-3 years",
    skills: ["Node.js", "Express", "MongoDB"],
    description:
      "We are looking for a Backend Developer to build and maintain our server-side logic. You will also integrate with front-end developers.",
    postedDate: "2025-03-25",
    type: "Full-time",
    remote: false,
    qualifications: [
      "Bachelor's degree in Computer Science or equivalent",
      "Experience with Node.js and Express",
      "Familiarity with database management and optimization"
    ],
    responsibilities: [
      "Developing and maintaining backend services and APIs",
      "Implementing security and data protection",
      "Optimizing server-side performance",
      "Collaborating with front-end developers"
    ]
  },
  {
    id: "3",
    title: "UI/UX Designer",
    company: "Creative Designs Ltd.",
    location: "Mumbai, India",
    salary: "₹10-15 LPA",
    experience: "3-5 years",
    skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping"],
    description:
      "We are looking for a talented UI/UX Designer to create engaging user interfaces for our web and mobile applications.",
    postedDate: "2025-03-20",
    type: "Contract",
    remote: true,
    qualifications: [
      "Bachelor's degree in Design or related field",
      "Experience in creating wireframes, prototypes, and UI designs",
      "Strong proficiency in design tools like Figma, Sketch, and Adobe XD"
    ],
    responsibilities: [
      "Creating user-centered designs based on business and user requirements",
      "Collaborating with product and engineering teams",
      "Conducting user research and testing",
      "Designing intuitive and visually appealing interfaces"
    ]
  },
  // Add more job objects here...
];


export const achievements = [
  {
    id: "1",
    title: "DSA Warrior",
    description: "Solved 50 DSA problems",
    icon: "🏆",
    points: 500,
    criteria: "Complete 50 DSA problems with at least 70% acceptance rate"
  }
  // Add more achievements
];

export const leaderboard = {
  weekly: [
    {
      rank: 1,
      user: "Priya S.",
      points: 2500,
      problemsSolved: 25,
      streak: 7
    }
    // Add more entries
  ],
  monthly: [
    // Similar structure
  ],
  allTime: [
    // Similar structure
  ]
};