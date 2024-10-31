import React from 'react';
import { FaHome, FaSearch, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-content">
          <div className="logo">
            MovieDB
          </div>
          
          <div className="nav-links">
            <a href="#" className="nav-item">Home</a>
            <a href="#" className="nav-item">Movies</a>
            <a href="#" className="nav-item">TV Shows</a>
          </div>

          <div className="nav-icons">
            <button className="nav-icon">
              <FaSearch className="text-xl" />
            </button>
            <button className="nav-icon">
              <FaUser className="text-xl" />
            </button>
          </div>

          <div className="mobile-menu md:hidden">
            <button className="nav-icon">
              ☰
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;