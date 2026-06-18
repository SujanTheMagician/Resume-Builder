import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <Link to="/" className="navbar__brand">
          <span className="navbar__logo-icon">⬡</span>
          <span className="navbar__logo-text">ResumeForge</span>
        </Link>

        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <Link to="/" className={`navbar__link ${location.pathname === '/' || location.pathname === '/home' ? 'navbar__link--active' : ''}`} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" className={`navbar__link ${location.pathname === '/about' ? 'navbar__link--active' : ''}`} onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </div>

        <button className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
