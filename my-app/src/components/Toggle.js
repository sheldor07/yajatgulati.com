import React from 'react';
import { ThemeContext } from '../App';
import { useContext } from 'react';
import '../styles/Toggle.css'
export default function Toggle(){
    const {theme,toggleTheme}=useContext(ThemeContext);
    return(
        <div className="toggle-switch-wrapper">
            <label className='switch'>
            <input className="check-box"type='checkbox' onClick={toggleTheme} checked = {theme==='light'}></input>
            <span className="slider"></span>
            </label>
        </div>
    )
}