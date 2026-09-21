import React, { useState, useEffect } from 'react';
import { APP_CONFIG } from '../data/copyData';
import { 
  Check, 
  ShieldCheck, 
  Lock, 
  CreditCard, 
  Zap, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  Smartphone,
  Flame
} from 'lucide-react';

interface PricingSectionProps {
  onCheckout?: () => void;
  checkoutUrl?: string;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ 
  onCheckout,
  checkoutUrl = APP_CONFIG.checkoutUrl 
}) => {
  // Countdown timer for direct traffic urgency
  const [timeLeft, setTimeLeft] = useState<{ minutes: number; seconds: number }>({
    minutes: 14,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 15, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="oferta-especial" className="bg-[#140512] text-white py-16 md:py-24 border-b border-rose-950 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Hook */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs sm:text-sm font-semibold">
            <Flame className="w-4 h-4 text-rose-400" />
            <span>OFERTA ESPECIAL DE ACESSO AO MINI APLICATIVO</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-white leading-tight">
            Você pode continuar repetindo o padrão. <br className="hidden sm:inline" />
            Ou pode <span className="text-rose-400 underline decoration-rose-500/70 underline-offset-4">entendê-lo e quebrá-lo HOJE</span>.
          </h2>

          <p className="text-sm sm:text-base text-rose-200/80">
            Tenha em mãos a ferramenta interativa definitiva para recalibrar suas escolhas amorosas pelo menor valor que já oferecemos:
          </p>
        </div>

        {/* Urgency Countdown Bar */}
        <div className="bg-rose-950/70 border border-rose-800/60 rounded-xl py-2.5 px-4 mb-8 max-w-md mx-auto flex items-center justify-center gap-3 text-xs sm:text-sm text-rose-200 shadow-md">
          <Clock className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>Condição promocional expira em:</span>
          <span className="font-mono font-bold text-white bg-slate-900/90 px-2 py-0.5 rounded border border-rose-800">
            {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
          </span>
        </div>

        {/* The Pricing Card */}
        <div className="bg-gradient-to-b from-[#220a1f] to-[#170615] rounded-3xl border-2 border-rose-500/80 shadow-2xl p-6 sm:p-10 relative overflow-hidden">
          
          {/* Top Stamp */}
          <div className="absolute top-0 right-0 bg-gradient-to-l from-rose-500 via-rose-600 to-amber-500 text-slate-950 font-black text-[11px] uppercase tracking-wider px-4 py-1.5 rounded-bl-2xl shadow-md">
            MELHOR CUSTO-BENEFÍCIO
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: What you get */}
            <div className="md:col-span-7 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">Acesso Imediato e Completo</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Mini Aplicativo Interativo Dedo Mágico v2.0
                </h3>
              </div>

              <ul className="space-y-3 pt-2 text-xs sm:text-sm text-rose-100/90">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Ferramenta 01 (Teste de Projeção):</strong> diagnóstico dinâmico de 10 perguntas (Realidade vs. Imagem).</span>
                </li>

                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Ferramenta 02 (O Ciclo da Projeção):</strong> mapa das 6 etapas para interromper o padrão automático.</span>
                </li>

                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Ferramenta 03 (Comparador):</strong> painel de 2 colunas para separar atitudes reais de expectativas.</span>
                </li>

                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Ferramentas 04 e 05 (Jornada & Diário):</strong> 30 dias guiados, protocolo do Animus e exportação em PDF.</span>
                </li>

                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Ferramenta 06 (Central de Ajuda):</strong> intervenção imediata para 8 situações de crise no amor.</span>
                </li>

                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Acesso direto no navegador:</strong> sem baixar nada, seguro e privativo em qualquer celular ou PC.</span>
                </li>
              </ul>
            </div>

            {/* Right Column: Price Tag & Button */}
            <div className="md:col-span-5 bg-slate-950/80 rounded-2xl p-6 border border-rose-900/60 text-center space-y-4 flex flex-col justify-between shadow-inner">
              
              <div className="space-y-1">
                <p className="text-xs text-rose-300/80 font-medium">
                  De <span className="line-through">{APP_CONFIG.originalPrice}</span> por apenas:
                </p>

                <div className="py-1">
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                    {APP_CONFIG.currentPrice}
                  </p>
                  <p className="text-xs font-semibold text-rose-300 mt-1">
                    à vista (pagamento único)
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    ou em até <strong className="text-white">{APP_CONFIG.installments}</strong>
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold border border-emerald-500/30">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Economia de R$ 80,00 hoje</span>
                </div>
              </div>

              {/* Checkout Button */}
              <div className="space-y-2 pt-2">
                <a
                  id="pricing-cta-button"
                  href={checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onCheckout}
                  className="w-full py-4 bg-gradient-to-r from-rose-600 via-rose-500 to-rose-600 hover:from-rose-500 hover:to-rose-400 text-white font-extrabold text-base sm:text-lg rounded-xl shadow-xl shadow-rose-600/50 hover:shadow-rose-600/70 transition-all transform active:scale-95 flex items-center justify-center gap-2 group animate-pulse-subtle cursor-pointer text-center"
                >
                  <span>QUERO MEU ACESSO AGORA</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <p className="text-[10px] text-slate-400">
                  Sem mensalidades • Acesso vitalício imediato
                </p>
              </div>

              {/* Security icons */}
              <div className="pt-3 border-t border-slate-900 flex items-center justify-center gap-3 text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-emerald-400" />
                  Compra Segura
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <CreditCard className="w-3.5 h-3.5 text-rose-400" />
                  PIX ou Cartão
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
