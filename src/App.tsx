import React, { useState } from 'react';
import { HeaderAlert } from './components/HeaderAlert';
import { HeroSection } from './components/HeroSection';
import { EvolutionComparison } from './components/EvolutionComparison';
import { InteractiveAppSimulator } from './components/InteractiveAppSimulator';
import { CreatorStory } from './components/CreatorStory';
import { AppFeaturesGrid } from './components/AppFeaturesGrid';
import { TargetAudience } from './components/TargetAudience';
import { SocialProof } from './components/SocialProof';
import { BeforeAfter } from './components/BeforeAfter';
import { BonusesSection } from './components/BonusesSection';
import { PricingSection } from './components/PricingSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { DirectToBottomSummary } from './components/DirectToBottomSummary';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { StickyMobileCta } from './components/StickyMobileCta';
import { CheckoutModal } from './components/CheckoutModal';
import { APP_CONFIG } from './data/copyData';

export default function App() {
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState(APP_CONFIG.checkoutUrl);

  const scrollToPricing = () => {
    const pricingElement = document.getElementById('oferta-especial');
    if (pricingElement) {
      pricingElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsCheckoutModalOpen(true);
    }
  };

  const scrollToSimulator = () => {
    const simElement = document.getElementById('simulador-interativo');
    if (simElement) {
      simElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCheckout = () => {
    setIsCheckoutModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#150614] text-slate-900 font-sans selection:bg-rose-500 selection:text-white flex flex-col">
      {/* 0. Top Alert Banner */}
      <HeaderAlert />

      <main className="flex-grow">
        {/* 1. Hero Section (Dark Plum/Burgundy) */}
        <HeroSection 
          onCtaClick={scrollToPricing} 
          onOpenSimulador={scrollToSimulator}
        />

        {/* 2. Evolution Section: PDF vs Mini App (Light Warm Ivory) */}
        <EvolutionComparison 
          onCtaClick={scrollToPricing} 
        />

        {/* 3. Interactive App Simulator (Dark Aubergine) */}
        <InteractiveAppSimulator 
          onCtaClick={scrollToPricing} 
        />

        {/* 4. Creator Story: Andresa Schleicher (Soft Sand Light) */}
        <CreatorStory />

        {/* 5. App Features Grid (Midnight Dark) */}
        <AppFeaturesGrid 
          onCtaClick={scrollToPricing} 
        />

        {/* 6. Target Audience: Para quem é vs Não é (Clean Pure White) */}
        <TargetAudience />

        {/* 7. Social Proof: Depoimentos Reais (Dark Elegant) */}
        <SocialProof />

        {/* 8. Before & After (Warm Light Ivory) */}
        <BeforeAfter 
          onCtaClick={scrollToPricing} 
        />

        {/* 9. Bonuses Section (Dark Burgundy) */}
        <BonusesSection 
          onCtaClick={scrollToPricing} 
        />

        {/* 10. Pricing & Offer Section (Dark Luxury Gold/Rose) */}
        <PricingSection 
          checkoutUrl={checkoutUrl}
        />

        {/* 11. Guarantee Section (Emerald Green Dark) */}
        <GuaranteeSection />

        {/* 12. Direct to Bottom Summary (Warm Editorial Light) */}
        <DirectToBottomSummary 
          onCtaClick={handleOpenCheckout} 
        />

        {/* 13. FAQ Accordion (Clean Light) */}
        <FaqSection 
          onCtaClick={scrollToPricing} 
        />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* 15. Mobile Sticky Floating CTA */}
      <StickyMobileCta 
        onCtaClick={scrollToPricing} 
      />

      {/* 16. Checkout / Action Modal */}
      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        checkoutUrl={checkoutUrl}
        onUpdateCheckoutUrl={setCheckoutUrl}
      />
    </div>
  );
}
