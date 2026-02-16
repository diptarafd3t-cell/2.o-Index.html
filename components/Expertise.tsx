
import React from 'react';
import { EXPERTISE } from '../constants';

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-24 px-8 md:px-24 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end gap-4 mb-16">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
            Expertise_<span className="text-[#6D28D9]">Grid</span>
          </h2>
          <div className="h-1 flex-1 bg-zinc-800 mb-4 hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EXPERTISE.map((item, idx) => (
            <div 
              key={idx}
              className={`group glass-panel p-10 rounded-3xl hover:bg-white/5 transition-all duration-500 cursor-default flex flex-col justify-end min-h-[300px] relative overflow-hidden ${item.isLarge ? 'md:col-span-2' : ''}`}
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 group-hover:scale-125 transition-all duration-500">
                <i className={`fa-solid ${item.icon} text-9xl`}></i>
              </div>
              
              <div className="relative z-10">
                <i className={`fa-solid ${item.icon} text-4xl text-[#FF8C00] mb-6 group-hover:scale-110 transition-transform`}></i>
                <h3 className="text-sm font-mono text-purple-400 mb-2 tracking-[0.2em] uppercase">SYSTEM_{item.title.toUpperCase()}</h3>
                <p className="text-2xl md:text-3xl font-bold text-white group-hover:translate-x-2 transition-transform">{item.description}</p>
              </div>

              {/* Decorative accent */}
              <div className="absolute left-0 bottom-0 w-0 h-1 bg-[#6D28D9] group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
