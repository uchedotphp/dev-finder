import { useContext } from 'react';
import Button from './button';
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
          <Button
            disabled={!theme}
            key={value}
            className={`mode-btn ${mode === value ? 'active' : ''}`}
            onclick={() => handleThemeChange(value as ThemeMode)}
          >
            {name}
          </Button>
        ))}
      </div>
    </section>
  );
}
