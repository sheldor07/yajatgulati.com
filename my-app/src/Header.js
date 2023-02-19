import React from 'react';
import './Header.css'
export default function Header(){
    return(
        <div className = "header">
        <div className = "header-intro"> Hey! 👋</div>
        <div className = "header-tagline">I'm <b>Yajat Gulati</b> a <b>software developer</b> studying <b>CS and Business </b>@ <b>Nanyang Technological University</b>. My aim is to use technology to disrupt the status quo.</div>
        <div className = "header-contact">
        When I'm not drowing in coursework, I build things and write about them 👉 <i>here</i>. <br></br><br></br>
        Feel free to get in touch via <a href="">Email</a> or <a href="https://www.linkedin.com/in/yajat-gulati-b4a7411bb/">LinkedIn</a>
        </div>
    </div>
    )
   
}