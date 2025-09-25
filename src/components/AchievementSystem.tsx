import React from 'react';
import { Trophy, Star, Zap, Award } from 'lucide-react';
import { Achievement } from '../types';

interface AchievementSystemProps {
  achievements: Achievement[];
  unlockedAchievements: string[];
  theme: 'light' | 'dark';
}

export default function AchievementSystem({ 
  achievements, 
  unlockedAchievements, 
  theme 
}: AchievementSystemProps) {
  const getAchievementIcon = (icon: string) => {
    switch (icon) {
      case '🏅': return Trophy;
      case '⭐': return Star;
      case '⚡': return Zap;
      default: return Award;
    }
  };

  const recentlyUnlocked = achievements.filter(achievement => 
    unlockedAchievements.includes(achievement.id)
  ).slice(-3);

  if (recentlyUnlocked.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      {recentlyUnlocked.map((achievement) => {
        const IconComponent = getAchievementIcon(achievement.icon);
        
        return (
          <div
            key={achievement.id}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded-lg shadow-lg max-w-sm animate-slide-in"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <IconComponent className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm">🎉 Achievement Unlocked!</h4>
                <p className="font-semibold">{achievement.title}</p>
                <p className="text-xs text-yellow-100 mt-1">{achievement.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}