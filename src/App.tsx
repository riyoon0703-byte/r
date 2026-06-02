/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Portfolio from './components/Portfolio';
import ProfileSection from './components/ProfileSection';
import Footer from './components/Footer';
import Admin from './components/Admin';
import CustomCursor from './components/CustomCursor';
import { PortfolioItem } from './types';
import { INITIAL_PORTFOLIO } from './constants';

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>(() => {
    const saved = localStorage.getItem('kim_riyoon_portfolio');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_PORTFOLIO;
      }
    }
    return INITIAL_PORTFOLIO;
  });

  const [profileImage, setProfileImage] = useState<string>(() => {
    const saved = localStorage.getItem('kim_riyoon_profile_image');
    return saved || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600';
  });

  useEffect(() => {
    localStorage.setItem('kim_riyoon_portfolio', JSON.stringify(portfolio));
  }, [portfolio]);

  useEffect(() => {
    localStorage.setItem('kim_riyoon_profile_image', profileImage);
  }, [profileImage]);

  return (
    <div className="min-h-screen bg-[#000] selection:bg-[#67DCF1] selection:text-black transition-colors duration-700 relative overflow-x-hidden text-white font-sans lg:cursor-none">      
      <CustomCursor />
      <header className="relative z-20">
        <Header isAdminOpen={isAdminOpen} setIsAdminOpen={setIsAdminOpen} />
      </header>
      
      <main className="relative z-10 w-full flex flex-col items-center">
        <Hero />
        <Introduction />
        <Portfolio items={portfolio} />
        <ProfileSection profileImage={profileImage} />
      </main>

      <Footer />

      <Admin 
        isOpen={isAdminOpen} 
        onClose={() => setIsAdminOpen(false)} 
        portfolio={portfolio}
        setPortfolio={setPortfolio}
        profileImage={profileImage}
        setProfileImage={setProfileImage}
      />
    </div>
  );
}
