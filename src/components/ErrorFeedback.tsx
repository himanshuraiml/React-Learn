import React, { useEffect, useState } from 'react';
import { AlertTriangle, Info } from 'lucide-react';

interface Error {
  message: string;
  line?: number;
  column?: number;
  type: 'error' | 'warning';
}

interface ErrorFeedbackProps {
  errors: Error[];
  theme: 'light' | 'dark';
}

export default function ErrorFeedback({ errors, theme }: ErrorFeedbackProps) {
  const [visibleErrors, setVisibleErrors] = useState<Error[]>([]);

  useEffect(() => {
    // Debounce error display to avoid too many rapid updates
    const timer = setTimeout(() => {
      setVisibleErrors(errors);
    }, 500);

    return () => clearTimeout(timer);
  }, [errors]);

  const getErrorSuggestion = (message: string): string => {
    if (message.includes('Unexpected token')) {
      if (message.includes('<')) return 'Check for unclosed JSX tags or missing closing brackets.';
      if (message.includes('}')) return 'Make sure all curly braces are properly matched.';
      if (message.includes(')')) return 'Check for missing or extra parentheses.';
    }
    
    if (message.includes('is not defined')) {
      return 'Make sure the variable or function is declared and imported correctly.';
    }
    
    if (message.includes('Cannot read property')) {
      return 'Check if the object exists before accessing its properties.';
    }
    
    if (message.includes('JSX')) {
      return 'Remember to wrap multiple JSX elements in a parent element or React Fragment.';
    }
    
    if (message.includes('props')) {
      return 'Make sure props are passed correctly and used with proper syntax {props.name}.';
    }
    
    return 'Double-check your syntax and make sure all tags are properly closed.';
  };

  if (visibleErrors.length === 0) {
    return null;
  }

  return (
    <div className="space-y-2">
      {visibleErrors.map((error, index) => (
        <div
          key={index}
          className={`border-l-4 p-4 rounded-r-lg ${
            error.type === 'error'
              ? 'bg-red-50 dark:bg-red-900/30 border-red-400 dark:border-red-500'
              : 'bg-yellow-50 dark:bg-yellow-900/30 border-yellow-400 dark:border-yellow-500'
          }`}
        >
          <div className="flex items-start space-x-3">
            <AlertTriangle 
              className={`w-5 h-5 mt-0.5 ${
                error.type === 'error'
                  ? 'text-red-500 dark:text-red-400'
                  : 'text-yellow-500 dark:text-yellow-400'
              }`} 
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <span className={`text-sm font-medium ${
                  error.type === 'error'
                    ? 'text-red-800 dark:text-red-300'
                    : 'text-yellow-800 dark:text-yellow-300'
                }`}>
                  {error.type === 'error' ? 'Error' : 'Warning'}
                </span>
                {error.line && (
                  <span className={`text-xs px-2 py-1 rounded ${
                    error.type === 'error'
                      ? 'bg-red-200 dark:bg-red-800 text-red-700 dark:text-red-300'
                      : 'bg-yellow-200 dark:bg-yellow-800 text-yellow-700 dark:text-yellow-300'
                  }`}>
                    Line {error.line}
                  </span>
                )}
              </div>
              <p className={`text-sm mb-2 ${
                error.type === 'error'
                  ? 'text-red-700 dark:text-red-300'
                  : 'text-yellow-700 dark:text-yellow-300'
              }`}>
                {error.message}
              </p>
              
              <div className={`bg-white dark:bg-gray-800 border rounded p-2 ${
                error.type === 'error'
                  ? 'border-red-200 dark:border-red-700'
                  : 'border-yellow-200 dark:border-yellow-700'
              }`}>
                <div className="flex items-start space-x-2">
                  <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-blue-800 dark:text-blue-300 mb-1">
                      💡 Suggestion:
                    </p>
                    <p className="text-xs text-blue-700 dark:text-blue-400">
                      {getErrorSuggestion(error.message)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}