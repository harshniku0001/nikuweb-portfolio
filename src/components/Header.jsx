import React, { useState } from 'react';
import './Header.css';
import MobileMenu from './MobileMenu';
import logo from '../assets/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <img src={logo} alt="NIKUWEB Developer" className="logo" />
        <nav className="nav-menu">
          <a href="#hero">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#portfolio">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="quote-btn" onClick={() => setMenuOpen(true)}>
          📞 Get website quote
        </button>
        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          ☰
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Header;
