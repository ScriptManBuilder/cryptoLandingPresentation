import Hero from './components/Hero/Hero';
import WhatItDoes from './components/WhatItDoes/WhatItDoes';
import Features from './components/Features/Features';
import Technology from './components/Technology/Technology';
import TradingLogic from './components/TradingLogic/TradingLogic';
import RiskManagement from './components/RiskManagement/RiskManagement';
import Screenshots from './components/Screenshots/Screenshots';
import Pricing from './components/Pricing/Pricing';
import FAQ from './components/FAQ/FAQ';
import { Navbar, ContactForm, PageFooter } from './components/Layout/Layout';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatItDoes />
        <Features />
        <Technology />
        <TradingLogic />
        <RiskManagement />
        <Screenshots />
        <Pricing />
        <FAQ />
        <ContactForm />
      </main>
      <PageFooter />
    </>
  );
}

export default App;
