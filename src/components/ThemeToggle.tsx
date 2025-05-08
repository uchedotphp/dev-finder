import { useContext } from 'react';
import {
  ThemeContext,
  ThemeMode,
} from './state-management/context/themeContext';

export default function ThemeToggle() {
  const theme = useContext(ThemeContext);

  if (!theme) {
    return null;
  }

  const { mode, setMode } = theme;

  const themes = [
    {
      name: 'Light',
      value: 'light',
    },
    {
      name: 'Dark',
      value: 'dark',
    },
    {
      name: 'System',
      value: 'system',
    },
  ];

  const handleThemeChange = (newMode: ThemeMode) => {
    setMode(newMode);
  };

  return (
    <section className="theme-toggle">
      <div className="modes">
        {themes.map(({ name, value }) => (
          <button
            key={value}
            className={`mode-btn ${mode === value ? 'active' : ''}`}
            onClick={() => handleThemeChange(value as ThemeMode)}
          >
            {name}
          </button>
        ))}
      </div>
    </section>
  );
}
