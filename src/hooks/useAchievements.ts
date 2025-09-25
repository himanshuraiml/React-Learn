import { useState, useEffect } from 'react';
import { Achievement } from '../types';
import { supabase } from '../lib/supabase';
import { useAuth } from './useAuth';

export function useAchievements() {
  const { user, isAuthenticated } = useAuth();
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated && user) {
      loadAchievementsFromSupabase();
    } else {
      const saved = localStorage.getItem('react-course-achievements');
      if (saved) {
        try {
          setUnlockedAchievements(JSON.parse(saved));
        } catch (error) {
          console.error('Failed to load achievements:', error);
        }
      }
    }
  }, [isAuthenticated, user]);

  const loadAchievementsFromSupabase = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('user_achievements')
        .select('achievement_id')
        .eq('user_id', user.id);

      if (error) throw error;

      const achievementIds = data?.map(item => item.achievement_id) || [];
      setUnlockedAchievements(achievementIds);
    } catch (error) {
      console.error('Failed to load achievements from Supabase:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveAchievementToSupabase = async (achievementId: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('user_achievements')
        .upsert({
          user_id: user.id,
          achievement_id: achievementId
        });

      if (error) throw error;
    } catch (error) {
      console.error('Failed to save achievement to Supabase:', error);
    }
  };

  const unlockAchievement = async (achievementId: string) => {
    if (!unlockedAchievements.includes(achievementId)) {
      const newUnlocked = [...unlockedAchievements, achievementId];
      setUnlockedAchievements(newUnlocked);
      
      if (isAuthenticated && user) {
        await saveAchievementToSupabase(achievementId);
      } else {
        localStorage.setItem('react-course-achievements', JSON.stringify(newUnlocked));
      }
    }
  };

  const resetAchievements = async () => {
    setUnlockedAchievements([]);
    
    if (isAuthenticated && user) {
      try {
        const { error } = await supabase
          .from('user_achievements')
          .delete()
          .eq('user_id', user.id);
        
        if (error) throw error;
      } catch (error) {
        console.error('Failed to reset achievements in Supabase:', error);
      }
    } else {
      localStorage.removeItem('react-course-achievements');
    }
  };

  const isAchievementUnlocked = (achievementId: string): boolean => {
    return unlockedAchievements.includes(achievementId);
  };

  return {
    unlockedAchievements,
    loading,
    unlockAchievement,
    resetAchievements,
    isAchievementUnlocked
  };
}