import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import { Play, Users, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { labs } from '../data/dummyData';
import { getItem, setItem } from '../utils/localStorage';

function LabDetails() {
  const { labId } = useParams();
  const [lab, setLab] = useState(null);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const foundLab = labs.find(l => l.id === labId);
    setLab(foundLab);
    
    // Load saved code from localStorage
    const savedCode = getItem(`lab-${labId}`);
    if (savedCode) {
      setCode(savedCode);
    }
  }, [labId]);

  const runTests = () => {
    setIsRunning(true);
    setOutput(null);

    // Save code to localStorage
    setItem(`lab-${labId}`, code);

    // Simulate test execution
    setTimeout(() => {
      const results = lab.testCases.map(testCase => ({
        ...testCase,
        passed: Math.random() > 0.3, // Simulate random pass/fail
        output: testCase.expected
      }));

      setOutput(results);
      setIsRunning(false);
    }, 1500);
  };

  if (!lab) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        {/* Lab Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900">{lab.title}</h1>
          <p className="mt-2 text-gray-600">{lab.description}</p>
          
          <div className="flex items-center gap-6 mt-4">
            <div className="flex items-center text-gray-500">
              <Clock className="h-5 w-5 mr-2" />
              <span>{lab.duration}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <Users className="h-5 w-5 mr-2" />
              <span>Prerequisites: {lab.prerequisites.join(', ')}</span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {lab.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Lab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Instructions and Tests */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Instructions</h2>
              <div className="prose max-w-none">
                <p>Complete the following tasks:</p>
                <ol>
                  <li>Implement the required functionality</li>
                  <li>Ensure all test cases pass</li>
                  <li>Follow best practices and coding standards</li>
                </ol>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Test Cases</h2>
              <div className="space-y-4">
                {output ? (
                  output.map((result, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg ${
                        result.passed
                          ? 'bg-green-50 border border-green-200'
                          : 'bg-red-50 border border-red-200'
                      }`}
                    >
                      <div className="flex items-center">
                        {result.passed ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                        )}
                        <div>
                          <h3 className="font-medium">{result.description}</h3>
                          <p className="text-sm text-gray-600 mt-1">
                            {result.markdownHint}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-gray-500 py-4">
                    Run your code to see test results
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Code Editor */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 bg-gray-50 border-b flex justify-between items-center">
              <h2 className="font-semibold">Code Editor</h2>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50"
                onClick={runTests}
                disabled={isRunning}
              >
                {isRunning ? (
                  <span className="flex items-center">
                    <Play className="animate-spin h-4 w-4 mr-2" />
                    Running Tests...
                  </span>
                ) : (
                  'Run Tests'
                )}
              </button>
            </div>
            <div className="h-[600px]">
              <Editor
                height="100%"
                defaultLanguage="javascript"
                theme="vs-dark"
                value={code}
                onChange={setCode}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  lineNumbers: 'on',
                  automaticLayout: true,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LabDetails;