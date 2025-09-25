import React, { useState } from 'react';
import { Lightbulb, Eye, HelpCircle } from 'lucide-react';
import { Hint } from '../types';

interface HintSystemProps {
  hints: Hint[];
  onShowSolution: () => void;
  theme: 'light' | 'dark';
}

export default function HintSystem({ hints, onShowSolution, theme }: HintSystemProps) {
  const [currentHintIndex, setCurrentHintIndex] = useState(-1);
  const [showingSolution, setShowingSolution] = useState(false);

  const showNextHint = () => {
    if (currentHintIndex < hints.length - 1) {
      setCurrentHintIndex(currentHintIndex + 1);
    }
  };

  const handleShowSolution = () => {
    setShowingSolution(true);
    onShowSolution();
  };

  const sortedHints = hints.sort((a, b) => a.order - b.order);
  const hasMoreHints = currentHintIndex < sortedHints.length - 1;

  return (
    <div className="space-y-3">
      {/* Hint Button */}
      {!showingSolution && hasMoreHints && (
        <button
          onClick={showNextHint}
          className="flex items-center space-x-2 px-4 py-2 bg-yellow-100 hover:bg-yellow-200 dark:bg-yellow-900 dark:hover:bg-yellow-800 text-yellow-800 dark:text-yellow-200 rounded-lg transition-colors"
        >
          <Lightbulb className="w-4 h-4" />
          <span>Get Hint {currentHintIndex + 2}</span>
        </button>
      )}

      {/* Show Solution Button */}
      {!showingSolution && currentHintIndex >= Math.min(2, sortedHints.length - 1) && (
        <button
          onClick={handleShowSolution}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800 text-blue-800 dark:text-blue-200 rounded-lg transition-colors"
        >
          <Eye className="w-4 h-4" />
          <span>Show Solution</span>
        </button>
      )}

      {/* Hints Display */}
      {currentHintIndex >= 0 && (
        <div className="space-y-2">
          {sortedHints.slice(0, currentHintIndex + 1).map((hint, index) => (
            <div key={hint.id} className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3">
              <div className="flex items-start space-x-2">
                <HelpCircle className="w-4 h-4 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                    Hint {index + 1}:
                  </span>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                    {hint.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {showingSolution && (
        <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-3">
          <div className="flex items-start space-x-2">
            <Eye className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5" />
            <div>
              <span className="text-sm font-medium text-green-800 dark:text-green-200">
                💡 Solution Revealed
              </span>
              <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                The solution is now displayed in the editor. Study the code to understand how it works!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}