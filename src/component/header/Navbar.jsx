import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '/src/assets/images/logo.png';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full bg-white md:bg-white fixed top-0 left-0 right-0`}>
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? 'sticky  top-0 left-0 right-0 border bg-white duration-300'
            : ''
        }`}>
        <div className="flex justify-between items-center  text-base gap-8">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
          {/* Navigation */}
          <ul className="md:flex space-x-12 hidden">
            <Link
              to="/home"
              className="block text-base text-gray-900 hover:text-brandPrimary first:font-medium">
              Home
            </Link>
            <Link
              to="/about"
              className="block text-base text-gray-900 hover:text-brandPrimary first:font-medium">
              Tentang Kami
            </Link>
            <Link
              to="/service"
              className="block text-base text-gray-900 hover:text-brandPrimary first:font-medium">
              Bantuan
            </Link>
            <Link
              to="/media"
              className="block text-base text-gray-900 hover:text-brandPrimary first:font-medium">
              Media
            </Link>
            <Link
              to="/contact"
              className="block text-base text-gray-900 hover:text-brandPrimary first:font-medium">
              Kontak
            </Link>
          </ul>
          {/* Button For Large Device */}
          <div className="space-x-12 hidden lg:flex items-center">
            <button className="bg-brandPrimary text-white py-2 px-8 transition-all duration-300 rounded hover:bg-neutralDGrey">
              Login
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
