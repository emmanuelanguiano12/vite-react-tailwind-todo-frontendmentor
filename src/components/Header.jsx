import { useEffect, useState } from "react";
import MoonIcon from "./icons/IconMoon";
import IconSun from "./icons/IconSun"

const inicialStateDarkMode = localStorage.getItem('theme') === 'dark'; //si es dark = true, si no es dark = falso

const Header = () => { 
  
  const [darkMode, setDarkMode] = useState(inicialStateDarkMode);
  
  useEffect(() => {
    if(darkMode){
      document.documentElement.classList.add("dark");
      localStorage.setItem('theme', 'dark')
    }
    else{
      document.documentElement.classList.remove("dark");
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])//cada vez que cambia darkmode se repite el useEffect

    return(
        <header className="container mx-auto px-4 pt-8 md:max-w-xl">
        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold tracking-[0.3em] uppercase text-white ">Todo</h1>
          <button onClick={() => setDarkMode(!darkMode)}>
            {
              darkMode ? (<IconSun/>) : (<MoonIcon />)
            }
          </button>
        </div>
      </header>
    )
 }

 export default Header;