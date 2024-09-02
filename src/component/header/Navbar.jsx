import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '/src/assets/images/logo.png';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State untuk loading
  const navigate = useNavigate();

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

  const handleLogout = () => {
    setIsLoading(true); // Mulai animasi loading
    setTimeout(() => {
      setIsLoading(false);
      navigate('/login'); // Redirect ke halaman login setelah animasi selesai
    }, 2000);
  };

  return (
    <header className="w-full bg-white md:bg-white fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? 'sticky top-0 left-0 right-0 border bg-white duration-300'
            : ''
        }`}>
        <div className="flex justify-between items-center text-base gap-8">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
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
          <div className="space-x-12 hidden lg:flex items-center">
            <button
              onClick={handleLogout}
              className="bg-brandPrimary text-white py-2 px-8 transition-all duration-300 rounded hover:bg-neutralDGrey">
              {isLoading ? 'Logging out...' : 'Logout'}
            </button>
          </div>
        </div>
      </nav>
      {isLoading && (
        <div className="fixed inset-0 bg-white bg-opacity-75 flex justify-center items-center z-50">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
