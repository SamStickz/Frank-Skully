
import Navigation from "./components/Navigation";
import Hero from "./components/Hero.jsx";
import Awards from "./components/Awards.jsx";
import Journey from "./components/Journey.jsx";
import BlantyreHouse from "./components/BlantyreHouse.jsx";
import BlackSanta from "./components/BlackSanta.jsx";
import ActingWork from "./components/ActingWork.jsx";
import HardTalkingExCons from "./components/HardTalkingExCons.jsx";
import About from "./components/About.jsx";
import Philosophy from "./components/Philosophy.jsx";

import Services from "./components/Services.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-100">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap');
        
        .font-display { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-body { font-family: 'Montserrat', -apple-system, sans-serif; }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        * { scroll-behavior: smooth; }
      `}</style>

     
      <Navigation />
      <Hero />
      <Awards />
      <Journey />
      <BlantyreHouse />
      <BlackSanta />
      <ActingWork />
      <About />
      <Philosophy />
      <HardTalkingExCons />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
