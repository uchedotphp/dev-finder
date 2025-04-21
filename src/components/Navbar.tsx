import { IoMoon } from 'react-icons/io5';
import { IoSunny } from 'react-icons/io5';

interface NavbarProps {
  title: string;
  currentMode: 'light' | 'dark' | 'system';
}

const Navbar = ({ title, currentMode }: NavbarProps) => {
  // const [selectedTheme, toggleTheme] = useState<Theme>({ states: 'light' });

  // const handleThemeChange = () => {
  //   if (selectedTheme.states === 'light') {
  //     document.body.classList.add('dark');
  //     toggleTheme({ states: 'dark' });
  //   } else {
  //     document.body.classList.remove('dark');
  //     toggleTheme({ states: 'light' });
  //   }
  // };

  return (
    <nav className="w-full flex justify-between items-center">
      <h2 className="text-font-1 text-xl tracking-tighter">{title}</h2>

      <button
        onClick={()=>{console.log('hi')}}
        className="uppercase text-xs font-bold"
      >
        {currentMode === 'dark' && (
          <span className="flex items-center space-x-3 text-font-1 hover:text-dark-600">
            <span className="tracking-widest">{currentMode}</span>
            <IoMoon size="20" />
          </span>
        )}
        {currentMode === 'light' && (
          <span className="flex items-center space-x-3 text-font-1 hover:text-background">
            <span className="">{currentMode}</span>
            <IoSunny size="20" color="white" />
          </span>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
