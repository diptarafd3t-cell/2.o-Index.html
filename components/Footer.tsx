
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-black border-t border-white/5 text-center">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-12">
          <span className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C00] to-purple-500 tracking-tighter">
            DIP-TARAFDER™
          </span>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-sm font-mono uppercase tracking-widest">
            &copy; 2026 Titan Systems // All Rights Reserved
          </p>
          <div className="flex gap-8 text-zinc-500 font-mono text-xs uppercase tracking-tighter">
            <a href="#" className="hover:text-white transition-colors">Privacy_Shield</a>
            <a href="#" className="hover:text-white transition-colors">Archival_Data</a>
            <a href="#" className="hover:text-white transition-colors">Version_V4.0</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
