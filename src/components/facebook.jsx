import React from 'react';

const Facebook = () => {
  // Replace this with the Chairman's official Public Page URL once he switches to Pro Mode/Page
  const pageUrl = "https://www.facebook.com/vpnazar.nazar";

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
        <div className="text-center md:text-left">
          <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px]">Live Connection</span>
          <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase mt-1">
            The <span className="text-slate-300">Social</span> Desk
          </h2>
        </div>
        
        <div className="flex gap-3">
          <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-100">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-black uppercase text-emerald-600 tracking-widest">Real-time Feed</span>
          </div>
        </div>
      </div>

      {/* The Main Frame Container */}
      <div className="relative group">
        {/* Background Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-[3.5rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
        
        <div className="relative bg-[#F8F9FA] border border-white rounded-[3rem] p-4 md:p-8 shadow-2xl shadow-blue-900/5 overflow-hidden">
          
          {/* Custom "Browser-like" Header for the Frame */}
          <div className="flex items-center justify-between mb-6 px-4">
             <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
             </div>
             <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">facebook.com/vpnazar</p>
          </div>

          <div className="flex justify-center">
            {/* The Facebook Iframe */}
            <div className="w-full max-w-[500px] bg-white rounded-[2rem] shadow-inner overflow-hidden border border-slate-100">
              <iframe
                src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(pageUrl)}&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`}
                width="500"
                height="600"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                className="w-full min-h-[600px]"
              ></iframe>
            </div>
          </div>

          {/* Footer Action */}
          <div className="mt-8 text-center">
            <a 
              href={pageUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-tighter text-blue-600 hover:text-slate-900 transition-colors"
            >
              Open in Facebook App 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facebook;