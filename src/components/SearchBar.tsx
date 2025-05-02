import { FiSearch } from 'react-icons/fi';
import Button from './button';
import { FormEvent, useContext } from 'react';
import SearchContext from './state-management/context/searchContext';

interface SearchBarProps {
  buttonTitle?: string;
  searchPlaceholder?: string;
  errorMessage?: string;
  onClickSearchBtn?: () => string;
  handleSearch: (param: string) => string;
}

const SearchBar = ({
  buttonTitle = 'Search',
  searchPlaceholder = 'Search Github username...',
  errorMessage,
}: SearchBarProps) => {
  const { search, dispatch } = useContext(SearchContext);
  // disables submit button if input is empty
  const disableSubmitBtn: () => boolean = () => search.trim().length === 0;

  // handles form submission
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch({ type: 'search', searchQuery: '' });
  };

  return (
    <>
      {errorMessage && (
        <span className="lg:hidden text-sm text-red font-bold ml-6 mr-3">
          {errorMessage}
        </span>
      )}
      <form
        onKeyUp={handleSubmit}
        onSubmit={handleSubmit}
        className="flex items-center w-full bg-bg2 pt-[6.5px] pb-[7.5px] lg:py-[9.5px] pl-4 lg:pl-8 pr-[7px] lg:pr-2.5"
      >
        <span className="pr-[8.95px] lg:pr-6">
          <FiSearch color="rgb(0, 121, 255)" size="24px" />
        </span>

        <input
          onChange={(event) => {
            console.log('logging search: ', event.target.value);

            dispatch({ type: 'search', searchQuery: event.target.value });
          }}
          value={search}
          className="w-full bg-transparent placeholder:text-font-1 placeholder:text-xs lg:placeholder:text-[18px] placeholder:font-extralight focus:outline-none caret-primary"
          placeholder={searchPlaceholder}
        />

        <span className="flex items-center min-w-fit">
          {errorMessage && (
            <span className="hidden lg:block text-sm text-red font-bold ml-6 mr-3">
              {errorMessage}
            </span>
          )}

          <Button
            onclick={() => {
              console.log('clicked');
            }}
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
