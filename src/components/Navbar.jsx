import React from 'react';
import './Navbar.scss';
import pokeball from '../media/pokeball.svg';

const Navbar  = () => (
    <nav className="navbar">
        <div className="title">
            Pinterest Grid
        </div>
        <a href="https://www.kusillus.me/" target="_blank">
            <img src={pokeball} alt=""/>
        </a>
    </nav>
)
export default Navbar;