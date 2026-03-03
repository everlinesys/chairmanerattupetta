import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickHelp from './components/Quickhelp';
import Footer from './components/Footer';
import Connect from './components/Connect';
import Facebook from './components/facebook';

const App = () => {
  return (
    <div className="min-h-screen w-screen bg-[#FDFCF8] text-[#1A1A1A] selection:bg-blue-200">
      <Navbar />

      <Hero />
      <Facebook />
      <QuickHelp />
      <Connect />

      <Footer />
    </div>
  );
};

export default App;