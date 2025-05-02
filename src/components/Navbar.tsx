import { IoMoon } from 'react-icons/io5';
import { IoSunny } from 'react-icons/io5';
import { useContext } from 'react';
import { ThemeContext } from './state-management/context/themeContext';

interface NavbarProps {
  title: string;
  currentMode: string;
}

const Navbar = ({ title }: NavbarProps) => {
  const theme = useContext(ThemeContext);
  
  if (!theme) {
    return (
      <nav className="w-full flex justify-between items-center">
        <h2 className="text-font-1 text-xl tracking-tighter">{title}</h2>
      </nav>
    );
  }
  
  const { mode } = theme;
  
  return (
    <nav className="w-full flex justify-between items-center">
      <h2 className="text-font-1 text-xl tracking-tighter">{title}</h2>

      <div className="flex items-center">
        {mode === 'dark' && (
          <span className="flex items-center space-x-3 text-font-1">
            <IoMoon size="20" />
          </span>
        )}
        {mode === 'light' && (
          <span className="flex items-center space-x-3 text-font-1">
            <IoSunny size="20" />
          </span>
        )}
        {mode === 'system' && (
          <span className="flex items-center space-x-3 text-font-1">
            {window.matchMedia('(prefers-color-scheme: dark)').matches ? (
              <IoMoon size="20" />
            ) : (
              <IoSunny size="20" />
            )}
          </span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;