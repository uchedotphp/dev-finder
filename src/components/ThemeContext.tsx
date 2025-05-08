import { ReactNode } from 'react';
import useTheme from '../hooks/useTheme';
import { ThemeContext } from './state-management/context/themeContext';

interface ThemeContextProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeContextProps) => {
  const themeState = useTheme({});
  return (
    <ThemeContext.Provider value={themeState}>
      {children}
    </ThemeContext.Provider>
  );
};
