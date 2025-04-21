import { useContext } from 'react';
import { ThemeContext, ThemeMode } from './state-management/context/themeContext';

export default function ThemeToggle() {
  const theme = useContext(ThemeContext);
  
  if (!theme) {
    return null;
  }
  
  const { mode, setMode } = theme;
  
  const handleThemeChange = (newMode: ThemeMode) => {
    setMode(newMode);
  };
  
  return (
    <div className="theme-toggle">
      <div className="modes">
        <button 
          className={`mode-btn ${mode === 'light' ? 'active' : ''}`}
          onClick={() => handleThemeChange('light')}
        >
          Light
        </button>
        <button 
          className={`mode-btn ${mode === 'dark' ? 'active' : ''}`}
          onClick={() => handleThemeChange('dark')}
        >
          Dark
        </button>
        <button 
          className={`mode-btn ${mode === 'system' ? 'active' : ''}`}
          onClick={() => handleThemeChange('system')}
        >
          System
        </button>
      </div>
    </div>
  );
}