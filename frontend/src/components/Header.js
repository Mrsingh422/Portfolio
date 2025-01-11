// src/components/Header.js
import React, { useState } from 'react';
import './Header.css'; // Create a separate CSS file for Header styles
// import { ReactComponent as Logo } from '../assets/logo.svg'; // If you have a logo SVG

function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          {/* Replace with your SVG logo or keep the img tag */}
          <img src="https://img.freepik.com/premium-vector/game-developer-typographic-header_277904-9142.jpg?w=826" alt="logo" />
        </div>
        <button className="menu-btn" onClick={toggleMenu}>
          Menu
        </button>
        <ul className={isActive ? 'active' : ''}>
          <li><a href="#home" onClick={() => setIsActive(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsActive(false)}>About Me</a></li>
          <li><a href="#skills" onClick={() => setIsActive(false)}>Skills</a></li>
          <li><a href="#experience" onClick={() => setIsActive(false)}>Experiences</a></li>

          <li><a href="#projects" onClick={() => setIsActive(false)}>Projects</a></li>
          <li><a href="#education" onClick={() => setIsActive(false)}>Education</a></li>
          <li><a href="#contact" onClick={() => setIsActive(false)}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
