import React, { useState } from 'react';
import { User, LogOut, Settings, Trophy, BookOpen } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useProgress } from '../hooks/useProgress';
import { useAchievements } from '../hooks/useAchievements';
import { lessons } from '../data/lessons';

interface UserProfileProps {
  theme: 'light' | 'dark';
}

export default function UserProfile({ theme }: UserProfileProps) {
  const { user, signOut } = useAuth();
  const { getTotalProgress } = useProgress();
  const { unlockedAchievements } = useAchievements();
  const [showDropdown, setShowDropdown] = useState(false);

  if (!user) return null;

  const totalProgress = getTotalProgress(lessons);
  const totalAchievements = unlockedAchievements.length;

  const handleSignOut = async () => {
    await signOut();
    setShowDropdown(false);
  };

  const getDisplayName = () => {
    if (user.user_metadata?.full_name) {
      return user.user_metadata.full_name;
    }
    if (user.email) {
      return user.email.split('@')[0];
    }
    return 'User';
  };

  const getAvatarUrl = () => {
    return user.user_metadata?.avatar_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(getDisplayName())}&background=3b82f6&color=fff`;
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center space-x-2 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
      >
        <img
          src={getAvatarUrl()}
          alt={getDisplayName()}
          className="w-8 h-8 rounded-full"
        />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {getDisplayName()}
        </span>
      </button>

      {showDropdown && (
        <div className="absolute right-0 top-12 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <img
                src={getAvatarUrl()}
                alt={getDisplayName()}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {getDisplayName()}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {user.email}
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg">
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-xs text-blue-600 dark:text-blue-400">Progress</span>
                </div>
                <p className="text-lg font-bold text-blue-800 dark:text-blue-200">
                  {totalProgress}%
                </p>
              </div>
              
              <div className="bg-yellow-50 dark:bg-yellow-900/30 p-3 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Trophy className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                  <span className="text-xs text-yellow-600 dark:text-yellow-400">Achievements</span>
                </div>
                <p className="text-lg font-bold text-yellow-800 dark:text-yellow-200">
                  {totalAchievements}
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={handleSignOut}
              className="w-full flex items-center space-x-2 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}