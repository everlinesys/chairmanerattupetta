import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Branding & Big Statement */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-black italic shadow-xl">
                E
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tighter italic leading-none">
                Erattupetta <br />
                <span className="text-blue-600 text-sm tracking-widest not-italic">Municipality</span>
              </h2>
            </div>
            <p className="text-slate-500 font-medium leading-relaxed">
              Dedicated to the sustainable growth and digital transformation of our town. 
              Always open for dialogue, always working for the people.
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-20">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">The Office</h4>
              <ul className="space-y-3 text-sm font-bold text-slate-700">
                <li className="hover:text-blue-600 cursor-pointer transition-colors leading-tight">
                  Central Junction, Erattupetta <br /> Kottayam, Kerala 686121
                </li>
                <li className="text-blue-600">04822-272063</li>
                <li className="text-slate-400 font-medium">10:00 AM — 05:00 PM</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Quick Links</h4>
              <ul className="space-y-3 text-sm font-bold text-slate-700">
                <li className="hover:text-blue-600 cursor-pointer transition-colors italic">Chairman's Desk</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors italic">Council Minutes</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors italic">Tenders & News</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors italic">Right to Information</li>
              </ul>
            </div>
          </div>
        </div>

        {/* The "Big Type" Design Element */}
        <div className="relative border-y border-slate-100 py-10 overflow-hidden select-none">
          <h3 className="text-[15vw] font-black uppercase tracking-tighter leading-none text-slate-200 text-center">
            ERATTUPETTA
          </h3>
          {/* Status Badge Over the Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full border border-emerald-100 flex items-center gap-2 shadow-xl shadow-emerald-500/10">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-widest">Office Live Now</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal & Social */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            © {currentYear} Erattupetta Municipality. All Rights Reserved.
          </div>
          
          <div className="flex gap-8 items-center">
            <a href="#" className="text-slate-400 hover:text-blue-600 text-xs font-black uppercase transition-colors">Facebook</a>
            <a href="#" className="text-slate-400 hover:text-pink-600 text-xs font-black uppercase transition-colors">Instagram</a>
            <a href="#" className="text-slate-400 hover:text-slate-900 text-xs font-black uppercase transition-colors">Twitter (X)</a>
            <div className="h-4 w-[1px] bg-slate-200"></div>
            <div className="text-[10px] font-bold text-slate-300 uppercase italic">Built for the future</div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;