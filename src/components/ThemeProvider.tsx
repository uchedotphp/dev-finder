import { ReactNode } from 'react';
import { ThemeContext } from './state-management/context/themeContext';
import useTheme from '../hooks/useTheme';

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const themeState = useTheme();
  
  return (
    <ThemeContext.Provider value={themeState}>
      {children}
    </ThemeContext.Provider>
  );
}