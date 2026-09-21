import React from 'react';
import { ShieldCheck, Award, Lock, RotateCcw } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section id="garantia-incondicional" className="bg-[#051A11] text-white py-16 md:py-20 border-b border-emerald-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="bg-[#09261a] rounded-3xl p-6 sm:p-10 border border-emerald-600/40 shadow-2xl flex flex-col md:flex-row items-center gap-8">
          
          {/* Guarantee Badge Stamp */}
          <div className="shrink-0 flex flex-col items-center text-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-amber-400 p-1 shadow-xl flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center p-2 text-center">
                <ShieldCheck className="w-8 h-8 text-emerald-400" />
                <span className="text-xl font-black text-white leading-none mt-1">7 DIAS</span>
                <span className="text-[9px] uppercase font-bold text-amber-300">Garantia Total</span>
              </div>
            </div>
            <span className="text-[11px] font-bold text-emerald-300 mt-2">
              RISCO ZERO PARA VOCÊ
            </span>
          </div>

          {/* Guarantee Text */}
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              <span>COMPROMISSO BLINDADO</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Teste o Mini Aplicativo por 7 dias inteiros por nossa conta
            </h3>

            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              Faça o Teste do Padrão Invisível, consulte o Decodificador de Sinais e experimente o Botão SOS no seu dia a dia. Se por qualquer motivo você sentir que as ferramentas não trouxeram clareza ou não valeram a pena, basta enviar um único e-mail para o nosso suporte e <strong>devolvemos 100% do seu dinheiro</strong>. Sem perguntas, sem insistência e sem letrinhas miúdas.
            </p>

            <div className="pt-1 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-semibold text-emerald-300">
              <span className="flex items-center gap-1">
                <RotateCcw className="w-3.5 h-3.5 text-emerald-400" />
                Reembolso em 1 clique
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                Transação 100% Segura
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
