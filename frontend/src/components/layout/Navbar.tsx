import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-red-600">
            MovieApp
          </Link>

          {/* Main Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
            <Link href="/movies" className="hover:text-red-600 transition-colors">Movies</Link>
            <Link href="/series" className="hover:text-red-600 transition-colors">TV Series</Link>
            <Link href="/my-list" className="hover:text-red-600 transition-colors">My List</Link>
          </div>

          {/* Right Side - Search & Profile */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Search..."
                className="bg-gray-800 px-4 py-1 rounded-full w-full"
              />
              <FontAwesomeIcon 
                icon={faSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
              />
            </div>
            <div className="cursor-pointer">
              <img
                src="/profile-placeholder.png"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 hover:bg-gray-700 rounded-md">Home</Link>
              <Link href="/movies" className="block px-3 py-2 hover:bg-gray-700 rounded-md">Movies</Link>
              <Link href="/series" className="block px-3 py-2 hover:bg-gray-700 rounded-md">TV Series</Link>
              <Link href="/my-list" className="block px-3 py-2 hover:bg-gray-700 rounded-md">My List</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;