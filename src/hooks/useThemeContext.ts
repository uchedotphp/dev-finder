import { useContext } from 'react';
import { ThemeContext, ThemeContextProps } from '../components/state-management/context/themeContext';

export const useThemeContext = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  
  return context;
};