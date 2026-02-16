
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Add font awesome
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css';
    document.head.appendChild(link);

    return () => {
      const existing = document.querySelector('link[href*="font-awesome"]');
      if (existing) document.head.removeChild(existing);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#020104] text-zinc-100 selection:bg-[#FF8C00] selection:text-white relative">
      
      {/* Starry Night Atmosphere */}
      <div className="stars-container">
        {[...Array(80)].map((_, i) => (
          <div 
            key={i} 
            className="star" 
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              '--duration': `${2 + Math.random() * 5}s`,
            } as any}
          />
        ))}
        {/* Milky Way subtle gradient glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none"></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Expertise />
          <Contact />
        </main>
        <Footer />
        <AIChat />
      </div>

      {/* Ambient Depth Effects */}
      <div className="fixed top-[10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-900 rounded-full blur-[200px] opacity-10 pointer-events-none -z-10 animate-pulse"></div>
      <div className="fixed bottom-[10%] right-[-10%] w-[40vw] h-[40vw] bg-purple-900 rounded-full blur-[200px] opacity-10 pointer-events-none -z-10 animate-pulse delay-1000"></div>
    </div>
  );
};

export default App;
