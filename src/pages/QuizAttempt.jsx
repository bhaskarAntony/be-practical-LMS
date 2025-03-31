import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, AlertCircle } from 'lucide-react';
import { quizzes } from '../data/dummyData';
import { getItem, setItem } from '../utils/localStorage';

function QuizAttempt() {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const foundQuiz = quizzes.find(q => q.id === quizId);
    setQuiz(foundQuiz);
    setTimeLeft(parseInt(foundQuiz?.duration) * 60);
  }, [quizId]);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (questionId, answerIndex) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const handleSubmit = () => {
    const results = quiz.questions.map(question => ({
      question: question.question,
      correct: answers[question.id] === question.correctAnswer
    }));

    const correctAnswers = results.filter(r => r.correct).length;
    const percentage = (correctAnswers / quiz.questions.length) * 100;
    const passed = percentage >= quiz.passingScore;

    const quizResult = {
      quizId,
      score: percentage,
      passed,
      completedAt: new Date().toISOString(),
      answers
    };

      // Save result to localStorage
      const userProgress = getItem('progress') || {};
      setItem('progress', {
        ...userProgress,
        quizzes: {
          ...userProgress.quizzes,
          [quizId]: quizResult
        }
      });

    setScore(quizResult);
    setIsSubmitted(true);
  };

  if (!quiz) return <div>Loading...</div>;

  if (isSubmitted) {
    return (
      <>
      <div className="max-w-3xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-4">Quiz Results</h2>
          <div className={`p-4 rounded-lg ${
            score.passed ? 'bg-green-50' : 'bg-red-50'
          }`}>
            <p className="text-lg font-medium">
              Your Score: {score.score.toFixed(1)}%
            </p>
            <p className="mt-2">
              {score.passed
                ? 'Congratulations! You passed the quiz.'
                : 'Keep practicing! You can retake the quiz to improve your score.'}
            </p>
          </div>

          <div className="mt-6 space-y-4">
            {quiz.questions.map((question, index) => (
              <div
                key={question.id}
                className={`p-4 rounded-lg ${
                  answers[question.id] === question.correctAnswer
                    ? 'bg-green-50'
                    : 'bg-red-50'
                }`}
              >
                <p className="font-medium">Question {index + 1}</p>
                <p className="mt-2">{question.question}</p>
                <div className="mt-2">
                  <p className="text-sm text-gray-600">
                    Your answer: {question.options[answers[question.id]]}
                  </p>
                  <p className="text-sm text-gray-600">
                    Correct answer: {question.options[question.correctAnswer]}
                  </p>
                </div>
                {question.explanation && (
                  <p className="mt-2 text-sm text-gray-600">
                    Explanation: {question.explanation}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between">
            <button
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
              onClick={() => navigate('/quiz')}
            >
              Back to Quizzes
            </button>
            <button
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              onClick={() => window.location.reload()}
            >
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
      </>
    )
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">{quiz.title}</h1>
          <div className="flex items-center text-gray-600">
            <Clock className="h-5 w-5 mr-2" />
            <span className="font-medium">{formatTime(timeLeft)}</span>
          </div>
        </div>

        {timeLeft <= 300 && (
          <div className="mb-6 p-4 bg-red-50 rounded-lg flex items-center">
            <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
            <span className="text-red-600">Less than 5 minutes remaining!</span>
          </div>
        )}

        <div>
          <p className="font-medium mb-4">
            Question {currentQuestionIndex + 1} of {quiz.questions.length}
          </p>
          <p className="text-lg mb-4">{quiz.questions[currentQuestionIndex].question}</p>
          <div className="space-y-2">
            {quiz.questions[currentQuestionIndex].options.map((option, optionIndex) => (
              <label
                key={optionIndex}
                className={`block p-4 rounded-lg border cursor-pointer hover:bg-gray-50 ${
                  answers[quiz.questions[currentQuestionIndex].id] === optionIndex
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-gray-200'
                }`}
              >
                <input
                  type="radio"
                  name={`question-${quiz.questions[currentQuestionIndex].id}`}
                  value={optionIndex}
                  checked={answers[quiz.questions[currentQuestionIndex].id] === optionIndex}
                  onChange={() => handleAnswer(quiz.questions[currentQuestionIndex].id, optionIndex)}
                  className="sr-only"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <button
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
            onClick={() => setCurrentQuestionIndex(prev => Math.max(prev - 1, 0))}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>

          <button
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
            onClick={() => setCurrentQuestionIndex(prev => Math.min(prev + 1, quiz.questions.length - 1))}
            disabled={currentQuestionIndex === quiz.questions.length - 1}
          >
            Next
          </button>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
            onClick={handleSubmit}
            disabled={Object.keys(answers).length !== quiz.questions.length}
          >
            Submit Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizAttempt;
