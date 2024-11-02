import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
   // In navbar.tsx or relevant component
<nav className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
  <div className="text-2xl font-bold">Movie Platform</div>
  <div className="hidden md:flex space-x-4">
    <a href="/" className="hover:text-yellow-400">Home</a>
    <a href="/movies" className="hover:text-yellow-400">Movies</a>
    <a href="/contact" className="hover:text-yellow-400">Contact</a>
  </div>
  <div className="flex space-x-2">
    <input
      type="text"
      placeholder="Search movies..."
      className="px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
    />
    <button className="bg-yellow-500 px-4 py-1 rounded-md hover:bg-yellow-600">Search</button>
  </div>
</nav>

  );
};

export default Navbar;
