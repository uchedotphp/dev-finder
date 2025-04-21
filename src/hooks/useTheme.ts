import { useEffect, useState } from 'react';
import { ThemeColor, ThemeMode } from '../components/state-management/context/themeContext';

interface UseThemeProps {
  initialMode?: ThemeMode;
  initialColor?: ThemeColor;
}

const useTheme = ({ initialMode = 'system', initialColor = 'default' }: UseThemeProps = {}) => {
  // Get saved preferences from localStorage or use defaults
  const savedMode = localStorage.getItem('theme-mode') as ThemeMode || initialMode;
  const savedColor = localStorage.getItem('theme-color') as ThemeColor || initialColor;
  
  const [mode, setMode] = useState<ThemeMode>(savedMode);
  const [color, setColor] = useState<ThemeColor>(savedColor);

  const applyTheme = (newMode: ThemeMode, newColor: ThemeColor) => {
    // Remove all theme classes
    document.body.classList.remove('light', 'dark', 'default', 'blue', 'purple', 'green', 'orange');
    
    // Apply mode class
    if (newMode === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.body.classList.add(prefersDark ? 'dark' : 'light');
    } else {
      document.body.classList.add(newMode);
    }
    
    // Apply color theme class
    document.body.classList.add(newColor);
  };

  // Handle mode changes
  const handleModeChange = (newMode: ThemeMode) => {
    setMode(newMode);
    localStorage.setItem('theme-mode', newMode);
  };

  // Handle color theme changes
  const handleColorChange = (newColor: ThemeColor) => {
    setColor(newColor);
    localStorage.setItem('theme-color', newColor);
  };

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = () => {
      if (mode === 'system') {
        applyTheme(mode, color);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    
    // Initial theme application
    applyTheme(mode, color);
    
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [mode, color]);

  // Apply theme when mode or color changes
  useEffect(() => {
    applyTheme(mode, color);
  }, [mode, color]);

  return {
    mode,
    color,
    setMode: handleModeChange,
    setColor: handleColorChange,
  };
};

export default useTheme;
