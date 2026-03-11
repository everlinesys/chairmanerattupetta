import React from 'react';

const Hero = () => {
    return (
        <section className="pt-28 pb-12 px-4 md:px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

                {/* LEFT COLUMN: The Personal Greeting */}
                <div className="lg:col-span-7 bg-emerald-600 rounded-[2.5rem] p-8 md:p-14 text-white relative overflow-hidden flex flex-col justify-between min-h-[450px]">
                    {/* Decorative Circle */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="h-[1px] w-12 bg-emerald-300"></span>
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-100">Official Office</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter italic uppercase mb-6">
                            Making <br />
                            <span className="text-emerald-100">Erattupetta</span> <br />
                            Great Again.
                        </h1>

                        <p className="text-lg md:text-xl text-blue-100 max-w-md font-medium leading-tight">
                            A digital space for our citizens to connect, report, and grow together.
                            Straight talk, no bureaucracy.
                        </p>
                    </div>

                    <div className="relative z-10 flex gap-4 mt-8">
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-black uppercase text-xs hover:scale-105 transition-transform shadow-lg">
                            Check Status
                        </button>
                        <button className="bg-blue-700/50 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-black uppercase text-xs border border-white/10 hover:bg-blue-800 transition-colors">
                            The Plan 2026
                        </button>
                    </div>
                </div>

                {/* RIGHT COLUMN TOP: The Chairman (Placeholder) */}
                <div className="lg:col-span-5 grid grid-rows-2 gap-4">
                    <div className="bg-slate-200 rounded-[2.5rem] relative overflow-hidden group">
                        <img
                            src="/chairman.jpg"
                            className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            alt="Chairman"
                        />
                        <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/80 backdrop-blur-md rounded-2xl">
                            <p className="text-[10px] font-black uppercase text-slate-500 mb-1">Municipal Chairman</p>
                            <p className="text-lg font-black text-slate-900 leading-none">Adv. V P Nazar</p>
                        </div>
                    </div>

                    {/* RIGHT COLUMN BOTTOM: Stats / Quick Fact */}
                    <div className="bg-[#EFECE6] rounded-[2.5rem] p-8 flex flex-col justify-center border border-slate-200/50">
                        <div className="flex items-baseline gap-2">
                            <span className="text-6xl font-black text-blue-600 italic tracking-tighter">28</span>
                            <span className="text-lg font-bold text-slate-800 uppercase leading-none">Wards <br />Represented</span>
                        </div>
                        <div className="mt-6 flex -space-x-3 overflow-hidden">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="inline-block h-10 w-10 rounded-full ring-4 ring-[#EFECE6] bg-slate-400 border border-white flex items-center justify-center text-[10px] font-bold text-white uppercase">
                                    W{i}
                                </div>
                            ))}
                            <div className="h-10 w-10 rounded-full ring-4 ring-[#EFECE6] bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white italic">
                                +23
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;