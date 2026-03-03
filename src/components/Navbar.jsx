import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'The Town', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'Ward Members', href: '#' },
    { name: 'Office Info', href: '#office' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-4 py-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Nav Container */}
        <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl shadow-black/5 rounded-[2rem] px-6 py-3 flex items-center justify-between">
          
          {/* Branding - Feel Home Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-black italic shadow-lg group-hover:rotate-12 transition-transform">
              E
            </div>
            <div className="leading-none">
              <span className="block text-sm font-black uppercase tracking-tighter">Erattupetta</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Municipality</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-tight"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex items-center gap-3">
            <a 
              href="mailto:etpamun@gmail.com" 
              className="hidden sm:block bg-slate-900 text-white px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider hover:bg-blue-600 hover:scale-105 transition-all shadow-md active:scale-95"
            >
              Report Issue
            </a>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-white"
            >
              <div className={`w-6 h-0.5 bg-slate-100 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <div className={`w-6 h-0.5 bg-slate-100 transition-all ${isOpen ? 'opacity-0' : ''}`} />
              <div className={`w-6 h-0.5 bg-slate-100 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-3 bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-black text-slate-800 border-b border-slate-50 pb-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="mailto:etpamun@gmail.com"
              className="w-full text-center bg-blue-600 text-white py-4 rounded-2xl font-black uppercase tracking-widest mt-2"
            >
              Send Complaint
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;