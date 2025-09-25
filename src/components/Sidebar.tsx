import React, { useState } from 'react';
import { Book, CheckCircle, RotateCcw, ChevronDown, ChevronRight, Sun, Moon, X } from 'lucide-react';
import { Lesson, Progress } from '../types';

interface SidebarProps {
  lessons: Lesson[];
  currentLessonId: string;
  currentSubLessonId: string;
  onSubLessonSelect: (lessonId: string, subLessonId: string) => void;
  progress: Progress;
  onResetProgress: () => void;
  isSubLessonCompleted: (lessonId: string, subLessonId: string) => boolean;
  getLessonProgress: (lessonId: string, totalSubLessons: number) => number;
  getTotalProgress: (lessons: Lesson[]) => number;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onToggleSidebar: () => void;
  isOpen: boolean;
}

export default function Sidebar({
  lessons,
  currentLessonId,
  currentSubLessonId,
  onSubLessonSelect,
  progress,
  onResetProgress,
  isSubLessonCompleted,
  getLessonProgress,
  getTotalProgress,
  theme,
  onToggleTheme,
  onToggleSidebar,
  isOpen
}: SidebarProps) {
  const [expandedLessons, setExpandedLessons] = useState<Set<string>>(new Set([currentLessonId]));

  const toggleLesson = (lessonId: string) => {
    const newExpanded = new Set(expandedLessons);
    if (newExpanded.has(lessonId)) {
      newExpanded.delete(lessonId);
    } else {
      newExpanded.add(lessonId);
    }
    setExpandedLessons(newExpanded);
  };

  const totalProgress = getTotalProgress(lessons);

  return (
    <div className="w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col h-full">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Book className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">React Course</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">Interactive Learning</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              ) : (
                <Sun className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              )}
            </button>
            <button
              onClick={onToggleSidebar}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
            >
              <X className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Overall Progress</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">{totalProgress}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${totalProgress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Lessons */}
      <div className="flex-1 overflow-y-auto">
        <nav className="p-4">
          {lessons.map((lesson) => {
            const isExpanded = expandedLessons.has(lesson.id);
            const lessonProgress = getLessonProgress(lesson.id, lesson.subLessons.length);
            
            return (
              <div key={lesson.id} className="mb-2">
                {/* Lesson Header */}
                <button
                  onClick={() => toggleLesson(lesson.id)}
                  className="w-full flex items-center justify-between p-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-gray-300 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-600 transition-all"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-lg">
                      {lesson.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{lesson.title}</h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{lesson.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {lessonProgress}%
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-gray-500" />
                    )}
                  </div>
                </button>

                {/* Sub-lessons */}
                {isExpanded && (
                  <div className="mt-2 ml-4 space-y-1">
                    {lesson.subLessons.map((subLesson, index) => {
                      const isCompleted = isSubLessonCompleted(lesson.id, subLesson.id);
                      const isCurrent = currentLessonId === lesson.id && currentSubLessonId === subLesson.id;
                      
                      return (
                        <button
                          key={subLesson.id}
                          onClick={() => onSubLessonSelect(lesson.id, subLesson.id)}
                          className={`w-full text-left p-2 rounded-md transition-all text-sm ${
                            isCurrent
                              ? 'bg-blue-50 dark:bg-blue-900 text-blue-800 dark:text-blue-200 border-2 border-blue-200 dark:border-blue-700'
                              : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="flex items-center justify-center w-5 h-5 bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium">
                                {index + 1}
                              </span>
                              <span className="font-medium">{subLesson.title}</span>
                            </div>
                            {isCompleted && (
                              <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                            )}
                          </div>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 ml-7">
                            {subLesson.description}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={onResetProgress}
          className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset Progress</span>
        </button>
      </div>
    </div>
  );
}