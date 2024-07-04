import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import logo from '../IMAGES/habot-logo.jpg';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white border-b shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo and Navigation Links */}
        <div className="flex items-center"> {/* Removed space-x-8 from here */}
        <div className="flex items-center pr-8"> {/* Added pr-8 for padding-right */}
            <img src={logo} alt="HABOT Logo" className="h-10 max-w-40 md:h-12 md:max-w-48 lg:h-16 lg:max-w-64" /> {/* Adjusted max-width classes */}
          </div>
          <div className="hidden md:flex space-x-8 items-center ml-auto" style={{ paddingLeft: '930px' }}> {/* Added inline style */}
            <a href="/" className="text-gray-600 hover:text-gray-800">Find Suppliers</a>
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-gray-600 hover:text-gray-800 focus:outline-none flex items-center space-x-1"
              >
                <span>Find Service Tags</span>
                <FaChevronDown className="text-gray-600" />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                  <a href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">abc</a>
                  <a href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">def</a>
                  <a href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">ghi</a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Login / Sign Up Button */}
        <div>
          <button className="border border-green-600 text-green-600 px-6 py-3 rounded-lg text-lg hover:bg-green-600 hover:text-white">
            Login / Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
