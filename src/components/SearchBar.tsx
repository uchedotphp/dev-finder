import { FiSearch } from 'react-icons/fi';
import Button from './button';
import { FormEvent, useState, useEffect } from 'react';
import useGetUser from '../hooks/useGetUser';
import { useUserContext } from './state-management/context/UserContext';

interface SearchBarProps {
  buttonTitle?: string;
  searchPlaceholder?: string;
  onClickSearchBtn?: () => string;
}

const SearchBar = ({
  buttonTitle = 'Search',
  searchPlaceholder = 'Search Github username...',
}: SearchBarProps) => {
  const [search, setSearch] = useState<string>('');
  const [username, setUsername] = useState<string | undefined>(undefined);
  const { data: user, isError, error, isLoading } = useGetUser({ username });
  const { setUser } = useUserContext();

  const disableSubmitBtn: () => boolean = () => search.trim().length === 0;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (search.trim().length === 0) return;
    setUsername(search);
  };

  useEffect(() => {
    if (user) {
      setUser(user); // Update the context with the fetched user data
    }
    if (isError) {
      console.error('Error fetching user:', error?.message);
      setUser(null); // Clear the user data on error
    }
  }, [user, error, isError, setUser]);

  return (
    <>
      {error && (
        <span className="lg:hidden text-sm text-red font-bold ml-6 mr-3">
          {error?.message}
        </span>
      )}
      <form
        onSubmit={handleSubmit}
        className="flex items-center w-full bg-bg2 pt-[6.5px] pb-[7.5px] lg:py-[9.5px] pl-4 lg:pl-8 pr-[7px] lg:pr-2.5"
      >
        <span className="pr-[8.95px] lg:pr-6">
          <FiSearch color="rgb(0, 121, 255)" size="24px" />
        </span>

        <input
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          value={search}
          className="w-full bg-transparent text-font-1 placeholder:text-xs lg:placeholder:text-[18px] placeholder:font-extralight focus:outline-none caret-primary"
          placeholder={searchPlaceholder}
        />

        <span className="flex items-center min-w-fit">
          {error && (
            <span className="hidden lg:block text-sm text-red font-bold ml-6 mr-3">
              {error?.message}
            </span>
          )}

          <Button
            type="submit"
            isLoading={isLoading}
            onclick={() => handleSubmit}
            disabled={disableSubmitBtn()}
            className="bg-primary py-[12.5px] pl-[18px] pr-3.5 lg:pt-[12.5px] lg:py-[13.5px] lg:pl-[24px] lg:pr-[23px] rounded-xs"
          >
            <span className="text-off-white text-base font-bold">
              {buttonTitle}
            </span>
          </Button>
        </span>
      </form>
    </>
  );
};

export default SearchBar;
