import { Dispatch, createContext } from "react";
import { SearchAction } from "../reducers/searchReducer";

interface searchContextType {
    search: string;
    dispatch: Dispatch<SearchAction>
}

const SearchContext = createContext<searchContextType>({} as searchContextType);

export default SearchContext;