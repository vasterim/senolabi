import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/farmasi.png'; // Ensure you have a logo image in the assets folder

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img src={logo} alt="Logo" className="h-8 object-contain" />
        </div>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
        <ul className={`flex-col lg:flex-row lg:flex space-x-4 ${isOpen ? 'flex' : 'hidden'}`}>
          <li>
            <Link to="/" className="text-black hover:text-gray-700">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-black hover:text-gray-700">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
