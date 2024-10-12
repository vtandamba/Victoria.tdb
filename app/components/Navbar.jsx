import React from 'react';
import logo from '../assets/images/logo.svg';
import Image from 'next/image';

const Navbar = () => {
  return (
    <>
      <header className='navbar items-center p-3 flex   fixed mb-4 gap-x-48 backdrop-blur-sm md:backdrop-blur-lg w-full z-50'>
        {/* Logo */}
        {/* <Image className='flex-none w-32' src={logo} alt="VICTORIA" /> */}
        <aside className='flex-none text-3xl content-clip text-center'>VICTORIA</aside>

        <div className='navbar flex-1'>
          <nav className="nav">
            <input className="nav__input" type="checkbox" id="icone-burger-close" />
            <label className="nav__button" htmlFor="icone-burger-close"></label>
            <ul className="nav__menu backdrop-blur-sm md:backdrop-blur-none md:bg-transparent bg-white">
              <li className="nav__elt"><a href="#">Accueil</a></li>
              <li className="nav__elt"><a href="#">Profil</a></li>
              <li className="nav__elt"><a href="#">Projets</a></li>
              <li className="nav__elt"><a href="#">Compétences</a></li>
              <li className="nav__elt"><a href="#">Qualités</a></li>
              <li className="nav__elt"><a href="#">Contacts</a></li>

            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
