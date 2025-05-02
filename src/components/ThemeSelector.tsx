import { useContext } from 'react';
import { ThemeContext, ThemeColor } from './state-management/context/themeContext';

export default function ThemeSelector() {
  const theme = useContext(ThemeContext);
  
  if (!theme) {
    return null;
  }
  
  const { color, setColor } = theme;
  
  const themeOptions: { id: ThemeColor; label: string }[] = [
    { id: 'default', label: 'Default' },
    { id: 'blue', label: 'Blue' },
    { id: 'purple', label: 'Purple' },
    { id: 'green', label: 'Green' },
    { id: 'orange', label: 'Orange' },
  ];
  
  return (
    <div className="theme-selector">
      <h3>Theme</h3>
      <div className="color-options">
        {themeOptions.map((option) => (
          <button
            key={option.id}
            className={`color-btn ${option.id} ${color === option.id ? 'active' : ''}`}
            onClick={() => setColor(option.id)}
            aria-label={`Switch to ${option.label} theme`}
            title={option.label}
          />
        ))}
      </div>
    </div>
  );
}