import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Certifications } from './components/Certifications';
import { About } from './components/About';
import { Timeline } from './components/Timeline';
import { Tech } from './components/Tech';
import { Contact } from './components/Contact';
import { Resume } from './components/Resume';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-background min-h-screen text-white font-sans selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Certifications />
        <About />
        <Timeline />
        <Tech />
        <Contact />
        <Resume />
      </main>
      <Footer />
    </div>
  );
};

export default App;
