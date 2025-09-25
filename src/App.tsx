import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import LessonContent from './components/LessonContent';
import { lessons, achievements } from './data/lessons';
import { useProgress } from './hooks/useProgress';
import { useTheme } from './hooks/useTheme';
import { useAchievements } from './hooks/useAchievements';

function App() {
  const [currentLessonId, setCurrentLessonId] = useState('components');
  const [currentSubLessonId, setCurrentSubLessonId] = useState('intro-components');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  const {
    progress,
    completeSubLesson,
    resetProgress,
    isSubLessonCompleted,
    getLessonProgress,
    getTotalProgress
  } = useProgress();
  
  const { theme, toggleTheme } = useTheme();
  
  const {
    unlockedAchievements,
    unlockAchievement,
    resetAchievements,
    isAchievementUnlocked
  } = useAchievements();

  const handleSubLessonSelect = (lessonId: string, subLessonId: string) => {
    setCurrentLessonId(lessonId);
    setCurrentSubLessonId(subLessonId);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const handleAchievementUnlock = (achievementId: string) => {
    const achievement = achievements.find(a => a.id === achievementId);
    if (achievement && !isAchievementUnlocked(achievementId)) {
      unlockAchievement(achievementId);
    }
  };

  const currentLesson = lessons.find(lesson => lesson.id === currentLessonId);
  const currentSubLesson = currentLesson?.subLessons.find(sub => sub.id === currentSubLessonId);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Sidebar */}
      <div className={`transition-all duration-300 ease-in-out ${
        isSidebarOpen ? 'w-80' : 'w-0'
      }`}>
        <div className={`h-full overflow-hidden ${isSidebarOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
      <Sidebar
        lessons={lessons}
        currentLessonId={currentLessonId}
        currentSubLessonId={currentSubLessonId}
        onSubLessonSelect={handleSubLessonSelect}
        progress={progress}
        onResetProgress={resetProgress}
        isSubLessonCompleted={isSubLessonCompleted}
        getLessonProgress={getLessonProgress}
        getTotalProgress={getTotalProgress}
        theme={theme}
        onToggleTheme={toggleTheme}
        onToggleSidebar={toggleSidebar}
        isOpen={isSidebarOpen}
      />
        </div>
      </div>
      
      <main className="flex-1 flex flex-col">
        {currentSubLesson && (
          <LessonContent
            subLesson={currentSubLesson}
            onComplete={() => completeSubLesson(currentLessonId, currentSubLessonId)}
            isCompleted={isSubLessonCompleted(currentLessonId, currentSubLessonId)}
            theme={theme}
            onToggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
            onAchievementUnlock={handleAchievementUnlock}
            unlockedAchievements={unlockedAchievements}
          />
        )}
      </main>
    </div>
  );
}

export default App;