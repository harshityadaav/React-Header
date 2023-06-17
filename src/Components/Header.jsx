import React from 'react';
import { Link } from 'react-router-dom'; 

import "../Styles/header.css";

const Header = () => {
  return (
    <header>
      <nav>
      <h1>Logo</h1>
      <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
      </div>
      </nav>
    </header>
  );
};

export default Header;
