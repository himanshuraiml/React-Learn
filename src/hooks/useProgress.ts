import { useState, useEffect } from 'react';
import { Progress } from '../types';

export function useProgress() {
  const [progress, setProgress] = useState<Progress>({});

  useEffect(() => {
    const savedProgress = localStorage.getItem('react-course-progress');
    if (savedProgress) {
      try {
        setProgress(JSON.parse(savedProgress));
      } catch (error) {
        console.error('Failed to load progress:', error);
      }
    }
  }, []);

  const completeSubLesson = (lessonId: string, subLessonId: string) => {
    const newProgress = {
      ...progress,
      [lessonId]: {
        ...progress[lessonId],
        [subLessonId]: true
      }
    };
    setProgress(newProgress);
    localStorage.setItem('react-course-progress', JSON.stringify(newProgress));
  };

  const resetProgress = () => {
    setProgress({});
    localStorage.removeItem('react-course-progress');
  };

  const isSubLessonCompleted = (lessonId: string, subLessonId: string): boolean => {
    return progress[lessonId]?.[subLessonId] || false;
  };

  const getLessonProgress = (lessonId: string, totalSubLessons: number): number => {
    const lessonProgress = progress[lessonId] || {};
    const completedCount = Object.values(lessonProgress).filter(Boolean).length;
    return Math.round((completedCount / totalSubLessons) * 100);
  };

  const getTotalProgress = (lessons: any[]): number => {
    let totalSubLessons = 0;
    let completedSubLessons = 0;
    
    lessons.forEach(lesson => {
      totalSubLessons += lesson.subLessons.length;
      const lessonProgress = progress[lesson.id] || {};
      completedSubLessons += Object.values(lessonProgress).filter(Boolean).length;
    });
    
    return totalSubLessons > 0 ? Math.round((completedSubLessons / totalSubLessons) * 100) : 0;
  };

  return {
    progress,
    completeSubLesson,
    resetProgress,
    isSubLessonCompleted,
    getLessonProgress,
    getTotalProgress
  };
}