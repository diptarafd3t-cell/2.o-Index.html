
import React from 'react';
import { PROFILE_IMAGE, PROFILE_PLACEHOLDER } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-10 py-32 overflow-hidden">
      
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-purple-900/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Floating Masterpiece Container */}
        <div className="relative flex flex-col items-center justify-center order-2 lg:order-1">
          <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] animate-float">
            
            {/* Main Profile Image with specific shape mask/outline */}
            <div className="relative w-full h-full z-20">
              <img 
                src={PROFILE_IMAGE} 
                onError={(e) => { e.currentTarget.src = PROFILE_PLACEHOLDER }}
                alt="Dip Tarafder Profile" 
                className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.2)]"
              />
            </div>

            {/* Glowing Ground Flare (matching bottom of image) */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-48 h-2 bg-white/60 blur-md rounded-full animate-pulse-glow z-10"></div>
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-64 h-4 bg-white/20 blur-xl rounded-full animate-pulse-glow delay-700 z-0"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center lg:text-left order-1 lg:order-2 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-[10px] font-mono tracking-[0.3em] uppercase text-cyan-400">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></span>
            System_Authenticated
          </div>
          
          <h1 className="font-['Playfair_Display'] italic font-black text-6xl md:text-9xl text-[#FF8C00] leading-none">
            Dip <span className="text-white not-italic font-['Space_Grotesk'] text-5xl md:text-7xl block mt-2 opacity-90 tracking-tighter">Tarafder</span>
          </h1>

          <div className="space-y-4">
            <p className="text-zinc-400 text-lg md:text-2xl font-light tracking-[0.1em] max-w-xl mx-auto lg:mx-0">
              A visionary <span className="text-white font-semibold">Engineering Programmer</span> crafting fluid architectural solutions for the next-gen digital frontier.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-8">
            <a href="#expertise" className="group relative px-10 py-5 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/10">
              <span className="relative z-10">Access Expertise</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <button 
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} 
              className="px-10 py-5 border border-zinc-700 text-white font-bold rounded-full hover:border-white transition-all hover:bg-white/5"
            >
              Contact_Node
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
