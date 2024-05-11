import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop <= 0); // Set visibility based on scroll position
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isVisible ? 'visible' : 'invisible'}`}>
      <div className="navbar-logo">
        <img src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FnewLogo.9985891c.png&w=96&q=75" alt="Logo" className="logo-image" />
      </div>
      <ul className="navbar-links">
        <li className="navbar-item"><a href="#home">Makemyweb</a></li>
        <li className="navbar-item"><a href="#about">Home</a></li>
        <li className="navbar-item"><a href="#services">Company</a></li>
        <li className="navbar-item"><a href="#contact">Blogs</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;