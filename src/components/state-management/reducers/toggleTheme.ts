interface Theme {
    states: 'light' | 'dark' | 'system';
}

interface Action {
    type: string;
    payload?: Theme;
}

const toggleTheme = (state: Theme, action: Action) => {
    
}