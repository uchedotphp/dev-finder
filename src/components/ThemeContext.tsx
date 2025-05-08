import { ReactNode } from 'react';
import useTheme from '../hooks/useTheme';
import { ThemeContext } from './state-management/context/themeContext';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const themeState = useTheme({});
  return (
    <ThemeContext.Provider value={themeState}>{children}</ThemeContext.Provider>
  );
};
