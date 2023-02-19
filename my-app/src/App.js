import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { createContext } from 'react';
import { useState } from 'react';
import Toggle from './components/Toggle'
export const ThemeContext = createContext(null);

function App() {
  const [theme,setTheme] = useState('light');
  const toggleTheme = () =>{
    setTheme((curr)=>{return curr==='light'?'dark':"light"});
  }
  return (
    <ThemeContext.Provider value = {{theme,toggleTheme}}>
    <div className="App" id={theme}>
      <Toggle/>
      <Header/>

    </div>
    </ThemeContext.Provider>
  );
}

export default App;
