import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Add your search logic here
    console.log('Searching for:', searchQuery);
  };

  useEffect(() => {
    // Check if the screen width is less than or equal to a certain value (e.g., 768 pixels for mobile devices)
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    // Initial check on component mount
    handleResize();
    // Listen for window resize events
    window.addEventListener('resize', handleResize);
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={`bg-black p-4 flex flex-col md:flex-row justify-between items-center ${isMobile ? '' : 'sticky top-0 z-10'}`}>
      {/* Logo */}
      <div className="flex items-center mb-4 md:mb-0">
        <img
          src=".\logo.png" // Replace with your actual image path
          alt="Logo"
          className="h-16 w-auto" // Adjust the size as needed
        />
      </div>

      {/* Menu items */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
        <a href="/" className="text-white">Home</a>
        <a href="/about" className="text-white">About</a>
        <a href="/contact" className="text-white">Contact</a>
        <a href="/packages" className="text-white">Packages</a>
      </div>

      {/* Search functionality */}
      <div className="flex items-center">
        <form onSubmit={handleSearchSubmit} className="relative">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            className="p-2 rounded-md border-2 border-gray-600 focus:outline-none bg-transparent"
          />
          <button type="submit" className="absolute right-0 top-0 bottom-0 bg-transparent text-white p-2 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <circle cx="10.5" cy="10.5" r="7.5" />
              <line x1="21" y1="21" x2="15.8" y2="15.8" />
            </svg>
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
