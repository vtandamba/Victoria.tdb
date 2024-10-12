import React, { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='navbar p-4 flex items-center justify-between fixed top-0 left-0 w-full bg-white backdrop-blur-md shadow-lg z-50 dark:bg-gray-800'>
      {/* Logo */}
      <div className="text-3xl font-bold text-primary dark:text-primary-foreground">VICTORIA</div>

      {/* Burger menu button for mobile */}
      <div className='md:hidden'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-500 hover:text-black focus:outline-none"
        >
          {/* Burger icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}
            />
          </svg>
        </button>
      </div>

      {/* Navigation menu */}
      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } lg:inset-0 absolute top-16 left-0 w-full md:relative md:block md:flex-grow md:flex md:items-center md:justify-end transition-transform duration-500 ease-out`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-8 items-center bg-white md:bg-transparent dark:bg-gray-800">
          {['Accueil', 'Profil', 'Projets', 'Compétences', 'Qualités', 'Contacts'].map((item) => (
            <li key={item} className="py-2 md:py-0 w-full text-center border-b md:border-none">
              <a
                href="#"
                className="block py-2 text-gray-700 hover:bg-purple-100 hover:border-l-4 border-purple-600 transition-colors duration-200 dark:text-white dark:hover:bg-purple-600 dark:hover:border-purple-400"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
