import { FaSignInAlt, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Two from '../assets/images/logo1.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Navbar  */}
        <div className="flex justify-between h-16 items-center">

          <div className="flex items-center gap-2">
            <div
              className="h-[50px] w-[50px] bg-cover bg-center border rounded-full"
              style={{ backgroundImage: `url(${Two})` }}
            ></div>
            <div className="text-2xl font-bold text-gray-800 animate-pulse ml-2">
              Carbon Crunch
            </div>
          </div>


          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 px-6 py-2 bg-white rounded-xl">
            <a href="#" className="text-gray-600 hover:text-green-500 transition duration-300">Home</a>
            <a href="#" className="text-gray-600 hover:text-green-500 transition duration-300">Services</a>
            <a href="#" className="text-gray-600 hover:text-green-500 transition duration-300">Blog</a>
            <a href="#" className="text-gray-600 hover:text-green-500 transition duration-300">About Us</a>
            <a href="#" className="text-gray-600 hover:text-green-500 transition duration-300">Contact</a>
          </div>

          {/* Sidebar Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-green-500 hover:text-green-800 hover:bg-green-300 px-6 py-2 rounded-xl flex items-center transition duration-300">
              Login
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-xl transition duration-300">
              Book Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-gray-600 hover:text-green-500 transition duration-300"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg mt-2">
            <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-500 transition duration-300">Home</a>
            <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-500 transition duration-300">Services</a>
            <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-500 transition duration-300">Blog</a>
            <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-500 transition duration-300">About Us</a>
            <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-500 transition duration-300">Contact</a>

            <div className="flex flex-col items-center mt-4 space-y-4">
              <button className="text-green-500 hover:text-green-800 hover:bg-green-300 px-6 py-2 rounded-xl flex items-center transition duration-300">
                <FaSignInAlt className="mr-2" /> Login
              </button>
              <button className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-xl transition duration-300">
                Book Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
