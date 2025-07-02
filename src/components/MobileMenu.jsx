import React from 'react';
import './MobileMenu.css';
import logo from '../assets/logo.png';
import clientImg from '../assets/clients.png';

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}>
      <div className="menu-content">
        <span className="close-btn" onClick={onClose}>✕</span>
        <img src={logo} alt="NIKUWEB" className="mobile-logo" />
        <p className="tagline">Rank Higher, Reach Wider</p>

        <nav>
          <a href="#hero" onClick={onClose}>Home</a>
          <a href="#services" onClick={onClose}>Services</a>
          <a href="#portfolio" onClick={onClose}>Projects</a>
          <a href="#contact" onClick={onClose}>Contact</a>
          <a href="#about" onClick={onClose}>About us</a>
        </nav>

        <div className="clients-info">
          <img src={clientImg} alt="Clients" />
          <p>37+ Reputed Clients</p>
        </div>

        <a
          href="https://wa.me/919671167544?text=I want a business website"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          📞 Book a Call
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
