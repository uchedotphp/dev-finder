import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar';
import BioData from './components/BioData';
import RepoCount from './components/RepoCount';
import Socials from './components/Socials';
import useGetUser from './hooks/useGetUser';
import { useEffect, useReducer } from 'react';
import SearchContext from './components/state-management/context/searchContext';
import { searchReducers } from './components/state-management/reducers/searchReducer';

function App() {
  const [search, dispatch] = useReducer(searchReducers, '');
  // Set the default theme based on user's preference or system setting
  useEffect(() => {
    localStorage.setItem('theme', 'dark');
    const selectedTheme = localStorage.getItem('theme');
    if (selectedTheme) {
      document.body.classList.add(selectedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.add('light');
    }
  });

  const appTitle = 'devfinder';
  const currentMode = 'dark';

  const performSearch = (username: string) => {
    console.log(username);
    return username;
  };

  const { data: user, error } = useGetUser({ username: 'uchedotphp' });
  if (error) console.log('error: ', error);

  return (
    <SearchContext.Provider value={{ search, dispatch }}>
      <div className="h-full pt-[31px] lg:pt-36 px-6 lg:px-0 pb-[170px]">
        <div className="max-w-[730px] mx-auto">
          <header className="pb-9">
            <Navbar title={appTitle} currentMode={currentMode} />
          </header>

          <section className="shadow-default overflow-hidden rounded-sm mb-6">
            <SearchBar
              errorMessage={error?.message}
              handleSearch={performSearch}
            />
          </section>

          {user && (
            <main className="rounded-sm shadow-default bg-bg2 pt-8 px-6 pb-12 lg:p-12">
              <BioData user={user} />

              <div className="lg:ml-[154px]">
                <div className="mt-8">
                  <RepoCount
                    repos={parseInt(user.public_repos)}
                    followers={parseInt(user.followers)}
                    following={parseInt(user.following)}
                  />
                </div>

                <div className="mt-[39px]">
                  <Socials
                    location={user.location}
                    twitter={user.twitter_username}
                    blogurl={user.blog}
                    company={user.company}
                  />
                </div>
              </div>
            </main>
          )}
        </div>
      </div>
    </SearchContext.Provider>
  );
}

export default App;
