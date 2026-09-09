import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Dedicated Separate Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ResortKeysPage } from './pages/ResortKeysPage';
import { AdventurePage } from './pages/AdventurePage';
import { WellnessPage } from './pages/WellnessPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { WeddingsPage } from './pages/WeddingsPage';
import { GalleryPage } from './pages/GalleryPage';
import { InvestmentPage } from './pages/InvestmentPage';
import { MemberPlanPage } from './pages/MemberPlanPage';
import { InvestorBenefitsPage } from './pages/InvestorBenefitsPage';
import { LegalFormationPage } from './pages/LegalFormationPage';
import { LocationPage } from './pages/LocationPage';
import { ThankYouPage } from './pages/ThankYouPage';
import { ContactPage } from './pages/ContactPage';
import { PackagesPage } from './pages/PackagesPage';

// Login & Join Now Pages
import { LoginPage } from './pages/LoginPage';
import { JoinPage } from './pages/JoinPage';

// ScrollToTop Helper
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#cfa353] selection:text-slate-950 flex flex-col justify-between">
        {/* Fixed Responsive Navbar */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resort-keys" element={<ResortKeysPage />} />
            <Route path="/stay" element={<ResortKeysPage />} />
            <Route path="/adventure" element={<AdventurePage />} />
            <Route path="/wellness" element={<WellnessPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/weddings" element={<WeddingsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/investment" element={<InvestmentPage />} />
            <Route path="/member-plan" element={<MemberPlanPage />} />
            <Route path="/investor-benefits" element={<InvestorBenefitsPage />} />
            <Route path="/legal-formation" element={<LegalFormationPage />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            
            {/* Login & Join Routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/join" element={<JoinPage />} />

            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Luxury Resort Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
