
import React from 'react';
import { SOCIALS } from '../constants';

const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-[100] px-8 py-6 flex justify-between items-center glass-panel">
      <div className="flex items-center gap-6">
        <a href="#" className="font-extrabold text-xl tracking-tighter text-[#FF8C00]">
          DIP-TARAFDER™
        </a>
        <div className="hidden md:flex gap-4">
          {SOCIALS.map((social) => (
            <a 
              key={social.platform}
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-[#FF8C00] transition-all hover:-translate-y-1"
            >
              <i className={`fa-brands ${social.icon} text-lg`}></i>
            </a>
          ))}
        </div>
      </div>
      
      <a 
        href="mailto:diptarafd3t@gmail.com" 
        className="bg-gradient-to-r from-[#6D28D9] to-[#9333EA] text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-purple-900/40"
      >
        Hire Me
      </a>
    </nav>
  );
};

export default Header;
