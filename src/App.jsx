import React, { useEffect, useState } from 'react'
import { ThemeProvider } from './Context/theme'
import Card from './Components/Card';
import ThemeBtn from './Components/ThemeBtn';


const App = () => {
  const [themeMode, setThemeMode] = useState('light');
  const lightTheme = () => {
    setThemeMode('light')
  }
  const darkTheme = () => {
    setThemeMode('dark')
  }

  const docColor = document.querySelector('html').classList.remove('light','dark');
  const docSetColor = document.querySelector('html').classList.add(themeMode);
  useEffect(() => {
    docColor;
    docSetColor;
  }, [themeMode])
  
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Card/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <ThemeBtn/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App