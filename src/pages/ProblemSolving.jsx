import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import { Play, CheckCircle, AlertCircle } from 'lucide-react';
import { dsaProblems } from '../data/dummyData';
import { getItem, setItem } from '../utils/localStorage';

function ProblemSolving() {
  const { problemId } = useParams();
  const [problem, setProblem] = useState(null);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const foundProblem = dsaProblems.find(p => p.id === problemId);
    setProblem(foundProblem);
    
    // Load saved code from localStorage
    const savedCode = getItem(`code-${problemId}`);
    if (savedCode) {
      setCode(savedCode);
    } else {
      setCode(foundProblem?.solution || '');
    }
  }, [problemId]);

  const runCode = () => {
    setIsRunning(true);
    setOutput(null);

    try {
      // Save code to localStorage
      setItem(`code-${problemId}`, code);

      // Simulate code execution
      setTimeout(() => {
        const results = problem.testCases.map(testCase => {
          try {
            const fn = new Function('return ' + code)();
            const result = fn(testCase.input, testCase.target);
            return {
              input: testCase.input,
              expected: testCase.expected,
              output: result,
              passed: JSON.stringify(result) === JSON.stringify(testCase.expected)
            };
          } catch (error) {
            return {
              input: testCase.input,
              expected: testCase.expected,
              error: error.message,
              passed: false
            };
          }
        });

        setOutput(results);
        setIsRunning(false);
      }, 1000);
    } catch (error) {
      setOutput([{ error: error.message, passed: false }]);
      setIsRunning(false);
    }
  };

  if (!problem) return <div>Loading...</div>;

  return (
    <div className="flex h-full">
      {/* Problem description */}
      <div className="w-1/2 p-6 overflow-y-auto border-r">
        <h1 className="text-2xl font-bold mb-4">{problem.title}</h1>
        <div className="flex items-center gap-4 mb-6">
          <span className={`px-2 py-1 rounded-full text-sm font-medium ${
            problem.difficulty === 'Easy'
              ? 'bg-green-100 text-green-800'
              : problem.difficulty === 'Medium'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-red-800'
          }`}>
            {problem.difficulty}
          </span>
          <span className="text-sm text-gray-500">
            Acceptance: {problem.acceptance}
          </span>
        </div>

        <div className="prose max-w-none">
          <p>{problem.description}</p>

          <h3>Examples:</h3>
          {problem.examples.map((example, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg mb-4">
              <p><strong>Input:</strong> {example.input}</p>
              <p><strong>Output:</strong> {example.output}</p>
              {example.explanation && (
                <p><strong>Explanation:</strong> {example.explanation}</p>
              )}
            </div>
          ))}

          <h3>Hints:</h3>
          <ul>
            {problem.hints.map((hint, index) => (
              <li key={index}>{hint}</li>
            ))}
          </ul>

          <h3>Companies:</h3>
          <div className="flex flex-wrap gap-2">
            {problem.companies.map((company, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 rounded-full text-sm"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Code editor and output */}
      <div className="w-1/2 flex flex-col">
        <div className="flex-1">
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

        <div className="h-64 border-t">
          <div className="flex items-center justify-between p-4 border-b bg-gray-50">
            <h3 className="font-medium">Test Results</h3>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50"
              onClick={runCode}
              disabled={isRunning}
            >
              {isRunning ? 'Running...' : 'Run Code'}
            </button>
          </div>

          <div className="p-4 overflow-y-auto h-[calc(100%-57px)]">
            {output ? (
              <div className="space-y-4">
                {output.map((result, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg ${
                      result.passed
                        ? 'bg-green-50 border border-green-200'
                        : 'bg-red-50 border border-red-200'
                    }`}
                  >
                    <div className="flex items-center mb-2">
                      {result.passed ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                      )}
                      <span className="font-medium">
                        Test Case {index + 1}: {result.passed ? 'Passed' : 'Failed'}
                      </span>
                    </div>
                    {result.error ? (
                      <pre className="text-sm text-red-600 mt-2">{result.error}</pre>
                    ) : (
                      <>
                        <div className="text-sm">
                          <span className="text-gray-600">Input: </span>
                          <code>{JSON.stringify(result.input)}</code>
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-600">Expected: </span>
                          <code>{JSON.stringify(result.expected)}</code>
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-600">Output: </span>
                          <code>{JSON.stringify(result.output)}</code>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500 mt-8">
                Run your code to see the results
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProblemSolving;