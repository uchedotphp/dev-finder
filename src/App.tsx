import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import ThemeToggle from './components/ThemeToggle';
import ThemeSelector from './components/ThemeSelector';
import { ThemeProvider } from './components/ThemeContext';
import { UserProvider } from './components/state-management/context/UserContext';

function App() {
  const appTitle = 'devfinder';

  return (
    <ThemeProvider>
      <UserProvider>
        <div className="h-full pt-[31px] lg:pt-36 px-6 lg:px-0 pb-[170px]">
          <div className="max-w-[730px] mx-auto">
            <header className="pb-9">
              <Navbar title={appTitle} />
              <div className="mt-4">
                <ThemeToggle />
                <ThemeSelector />
              </div>
            </header>

            <section className="shadow-default overflow-hidden rounded-sm mb-6">
              <SearchBar />
            </section>

            <MainContent />
          </div>
        </div>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
