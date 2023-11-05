import React from 'react';
import "./Header.css"

function Header() {
  return (
    <div className='header'>
      <nav>
      <h1>Sathish </h1>
        <ul>
          
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
