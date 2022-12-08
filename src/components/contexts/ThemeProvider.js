import React, { createContext, useState } from 'react';


export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(false);
    const data = {
        theme, 
        setTheme
    }
    return (
        <div>
            <ThemeContext.Provider value={data}>
                {children}
            </ThemeContext.Provider>
        </div>
    );
};

export default ThemeProvider;