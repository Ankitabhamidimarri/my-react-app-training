import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="container">
      <nav className="navbar">
        <div className="nav-container">
          <span className="nav-logo">Portfolio</span>
          <div className="nav-links">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
          {/* <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button> */}
        </div>
        {isMenuOpen && (
          <div className="mobile-menu">
            <MobileNavLink href="#home" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
          </div>
        )}
      </nav>

      <main className="main-content">{children}</main>

      <footer className="footer">
        <div className="footer-container">
          <div className="social-icons">
            <a href="#"><Github size={24} /></a>
            <a href="#"><Linkedin size={24} /></a>
            <a href="#"><Mail size={24} /></a>
          </div>
          <p>© 2024 Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const NavLink = ({ href, children }) => <a href={href} className="nav-link">{children}</a>;

const MobileNavLink = ({ href, children, onClick }) => (
  <a href={href} className="mobile-nav-link" onClick={onClick}>{children}</a>
);

export default Layout;
