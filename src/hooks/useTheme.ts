import { useState, useEffect } from 'react';
import { Theme } from '../types';

export function useTheme() {
  const [theme, setTheme] = useState<Theme['mode']>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('react-course-theme') as Theme['mode'];
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Check system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(systemPrefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('react-course-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme };
}