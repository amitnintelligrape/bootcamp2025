import React from 'react';
import { useTheme } from './index';

const ThemeToggler = ()=>{
    const {theme, toggleTheme} = useTheme();
    return(
        <>
        <button onClick={toggleTheme}>
            Swith to theme: {theme === 'light'?'dark':'light'}
        </button>
        </>
    )
}

export default ThemeToggler;