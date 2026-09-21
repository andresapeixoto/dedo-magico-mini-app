import React from 'react';
import { BONUSES } from '../data/copyData';
import { Gift, CheckCircle2, Smartphone, ArrowRight, Sparkles } from 'lucide-react';

interface BonusesSectionProps {
  onCtaClick: () => void;
}

export const BonusesSection: React.FC<BonusesSectionProps> = ({ onCtaClick }) => {
  return (
    <section id="bonus-exclusivos" className="bg-[#20091E] text-white py-16 md:py-24 border-b border-rose-900/60 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold tracking-wide">
            <Gift className="w-4 h-4 text-amber-400" />
            <span>BÔNUS EXCLUSIVOS DE LANÇAMENTO</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
            3 Ferramentas Extras <span className="text-rose-400">100% Integradas no seu Mini App</span>
          </h2>

          <p className="text-sm sm:text-base text-rose-200/85">
            Recursos exclusivos projetados para acelerar seus resultados, funcionando diretamente na tela do seu celular sem complicações:
          </p>
        </div>

        {/* Bonus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BONUSES.map((bonus) => (
            <div
              key={bonus.id}
              className="bg-[#290e27] rounded-3xl p-6 border border-rose-800/50 shadow-xl flex flex-col justify-between hover:border-amber-400/60 transition-all group"
            >
              <div className="space-y-4">
                
                {/* Top Number & Tag */}
                <div className="flex items-center justify-between border-b border-rose-900/50 pb-4">
                  <span className="text-2xl font-black text-rose-400 group-hover:text-amber-400 transition-colors">
                    BÔNUS #{bonus.number}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    {bonus.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-rose-300 transition-colors">
                    {bonus.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-rose-300 line-through">Vendido separado por {bonus.originalValue}</span>
                    <span className="text-xs font-black text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                      GRÁTIS HOJE
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {bonus.description}
                </p>

              </div>

              {/* Differential in App */}
              <div className="mt-6 pt-4 border-t border-rose-900/40">
                <div className="bg-slate-950/60 p-3 rounded-xl border border-rose-900/30">
                  <p className="text-[11px] font-bold text-amber-300 flex items-center gap-1.5 mb-1">
                    <Smartphone className="w-3.5 h-3.5 text-amber-400" />
                    Como funciona no Mini App:
                  </p>
                  <p className="text-[11px] text-rose-100/80 leading-relaxed">
                    {bonus.appIntegrationBenefit}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Total Value Summary */}
        <div className="mt-12 bg-gradient-to-r from-rose-950/80 via-slate-950/90 to-rose-950/80 border border-rose-800/60 rounded-2xl p-6 text-center max-w-2xl mx-auto space-y-3">
          <p className="text-xs sm:text-sm uppercase font-bold tracking-wider text-rose-300">
            Mais de <span className="text-white underline decoration-amber-400 font-extrabold text-base">R$ 171,00 em bônus</span> inclusos gratuitamente
          </p>
          <p className="text-xs text-slate-300">
            Garantidos sem custo extra quando você desbloquear o Mini Aplicativo Dedo Mágico nesta página.
          </p>
          <div className="pt-2">
            <button
              onClick={onCtaClick}
              className="px-6 py-3 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-400 hover:to-rose-500 text-white font-bold rounded-xl text-sm shadow-md transition-all inline-flex items-center gap-2"
            >
              <span>Garantir Meus Bônus Gratuitos no App</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
