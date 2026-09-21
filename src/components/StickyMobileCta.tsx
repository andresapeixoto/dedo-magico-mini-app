import React, { useState, useEffect } from 'react';
import { APP_CONFIG } from '../data/copyData';
import { ArrowRight, Sparkles } from 'lucide-react';

interface StickyMobileCtaProps {
  onCtaClick: () => void;
}

export const StickyMobileCta: React.FC<StickyMobileCtaProps> = ({ onCtaClick }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 500px
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside 
      aria-label="Barra de compra rápida"
      className="fixed bottom-0 inset-x-0 z-50 bg-[#170616]/95 backdrop-blur-md border-t border-rose-600/40 p-3 sm:py-3.5 sm:px-6 shadow-2xl transition-all duration-300 md:hidden"
    >
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        
        {/* Price & info */}
        <div className="flex flex-col">
          <span className="text-[10px] text-rose-300 font-semibold uppercase flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" />
            Oferta Lançamento
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-black text-white">{APP_CONFIG.currentPrice}</span>
            <span className="text-[10px] text-slate-400 line-through">{APP_CONFIG.originalPrice}</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={onCtaClick}
          className="flex-1 py-3 px-4 bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-rose-600/40 flex items-center justify-center gap-2 animate-pulse-subtle"
        >
          <span>ACESSAR O MINI APP</span>
          <ArrowRight className="w-4 h-4" />
        </button>

      </div>
    </aside>
  );
};
