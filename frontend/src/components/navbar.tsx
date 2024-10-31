import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiSearch, FiUser } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-content">
          {/* Logo */}
          <Link href="/" className="logo">
            <span>MovieDB</span>
          </Link>

          {/* Desktop Menu */}
          <div className="nav-links">
            <Link href="/" className="nav-item">
              Movies
            </Link>
            <Link href="/tv" className="nav-item">
              TV Shows
            </Link>
            <Link href="/people" className="nav-item">
              People
            </Link>
          </div>

          {/* Desktop Icons */}
          <div className="nav-icons">
            <button className="nav-icon">
              <FiSearch size={22} />
            </button>
            <button className="nav-icon">
              <FiUser size={22} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden nav-icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="py-2">
            <Link 
              href="/" 
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
            >
              Movies
            </Link>
            <Link 
              href="/tv" 
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
            >
              TV Shows
            </Link>
            <Link 
              href="/people" 
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
            >
              People
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;