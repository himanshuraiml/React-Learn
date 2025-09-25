import { useState, useEffect } from 'react';
import { Progress } from '../types';
import { supabase } from '../lib/supabase';
import { useAuth } from './useAuth';

export function useProgress() {
  const { user, isAuthenticated } = useAuth();
  const [progress, setProgress] = useState<Progress>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated && user) {
      loadProgressFromSupabase();
    } else {
      // Load from localStorage for non-authenticated users
      const savedProgress = localStorage.getItem('react-course-progress');
      if (savedProgress) {
        try {
          setProgress(JSON.parse(savedProgress));
        } catch (error) {
          console.error('Failed to load progress:', error);
        }
      }
    }
  }, [isAuthenticated, user]);

  const loadProgressFromSupabase = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id);

      if (error) throw error;

      const progressMap: Progress = {};
      data?.forEach(item => {
        if (!progressMap[item.lesson_id]) {
          progressMap[item.lesson_id] = {};
        }
        progressMap[item.lesson_id][item.sub_lesson_id] = true;
      });

      setProgress(progressMap);
    } catch (error) {
      console.error('Failed to load progress from Supabase:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveProgressToSupabase = async (lessonId: string, subLessonId: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('user_progress')
        .upsert({
          user_id: user.id,
          lesson_id: lessonId,
          sub_lesson_id: subLessonId,
          updated_at: new Date().toISOString()
        });

      if (error) throw error;
    } catch (error) {
      console.error('Failed to save progress to Supabase:', error);
    }
  };

  const completeSubLesson = async (lessonId: string, subLessonId: string) => {
    const newProgress = {
      ...progress,
      [lessonId]: {
        ...progress[lessonId],
        [subLessonId]: true
      }
    };
    setProgress(newProgress);
    
    if (isAuthenticated && user) {
      await saveProgressToSupabase(lessonId, subLessonId);
    } else {
      localStorage.setItem('react-course-progress', JSON.stringify(newProgress));
    }
  };

  const resetProgress = async () => {
    setProgress({});
    
    if (isAuthenticated && user) {
      try {
        const { error } = await supabase
          .from('user_progress')
          .delete()
          .eq('user_id', user.id);
        
        if (error) throw error;
      } catch (error) {
        console.error('Failed to reset progress in Supabase:', error);
      }
    } else {
      localStorage.removeItem('react-course-progress');
    }
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
    loading,
    completeSubLesson,
    resetProgress,
    isSubLessonCompleted,
    getLessonProgress,
    getTotalProgress
  };
}