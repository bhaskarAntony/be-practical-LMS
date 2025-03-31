import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import CourseView from './pages/CourseView';
import DSAPlayground from './pages/DSAPlayground';
import ProblemSolving from './pages/ProblemSolving';
import LiveEvents from './pages/LiveEvents';
import Labs from './pages/Labs';
import LabDetails from './pages/LabDetails';
import Profile from './pages/Profile';
import Gamification from './pages/Gamification';
import Quiz from './pages/Quiz';
import QuizAttempt from './pages/QuizAttempt';
import DigitalLibrary from './pages/DigitalLibrary';
import CourseDetail from './pages/CoursesDetails';
import JobListing from './pages/JobListing';
import JobDetails from './pages/JobDetials';
import AffiliateDashboard from './pages/AffiliateDashboard';
import PurchaseHistory from './pages/PurchaseHistory';

function App() {
  localStorage.setItem("user", JSON.stringify({
    name:"Bhaskar babu cm",
    email:"bhaskarbabucm@gmail.com"
  }));
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:courseId" element={<CourseView />} />
              <Route path="/dsa-playground" element={<DSAPlayground />} />
              <Route path="/dsa-playground/:problemId" element={<ProblemSolving />} />
              <Route path="/live-events" element={<LiveEvents />} />
              <Route path="/labs" element={<Labs />} />
              <Route path="/labs/:labId" element={<LabDetails />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/gamification" element={<Gamification />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/quiz/:quizId" element={<QuizAttempt />} />
              <Route path="/digital-library" element={<DigitalLibrary />} />
              <Route path="/courses/:slug/:courseId" element={<CourseDetail />} />
              <Route path="/jobs" element={<JobListing />} />
              <Route path="/job/:jobId" element={<JobDetails />} />
              <Route path="/affliate" element={<AffiliateDashboard />} />
              <Route path="/history" element={<PurchaseHistory />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;