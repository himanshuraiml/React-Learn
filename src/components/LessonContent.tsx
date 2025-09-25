import React, { useState } from 'react';
import { RotateCcw, Eye, CheckCircle2, Lightbulb, Target, BookOpen, Menu } from 'lucide-react';
import SandpackEditor from './SandpackEditor';
import HintSystem from './HintSystem';
import QuizComponent from './QuizComponent';
import VisualAidComponent from './VisualAidComponent';
import AchievementSystem from './AchievementSystem';
import { SubLesson } from '../types';

interface LessonContentProps {
  subLesson: SubLesson;
  onComplete: () => void;
  isCompleted: boolean;
  theme: 'light' | 'dark';
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
  onAchievementUnlock: (achievementId: string) => void;
  unlockedAchievements: string[];
}

export default function LessonContent({ 
  subLesson, 
  onComplete, 
  isCompleted, 
  theme, 
  onToggleSidebar, 
  isSidebarOpen,
  onAchievementUnlock,
  unlockedAchievements 
}: LessonContentProps) {
  const [currentFiles, setCurrentFiles] = useState(subLesson.files);
  const [showSolution, setShowSolution] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleReset = () => {
    setCurrentFiles(subLesson.files);
    setShowSolution(false);
    setQuizCompleted(false);
  };

  const handleShowSolution = () => {
    setCurrentFiles(subLesson.solutionFiles);
    setShowSolution(true);
  };

  const handleQuizComplete = (correct: boolean) => {
    setQuizCompleted(true);
    if (correct && subLesson.achievementIds) {
      subLesson.achievementIds.forEach(id => onAchievementUnlock(id));
    }
  };

  const handleLessonComplete = () => {
    onComplete();
    if (subLesson.achievementIds) {
      subLesson.achievementIds.forEach(id => onAchievementUnlock(id));
    }
  };
  return (
    <div className="flex-1 flex flex-col">
      <AchievementSystem
        achievements={[]} // This will be passed from parent with all achievements
        unlockedAchievements={unlockedAchievements}
        theme={theme}
      />

      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {!isSidebarOpen && (
              <button
                onClick={onToggleSidebar}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
              >
                <Menu className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            )}
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{subLesson.title}</h1>
            {isCompleted && (
              <span className="inline-flex items-center space-x-1 px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span>Completed</span>
              </span>
            )}
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleReset}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset</span>
            </button>
            {!isCompleted && (
              <button
                onClick={handleLessonComplete}
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Mark Complete</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        {/* Top: Explanation */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Explanation */}
            <div className="lg:col-span-2">
              <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-2">What you'll learn</h3>
                    <p className="text-blue-800 dark:text-blue-300 text-sm leading-relaxed">{subLesson.explanation}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Concepts */}
            {subLesson.concepts && (
              <div className="bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Lightbulb className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-200 mb-2">Key Concepts</h3>
                    <ul className="space-y-1">
                      {subLesson.concepts.map((concept, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-purple-800 dark:text-purple-300 text-sm">{concept}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Visual Aid */}
          {subLesson.visualAid && (
            <VisualAidComponent
              visualAid={subLesson.visualAid}
              theme={theme}
            />
          )}

          {/* Hint System */}
          <HintSystem
            hints={subLesson.hints}
            onShowSolution={handleShowSolution}
            theme={theme}
          />
        </div>

        {/* Middle: Split Editor and Preview */}
        <div className="flex-1 flex">
          <SandpackEditor
            subLesson={{...subLesson, files: showSolution ? subLesson.solutionFiles : currentFiles}}
            theme={theme}
          />
        </div>

        {/* Bottom: Challenge */}
        <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-6 py-4 space-y-6">
          <div className="bg-orange-50 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Target className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-200 mb-2">🎯 Challenge</h3>
                <p className="text-orange-800 dark:text-orange-300 text-sm leading-relaxed">{subLesson.task}</p>
              </div>
            </div>
          </div>

          {/* Quiz */}
          {subLesson.quiz && (
            <QuizComponent
              quiz={subLesson.quiz}
              onComplete={handleQuizComplete}
              theme={theme}
            />
          )}
        </div>
      </div>
    </div>
  );
}