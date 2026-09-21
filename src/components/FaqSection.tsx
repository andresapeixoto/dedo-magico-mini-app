import React, { useState } from 'react';
import { FAQS } from '../data/copyData';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

interface FaqSectionProps {
  onCtaClick: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onCtaClick }) => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq-duvidas" className="bg-[#FFFFFF] text-slate-900 py-16 md:py-24 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-800 text-xs sm:text-sm font-bold tracking-wide">
            <HelpCircle className="w-4 h-4 text-slate-600" />
            <span>TIRE TODAS AS SUAS DÚVIDAS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Perguntas Frequentes
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Tudo o que você precisa saber sobre o Mini Aplicativo Dedo Mágico antes de dar o próximo passo com total segurança:
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all overflow-hidden ${isOpen ? 'border-rose-300 bg-rose-50/20 shadow-sm' : 'border-slate-200 bg-white hover:border-slate-300'}`}
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-rose-100 text-rose-700' : 'bg-slate-100 text-slate-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-rose-100/60 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Final CTA inside FAQ */}
        <div className="mt-14 text-center space-y-4 pt-6 border-t border-slate-100">
          <p className="text-sm font-semibold text-slate-700">
            Ainda com alguma dúvida? Não arrisque continuar repetindo os mesmos erros.
          </p>
          <button
            onClick={onCtaClick}
            className="px-8 py-4 bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white font-bold text-base rounded-xl shadow-lg transition-all inline-flex items-center gap-2"
          >
            <span>Desbloquear Mini App por R$ 17</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
