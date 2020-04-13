import React from 'react';
import './style.css';
import logo from '../pe.png';

const Header = () => (
    <header id= "mheader">
        <h1>Project English</h1>
        <img src= {logo} height="60px" alt="logo"/>
    </header>
);

export default Header;