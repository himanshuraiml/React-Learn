import { useState, useEffect } from 'react';
import { Achievement } from '../types';

export function useAchievements() {
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('react-course-achievements');
    if (saved) {
      try {
        setUnlockedAchievements(JSON.parse(saved));
      } catch (error) {
        console.error('Failed to load achievements:', error);
      }
    }
  }, []);

  const unlockAchievement = (achievementId: string) => {
    if (!unlockedAchievements.includes(achievementId)) {
      const newUnlocked = [...unlockedAchievements, achievementId];
      setUnlockedAchievements(newUnlocked);
      localStorage.setItem('react-course-achievements', JSON.stringify(newUnlocked));
    }
  };

  const resetAchievements = () => {
    setUnlockedAchievements([]);
    localStorage.removeItem('react-course-achievements');
  };

  const isAchievementUnlocked = (achievementId: string): boolean => {
    return unlockedAchievements.includes(achievementId);
  };

  return {
    unlockedAchievements,
    unlockAchievement,
    resetAchievements,
    isAchievementUnlocked
  };
}