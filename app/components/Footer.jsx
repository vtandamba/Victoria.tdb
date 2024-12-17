import React from 'react';
import Image from 'next/image';
import { Linkedin, Github,Mail, Heart } from 'lucide-react';
// Assurez-vous d'avoir l'icône Twitter

const Footer = () => {
  return (
    <footer className="bg-accent text-muted-foreground py-6">
      <div className="   flex flex-col md:flex-row justify-between items-center px-4">
        {/* Section des réseaux sociaux */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity duration-300">
          <Github />
          </a>
          <a  href="mailto:victoriatandam@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity duration-300">
          <Mail />          </a>
          <a href="https://www.linkedin.com/in/victoria-tandamba/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity duration-300">
          <Linkedin />
          </a>
        </div>

        {/* Message de copyright */}
        <div className="text-center text-sm">
          Fait avec <Heart className='inline-block w-3 text-primary' /> en Next.js 2024 - 2025
        </div>
      </div>
    </footer>
  );
};

export default Footer;
