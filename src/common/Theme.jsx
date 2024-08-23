import React, {createContext, useContext, useEffect, useState} from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

//creating a Theme and setting it to the local storage
//if we have localStorage theme already saved, we are getting that
// otherwise, we'll set it to light
//setTheme saves it into local stroage
export const ThemeProvider = ({children}) => {
    //this sets the theme variable
    const [theme, setTheme] = useState(
        //if you find theme then set it to that, otherwise set it to light
        () => localStorage.getItem('theme') || 'light'
        //***change || 'light' to || 'dark' at some point ()
    );

    useEffect(() => {
        //whole body of html
        //set that to theme we already made
        document.body.setAttribute('data-theme', theme); //previousley set above
        localStorage.setItem('theme', theme); //updates local storage of user
    }, [theme]);

    const toggleTheme = () => {
        console.log("theme switched");
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value = {{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>

    );
};

