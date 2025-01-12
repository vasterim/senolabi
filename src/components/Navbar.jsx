import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSearch, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/farmasi.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-gray-100 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4 lg:px-32">
          <div>
            <img src={logo} alt="Logo" className="h-6 object-contain" />
          </div>
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16m-7 6h7'
                  }
                ></path>
              </svg>
            </button>
          </div>
          <ul
            className={`lg:flex lg:space-x-8 lg:items-center absolute lg:static left-0 top-14 bg-gray-100 w-full lg:w-auto lg:bg-transparent z-10 transition-all duration-300 overflow-hidden ${
              isOpen ? 'max-h-96' : 'max-h-0 lg:max-h-full'
            }`}
          >
            <li className="border-b lg:border-none">
              <Link
                to="/"
                className="block text-gray-800 hover:text-gray-600 font-extralight text-lg py-3 px-4 lg:py-0"
              >
                Ana Sayfa
              </Link>
            </li>
            <li className="border-b lg:border-none">
              <Link
                to="/about"
                className="block text-gray-800 hover:text-gray-600 font-extralight text-lg py-3 px-4 lg:py-0"
              >
                Hakkımızda
              </Link>
            </li>
            <li className="border-b lg:border-none">
              <Link
                to="/cart"
                className="block text-gray-800 hover:text-gray-600 font-extralight text-lg py-3 px-4 lg:py-0 flex items-center"
              >
                <FaShoppingCart className="mr-2" /> Sepet
              </Link>
            </li>
            <li>
              <Link
                to="/search"
                className="block text-gray-800 hover:text-gray-600 font-extralight text-lg py-3 px-4 lg:py-0 flex items-center"
              >
                <FaSearch className="mr-2" /> Ara
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <a
        href="https://wa.me/yourwhatsappnumber"
        className="fixed bottom-4 left-4 z-50 animate-bounce transform hover:scale-110 transition-transform duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp
          className="text-white bg-green-500 rounded-full shadow-lg text-6xl p-4"
        />
      </a>
    </>
  );
}

export default Navbar;
