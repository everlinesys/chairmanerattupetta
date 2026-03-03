import React, { useState } from 'react';

const Connect = () => {
  const [message, setMessage] = useState('');
  const chairmanEmail = "etpamun@gmail.com";

  const handleSendMail = (e) => {
    e.preventDefault();
    // This creates the professional mail link
    const subject = encodeURIComponent("Public Grievance / Suggestion - Erattupetta Citizen");
    const body = encodeURIComponent(`${message}\n\n---\nSent via Erattupetta Digital Portal`);
    
    window.location.href = `mailto:${chairmanEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="connect" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="bg-[#F3F4F1] rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center overflow-hidden relative">
        
        {/* Decorative Element */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>

        {/* Text Content */}
        <div className="lg:w-1/2 relative z-10">
          <span className="text-blue-600 font-black uppercase tracking-widest text-xs">Direct Line</span>
          <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mt-4 leading-[0.85]">
            Have a <br />
            <span className="text-slate-400 underline decoration-blue-600/30">Concern?</span>
          </h2>
          <p className="mt-8 text-slate-600 font-medium text-lg leading-relaxed max-w-sm">
            Write your message here. It will open your mail app so you can send it directly to the Chairman's desk. 
            <span className="text-slate-900 font-bold"> No middleman.</span>
          </p>
          
          <div className="mt-10 flex flex-col gap-2">
            <div className="flex items-center gap-3 text-sm font-black uppercase tracking-tight text-slate-400">
               <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
               Response time: 48 Hours
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="lg:w-1/2 w-full relative z-10">
          <form onSubmit={handleSendMail} className="flex flex-col gap-4">
            <textarea 
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your complaint or suggestion here..."
              className="w-full p-8 rounded-[2rem] bg-white border-2 border-transparent focus:border-blue-600 focus:outline-none text-slate-800 font-medium text-lg shadow-xl shadow-black/5 placeholder:text-slate-300 transition-all resize-none"
              required
            ></textarea>
            
            <button 
              type="submit"
              className="group bg-blue-600 text-white p-6 rounded-[1.5rem] font-black uppercase italic tracking-tighter text-xl flex items-center justify-center gap-3 hover:bg-slate-900 hover:scale-[1.02] transition-all active:scale-95 shadow-2xl shadow-blue-500/20"
            >
              Send to Chairman
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </form>
          
          <p className="text-center mt-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
            Official Email: {chairmanEmail}
          </p>
        </div>

      </div>
    </section>
  );
};

export default Connect;