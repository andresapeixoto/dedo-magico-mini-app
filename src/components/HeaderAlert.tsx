import React from 'react';
import { Sparkles, ShieldCheck, Smartphone } from 'lucide-react';

export const HeaderAlert: React.FC = () => {
  return (
    <div id="top-alert-banner" className="bg-gradient-to-r from-rose-950 via-rose-900 to-slate-950 text-rose-100 text-xs sm:text-sm py-2.5 px-4 border-b border-rose-800/40">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2 justify-center">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-rose-500/20 text-rose-300 border border-rose-400/30">
            MINI APP OFICIAL
          </span>
          <p className="font-medium tracking-wide">
            Acesso liberado ao <span className="font-bold text-white underline decoration-rose-400 underline-offset-2">Mini Aplicativo Interativo Dedo Mágico</span> para o seu celular!
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs font-medium text-rose-200/90">
          <span className="flex items-center gap-1.5">
            <Smartphone className="w-3.5 h-3.5 text-rose-400" />
            Acesso Imediato no Celular
          </span>
          <span className="hidden md:flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Garantia de 7 Dias
          </span>
        </div>
      </div>
    </div>
  );
};
