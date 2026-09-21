import React from 'react';
import { APP_FEATURES } from '../data/copyData';
import { Sparkles, SearchCheck, ShieldAlert, Trophy, CheckSquare, Check, ArrowRight } from 'lucide-react';

interface AppFeaturesGridProps {
  onCtaClick: () => void;
}

export const AppFeaturesGrid: React.FC<AppFeaturesGridProps> = ({ onCtaClick }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-rose-400" />;
      case 'SearchCheck':
        return <SearchCheck className="w-5 h-5 text-amber-400" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-red-400" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-amber-300" />;
      case 'CheckSquare':
        return <CheckSquare className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-rose-400" />;
    }
  };

  return (
    <section id="funcionalidades-app" className="bg-[#120511] text-white py-16 md:py-24 border-b border-rose-950/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-rose-400" />
            <span>O QUE VOCÊ VAI DESBLOQUEAR DENTRO DO APLICATIVO</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
            6 Ferramentas Interativas que funcionam como uma <span className="text-rose-400">bússola emocional</span> no seu bolso
          </h2>

          <p className="text-base text-rose-200/80 leading-relaxed font-normal">
            Esqueça teorias complicadas. O Mini App foi estruturado em módulos intuitivos e práticos para você testar, comparar e agir com total clareza em tempo real.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {APP_FEATURES.map((feature, idx) => (
            <div
              key={feature.id}
              className={`rounded-2xl p-6 bg-[#1a0818] border border-rose-900/50 hover:border-rose-500/70 transition-all flex flex-col justify-between shadow-lg group ${idx === 0 ? 'md:col-span-2 lg:col-span-1 border-rose-600/40 bg-gradient-to-b from-[#220a20] to-[#1a0818]' : ''}`}
            >
              <div className="space-y-4">
                
                {/* Top badge & Icon */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-900/80 border border-rose-900/60 flex items-center justify-center">
                    {getIcon(feature.icon)}
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    {feature.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-rose-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs font-medium text-rose-300/80 mt-1">
                    {feature.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 pt-2 border-t border-rose-950">
                  {feature.highlightPoints.map((point, pIdx) => (
                    <li key={pIdx} className="text-xs text-rose-200 flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

              </div>

              {/* Screen Preview Card Widget inside the feature */}
              <div className="mt-5 pt-4 border-t border-rose-900/40">
                <div className="bg-slate-950/80 p-3 rounded-xl border border-rose-900/30 text-left">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                    <span>{feature.screenPreview.headerTitle}</span>
                    <span className="text-rose-400 font-semibold">{feature.screenPreview.cardTag}</span>
                  </div>
                  <p className="text-xs font-bold text-white truncate">
                    {feature.screenPreview.cardTitle}
                  </p>
                  <div className="mt-2 text-[10px] text-rose-300 flex items-center gap-1 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{feature.screenPreview.interactiveLabel}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA for features */}
        <div className="mt-12 text-center">
          <button
            onClick={onCtaClick}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white font-bold text-base rounded-xl shadow-lg shadow-rose-600/30 transition-all inline-flex items-center justify-center gap-3"
          >
            <span>Quero Acesso a Todas as Ferramentas por R$ 17</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-xs text-rose-300/70 mt-2">
            Acesso vitalício ao mini app • Sem mensalidade • Atualizações inclusas
          </p>
        </div>

      </div>
    </section>
  );
};
