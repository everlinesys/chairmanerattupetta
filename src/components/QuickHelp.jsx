import React from 'react';

const QuickHelp = () => {
  const services = [
    {
      title: "e-District Kerala",
      desc: "Apply for Income, Caste & Nativity Certificates.",
      link: "https://edistrict.kerala.gov.in/",
      icon: "📜",
      color: "bg-blue-50 text-blue-700 border-blue-100"
    },
    {
      title: "Building Permit",
      desc: "Track SANKETHAM applications & plan approvals.",
      link: "https://tax.lsgkerala.gov.in/epayment/",
      icon: "🏠",
      color: "bg-emerald-50 text-emerald-700 border-emerald-100"
    },
    {
      title: "Birth/Death/Marriage",
      desc: "Download official Sevana registrations.",
      link: "https://cr.lsgkerala.gov.in/",
      icon: "📅",
      color: "bg-purple-50 text-purple-700 border-purple-100"
    },
    {
      title: "Akshaya Login",
      desc: "Find your nearest Akshaya Center services.",
      link: "https://www.akshaya.kerala.gov.in/",
      icon: "📍",
      color: "bg-orange-50 text-orange-700 border-orange-100"
    }
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
        <div>
          <span className="text-blue-600 font-black uppercase tracking-widest text-xs">Citizen Desk</span>
          <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase mt-2">
            Easy <span className="text-slate-400">Services</span>
          </h2>
        </div>
        <p className="text-slate-500 font-medium max-w-xs md:text-right">
          Direct access to Kerala Government portals. No more searching through tabs.
        </p>
      </div>

      {/* Grid of Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <a 
            key={index}
            href={service.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group p-8 rounded-[2rem] border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${service.color} flex flex-col justify-between min-h-[220px]`}
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">
              {service.icon}
            </div>
            <div>
              <h3 className="text-xl font-black mb-2 leading-tight group-hover:underline">
                {service.title}
              </h3>
              <p className="text-sm opacity-80 font-medium leading-snug">
                {service.desc}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Extra Help Banner */}
      <div className="mt-12 bg-slate-900 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full"></div>
        
        <div className="relative z-10">
          <h4 className="text-white text-2xl font-black uppercase italic tracking-tighter">
            Can't find what you're looking for?
          </h4>
          <p className="text-slate-400 font-medium mt-1">
            Our municipal office help desk is open Mon-Sat, 10 AM to 5 PM.
          </p>
        </div>

        <div className="relative z-10 flex gap-3">
          <a 
            href="tel:04822272063" 
            className="bg-white text-black px-6 py-3 rounded-xl font-black uppercase text-xs hover:bg-blue-600 hover:text-white transition-all shadow-lg"
          >
            Call Desk
          </a>
          <button className="bg-slate-800 text-white px-6 py-3 rounded-xl font-black uppercase text-xs border border-white/10 hover:bg-slate-700 transition-all">
            Office Map
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuickHelp;