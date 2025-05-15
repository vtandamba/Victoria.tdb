import React, { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header  className='navbar p-4 flex items-center   justify-between fixed top-0 left-0 w-full bg-white backdrop-blur-md shadow-lg z-50 dark:bg-gray-800'>
      {/* Logo */}
      <div className="text-3xl font-bold text-primary dark:text-primary-foreground" > <a href="https://victoria-tdb.vercel.app/"> VICTORIA</a></div>

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
        // className={`${isOpen ? 'block top-16 md:relative h-screen' : 'hidden'
        //   } lg:inset-0 absolute top-0 left-0 w-full   md:flex-grow md:flex md:items-center md:justify-end transition-transform duration-500 ease-out`}
     
          className={`fixed top-0 left-0  w-full  dark:bg-gray-800 z-40 transform transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:relative md:transform-none md:flex md:items-center md:justify-end flex justify-end  translate-y-16 `}>
        {/* translate-y-16" : "-translate-y-56 la transition de haut en bas */}
        <ul className="flex  flex-col md:flex-row md:space-x-8 items-center md:items-center bg-white md:bg-transparent dark:bg-gray-800 lg:h-3/6 md:top-4  " >
          {['Accueil', 'Parcours', 'Projets', 'Compétences', 'Contacts'].map((item) => (

            <li key={item} className="border-solid border-2  p-1 px-4 w-full text-center border-b md:border-none   hover:bg-popover  border-popover transition-colors duration-200 dark:text-white dark:hover:bg-popover ">
              {/* dark:hover:border-popover hover:border-l-4 */}
              <a
                href={`#${item.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()}`}
                className="block py-2 text-gray-700   border-popover transition-colors duration-200 dark:text-white "
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
