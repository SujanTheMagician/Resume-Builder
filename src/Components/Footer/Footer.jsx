import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer__inner">
      <div className="footer__brand">
        <span className="footer__logo">⬡ ResumeForge</span>
        <span className="footer__sep">·</span>
        <span className="footer__desc">Built with ❤️ — Free & Open Source</span>
      </div>
      <div className="footer__links">
        <a href="https://github.com/yourusername/resume-builder" target="_blank" rel="noreferrer" className="footer__link">GitHub</a>
        <a href="/about" className="footer__link">About</a>
      </div>
    </div>
  </footer>
);

export default Footer;
