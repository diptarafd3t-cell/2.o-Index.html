
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Interface active. I am Dip's neural assistant. How can I facilitate your inquiry?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    const response = await getGeminiResponse(userMessage, messages);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'assistant', content: response || "System error. Signal lost." }]);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[200]">
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 active:scale-90 ${isOpen ? 'bg-zinc-800 rotate-90' : 'bg-gradient-to-br from-[#6D28D9] to-cyan-500 animate-pulse'}`}
      >
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-robot'} text-2xl text-white`}></i>
      </button>

      {/* Chat Window */}
      <div className={`absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] glass-panel rounded-3xl overflow-hidden transition-all duration-500 shadow-2xl flex flex-col ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <div className="p-6 border-b border-white/10 bg-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <h3 className="font-bold tracking-tight">TITAN_ASSISTANT v1.0</h3>
          </div>
          <span className="text-[10px] font-mono text-zinc-500 uppercase">Status: Link Established</span>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((m, idx) => (
            <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${m.role === 'user' ? 'bg-[#6D28D9] text-white rounded-tr-none' : 'bg-zinc-800 text-zinc-300 rounded-tl-none'}`}>
                {m.content}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-zinc-800 p-4 rounded-2xl rounded-tl-none flex gap-1">
                <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce delay-100"></div>
                <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="p-4 bg-black/40 border-t border-white/10">
          <div className="relative">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Query Titan..."
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6D28D9] transition-colors"
            />
            <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-zinc-400 hover:text-white transition-colors">
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AIChat;
