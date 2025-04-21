export interface SearchAction {
    type: 'search';
    searchQuery: string;
}
export const searchReducers = (state: string, action: SearchAction): string => {
    state = action.searchQuery;
    return state;
}

// export default searchReducers;