
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-32 px-8 md:px-24 bg-[#0A0A0B] border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="font-['Playfair_Display'] italic text-6xl md:text-8xl text-[#FF8C00] mb-8">
            Let's Build
          </h2>
          <p className="text-zinc-400 text-xl md:text-2xl font-light mb-12">
            The future of engineering begins with a single transmission. Ready to elevate your digital ecosystem?
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center text-[#6D28D9] group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <p className="text-zinc-500 text-xs font-mono uppercase">Direct Signal</p>
                <p className="text-white text-lg font-bold">diptarafd3t@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                <i className="fa-brands fa-whatsapp"></i>
              </div>
              <div>
                <p className="text-zinc-500 text-xs font-mono uppercase">Encrypted Comm</p>
                <p className="text-white text-lg font-bold">+880 1704 235825</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
          {/* Background effect */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full"></div>
          
          <form className="relative z-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-2">Caller_ID</label>
                <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#FF8C00] transition-colors" />
              </div>
              <div>
                <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-2">Return_Address</label>
                <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#FF8C00] transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-2">Transmission_Log</label>
              <textarea rows={4} placeholder="Project Description & Vision" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#FF8C00] transition-colors resize-none"></textarea>
            </div>
            <button className="w-full bg-gradient-to-r from-[#6D28D9] to-[#9333EA] text-white py-6 rounded-2xl font-bold uppercase tracking-[0.3em] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-purple-900/40">
              Initiate Contact
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
