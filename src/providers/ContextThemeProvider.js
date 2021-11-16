import React, { useState } from "react";

export const ThemeToggleContext = React.createContext();

export const ContextThemeProvider = ({children}) => {
    const [currentTheme, setCurrentTheme] = useState('light')

    const toggleTheme = () => {
        setCurrentTheme(currentTheme === "light" ? "dark" : "light")
    }

    return (
        <ThemeToggleContext.Provider value={{...currentTheme, toggleTheme}}>
            {children(currentTheme)}}
        </ThemeToggleContext.Provider>
    )
}

export default ContextThemeProvider;