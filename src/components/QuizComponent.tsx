import React, { useState } from 'react';
import { CheckCircle2, XCircle, RotateCcw, Brain } from 'lucide-react';
import { Quiz } from '../types';

interface QuizComponentProps {
  quiz: Quiz;
  onComplete: (correct: boolean) => void;
  theme: 'light' | 'dark';
}

export default function QuizComponent({ quiz, onComplete, theme }: QuizComponentProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | number>('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    const correct = selectedAnswer === quiz.correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);
    onComplete(correct);
  };

  const handleReset = () => {
    setSelectedAnswer('');
    setShowResult(false);
    setIsCorrect(false);
  };

  const renderQuestionContent = () => {
    switch (quiz.type) {
      case 'multiple-choice':
        return (
          <div className="space-y-3">
            {quiz.options?.map((option, index) => (
              <label
                key={index}
                className={`flex items-center space-x-3 p-3 border-2 rounded-lg cursor-pointer transition-all ${
                  selectedAnswer === index
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
              >
                <input
                  type="radio"
                  name="quiz-answer"
                  value={index}
                  checked={selectedAnswer === index}
                  onChange={() => setSelectedAnswer(index)}
                  className="text-blue-600 focus:ring-blue-500"
                  disabled={showResult}
                />
                <span className="text-gray-900 dark:text-gray-100">{option}</span>
              </label>
            ))}
          </div>
        );

      case 'fill-blank':
        return (
          <div className="space-y-3">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <pre className="text-sm">
                <code>{quiz.code}</code>
              </pre>
            </div>
            <input
              type="text"
              value={selectedAnswer}
              onChange={(e) => setSelectedAnswer(e.target.value)}
              placeholder="Enter your answer..."
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              disabled={showResult}
            />
          </div>
        );

      case 'code-completion':
        return (
          <div className="space-y-3">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <pre className="text-sm">
                <code>{quiz.code}</code>
              </pre>
            </div>
            <textarea
              value={selectedAnswer}
              onChange={(e) => setSelectedAnswer(e.target.value)}
              placeholder="Complete the code..."
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-mono text-sm"
              disabled={showResult}
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
          <Brain className="w-5 h-5 text-purple-600 dark:text-purple-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Quiz</h3>
      </div>

      <div className="mb-6">
        <p className="text-gray-800 dark:text-gray-200 font-medium mb-4">{quiz.question}</p>
        {renderQuestionContent()}
      </div>

      {!showResult ? (
        <button
          onClick={handleSubmit}
          disabled={!selectedAnswer}
          className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors disabled:cursor-not-allowed"
        >
          Submit Answer
        </button>
      ) : (
        <div className="space-y-4">
          <div className={`flex items-start space-x-3 p-4 rounded-lg ${
            isCorrect
              ? 'bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800'
              : 'bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800'
          }`}>
            {isCorrect ? (
              <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
            ) : (
              <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5" />
            )}
            <div>
              <p className={`font-medium ${
                isCorrect
                  ? 'text-green-800 dark:text-green-200'
                  : 'text-red-800 dark:text-red-200'
              }`}>
                {isCorrect ? '🎉 Correct!' : '❌ Not quite right'}
              </p>
              <p className={`text-sm mt-1 ${
                isCorrect
                  ? 'text-green-700 dark:text-green-300'
                  : 'text-red-700 dark:text-red-300'
              }`}>
                {quiz.explanation}
              </p>
            </div>
          </div>
          
          <button
            onClick={handleReset}
            className="flex items-center justify-center space-x-2 w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
        </div>
      )}
    </div>
  );
}