const useTheme = ({ theme }: { theme: 'dark' | 'light' | 'system' }) => {
    document.querySelector('body')?.classList.add(theme);

    // const [currentMode, setCurrentMode] = useState<'dark' | 'white' | 'system'>(theme);
    // const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    // const handleThemeChange = () => {
    //     if (currentMode === 'dark') {
    //         setCurrentMode('white');
    //         setIsDarkMode(false);
    //         document.documentElement.classList.remove('dark');
    //     } else if (currentMode === 'white') {
    //         setCurrentMode('dark');
    //         setIsDarkMode(true);
    //         document.documentElement.classList.add('dark');
    //     } else {
    //         setCurrentMode('system');
    //         setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    //     }
    // };

    // return { currentMode, isDarkMode, handleThemeChange };

}

export default useTheme;