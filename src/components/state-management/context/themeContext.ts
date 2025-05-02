import { createContext } from 'react';

export type ThemeMode = 'light' | 'dark' | 'system';
export type ThemeColor = 'default' | 'blue' | 'purple' | 'green' | 'orange';

export interface ThemeContextProps {
  mode: ThemeMode;
  color: ThemeColor;
  setMode: (mode: ThemeMode) => void;
  setColor: (color: ThemeColor) => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);
