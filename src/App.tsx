import Hero from './components/Hero/Hero';
import WhatItDoes from './components/WhatItDoes/WhatItDoes';
import Features from './components/Features/Features';
import Technology from './components/Technology/Technology';
import TradingLogic from './components/TradingLogic/TradingLogic';
import RiskManagement from './components/RiskManagement/RiskManagement';
import Screenshots from './components/Screenshots/Screenshots';
import Pricing from './components/Pricing/Pricing';
import FAQ from './components/FAQ/FAQ';
import { ContactForm } from './components/Layout/Layout';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TermsConditions from './pages/termsConditions';
import PrivacyPolicy from './pages/privacyPolicy';
import Disclaimer from './pages/disclaimer';

function MainPage() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
