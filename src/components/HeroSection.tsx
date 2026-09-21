import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Smartphone, 
  Flame, 
  AlertTriangle, 
  HeartCrack, 
  Repeat, 
  ShieldCheck, 
  Zap,
  Play
} from 'lucide-react';
import { APP_CONFIG } from '../data/copyData';

interface HeroSectionProps {
  onCtaClick: () => void;
  onOpenSimulador: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick, onOpenSimulador }) => {
  const [activeTab, setActiveTab] = useState<'diag' | 'sos' | 'radar'>('diag');

  return (
    <section id="hero-section" className="relative overflow-hidden bg-[#150614] text-white pt-8 pb-16 md:pt-14 md:pb-24 border-b border-rose-950/60">
      {/* Background ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[400px] bg-rose-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -top-32 right-0 w-80 h-80 bg-fuchsia-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Eyebrow Tag */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/15 border border-rose-400/30 text-rose-300 text-xs sm:text-sm font-semibold tracking-wide shadow-sm backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-rose-400 animate-spin-slow" />
            <span>Para mulheres que repetem os mesmos padrões amorosos</span>
          </div>
        </div>

        {/* Main Headlines */}
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.15] tracking-tight">
            Você não tem <span className="text-rose-400 underline decoration-rose-500/60 underline-offset-4">dedo podre</span>. <br className="hidden sm:inline" />
            Você tem um <span className="text-white bg-gradient-to-r from-rose-200 via-rose-100 to-white bg-clip-text text-transparent">padrão invisível</span> que pode ser quebrado.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-rose-100/80 font-normal leading-relaxed max-w-3xl mx-auto">
            Não é azar. Não é falta de sorte. É um código emocional inconsciente que dita suas escolhas amorosas — e que agora você aprende a <strong className="text-rose-300 font-semibold">desligar na prática</strong> com o <span className="text-white font-semibold underline decoration-rose-400">Mini Aplicativo Interativo Dedo Mágico</span>.
          </p>
        </div>

        {/* Hero Content Grid: Copy + App Mockup */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Pain Points & Direct Call to Action */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* The 4 Pain Bullet Points from original copy */}
            <div className="space-y-3.5 bg-rose-950/30 border border-rose-900/40 p-4 sm:p-5 rounded-2xl backdrop-blur-sm">
              <p className="text-xs uppercase font-bold tracking-wider text-rose-300/80">
                Identifique se isso acontece com você:
              </p>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-rose-500/20 border border-rose-500/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Flame className="w-3.5 h-3.5 text-rose-400" />
                </div>
                <p className="text-sm sm:text-base text-rose-100/90 font-medium">
                  <strong>Sente atração somente por quem não está disponível</strong> (físico ou emocionalmente).
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <p className="text-sm sm:text-base text-rose-100/90 font-medium">
                  <strong>Percebe os sinais de alerta só depois de se envolver</strong> e se decepcionar novamente.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-rose-500/20 border border-rose-500/40 flex items-center justify-center shrink-0 mt-0.5">
                  <HeartCrack className="w-3.5 h-3.5 text-rose-400" />
                </div>
                <p className="text-sm sm:text-base text-rose-100/90 font-medium">
                  <strong>Termina um relacionamento e repete exatamente a mesma história</strong> com um rosto diferente.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-fuchsia-500/20 border border-fuchsia-500/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Repeat className="w-3.5 h-3.5 text-fuchsia-400" />
                </div>
                <p className="text-sm sm:text-base text-rose-100/90 font-medium">
                  Fala que <strong>"dessa vez vai ser diferente"</strong> e acaba descobrindo as mesmas mentiras ou desculpas.
                </p>
              </div>
            </div>

            {/* Direct App Advantage Note */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-rose-900/40 to-slate-900/40 border border-rose-700/30 text-xs sm:text-sm text-rose-200">
              <span className="font-bold text-rose-300">⚡ Ação Imediata no Bolso:</span> Ao invés de conselhos teóricos que você esquece na hora da carência, o Mini App te dá ferramentas práticas de bolso para agir no momento exato em que a dúvida ou a ansiedade bater.
            </div>

            {/* Main Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                id="hero-cta-button"
                onClick={onCtaClick}
                className="w-full sm:w-auto min-w-[280px] px-8 py-4 bg-gradient-to-r from-rose-600 via-rose-500 to-rose-600 hover:from-rose-500 hover:to-rose-500 text-white font-bold text-base sm:text-lg rounded-xl shadow-lg shadow-rose-600/40 hover:shadow-rose-600/60 transition-all transform active:scale-[0.98] flex items-center justify-center gap-3 group animate-pulse-subtle"
              >
                <span>QUERO MEU ACESSO AO MINI APP</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-3 pt-1">
                <button
                  id="hero-simulator-button"
                  onClick={onOpenSimulador}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-rose-300 hover:text-white underline underline-offset-4 decoration-rose-400/50 hover:decoration-rose-300 transition-colors"
                >
                  <Play className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                  <span>Experimentar teste interativo gratuito abaixo ↓</span>
                </button>
              </div>
            </div>

            {/* Guarantee Microcopy */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-rose-300/80 pt-1">
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                Acesso Digital Imediato
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Sem Mensalidade (Pagamento Único)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-400" />
                Garantia Incondicional de 7 Dias
              </span>
            </div>

          </div>

          {/* Right Column: High-Fidelity Smartphone Mockup showing the Dedo Mágico Mini App */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[360px]">
              
              {/* Glow Behind Mockup */}
              <div className="absolute inset-0 bg-gradient-to-t from-rose-500/30 to-fuchsia-500/20 blur-2xl rounded-[40px] -z-10" />

              {/* Phone Frame */}
              <div className="relative rounded-[40px] p-3 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 shadow-2xl border-4 border-slate-700/80">
                
                {/* Phone Notch / Dynamic Island */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-950 rounded-full z-30 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800 mr-2" />
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500/60" />
                </div>

                {/* Inner Screen Content */}
                <div className="bg-[#190918] rounded-[32px] overflow-hidden text-slate-100 border border-rose-900/40 flex flex-col min-h-[510px]">
                  
                  {/* App Bar */}
                  <div className="pt-8 pb-3 px-4 bg-gradient-to-b from-rose-950/80 to-transparent border-b border-rose-900/30 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-rose-500 flex items-center justify-center text-xs font-black text-white shadow">
                        DM
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white leading-tight">Dedo Mágico</p>
                        <p className="text-[10px] text-rose-300">Mini App v2.0</p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      ● Ativo
                    </span>
                  </div>

                  {/* Interactive App Tabs Simulation */}
                  <div className="px-3 pt-3 flex gap-1 border-b border-rose-900/30 text-[11px] font-semibold">
                    <button
                      onClick={() => setActiveTab('diag')}
                      className={`flex-1 py-1.5 rounded-lg transition-colors ${activeTab === 'diag' ? 'bg-rose-500/30 text-rose-200 border border-rose-500/40' : 'text-slate-400 hover:text-slate-200'}`}
                    >
                      Diagnóstico
                    </button>
                    <button
                      onClick={() => setActiveTab('sos')}
                      className={`flex-1 py-1.5 rounded-lg transition-colors ${activeTab === 'sos' ? 'bg-rose-500/30 text-rose-200 border border-rose-500/40' : 'text-slate-400 hover:text-slate-200'}`}
                    >
                      Botão SOS
                    </button>
                    <button
                      onClick={() => setActiveTab('radar')}
                      className={`flex-1 py-1.5 rounded-lg transition-colors ${activeTab === 'radar' ? 'bg-rose-500/30 text-rose-200 border border-rose-500/40' : 'text-slate-400 hover:text-slate-200'}`}
                    >
                      Red Flags
                    </button>
                  </div>

                  {/* Tab Screen Body */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3 text-left">
                    {activeTab === 'diag' && (
                      <div className="space-y-3">
                        <div className="p-2.5 rounded-xl bg-rose-950/60 border border-rose-800/40">
                          <p className="text-[10px] text-rose-300 font-bold uppercase tracking-wider">Padrão Detectado</p>
                          <p className="text-sm font-bold text-white mt-0.5">Atração por Indisponibilidade Emocional</p>
                          <div className="w-full bg-slate-900 h-1.5 rounded-full mt-2 overflow-hidden">
                            <div className="bg-rose-500 h-full w-[84%]" />
                          </div>
                          <p className="text-[10px] text-rose-300/80 mt-1 flex justify-between">
                            <span>Grau de apego ansioso:</span>
                            <strong className="text-rose-300 font-bold">84%</strong>
                          </p>
                        </div>

                        <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-800 space-y-1.5">
                          <p className="text-[11px] font-semibold text-rose-200 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                            Gatilho Inconsciente:
                          </p>
                          <p className="text-[11px] text-slate-300 leading-snug">
                            Você confunde frieza e mistério com intensidade. Quando ele se afasta, seu cérebro busca validação.
                          </p>
                        </div>

                        <div className="p-2 bg-rose-500/15 border border-rose-500/30 rounded-lg text-[10px] text-rose-200">
                          🎯 <strong>Ação de Reprogramação:</strong> Não responda no mesmo minuto. Espere 20 minutos e leia o cartão SOS.
                        </div>
                      </div>
                    )}

                    {activeTab === 'sos' && (
                      <div className="space-y-3">
                        <div className="p-3 rounded-xl bg-red-950/70 border border-red-800/60 text-center">
                          <div className="w-10 h-10 rounded-full bg-red-600/30 border border-red-500 flex items-center justify-center mx-auto mb-1.5">
                            <AlertTriangle className="w-5 h-5 text-red-400" />
                          </div>
                          <p className="text-xs font-bold text-white">Freio de Ansiedade Ativo</p>
                          <p className="text-[11px] text-red-200 mt-1">
                            "Antes de mandar esse textão de 3 parágrafos, respire fundo por 60 segundos."
                          </p>
                        </div>

                        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                          <p className="text-[10px] font-bold text-amber-300">O que vai acontecer se você mandar:</p>
                          <p className="text-[11px] text-slate-300">
                            Ele terá a certeza de que tem você na mão sem nenhum compromisso.
                          </p>
                        </div>

                        <button className="w-full py-2 bg-rose-600 text-white rounded-lg text-xs font-bold shadow">
                          Ativar Respiração Anti-Ansiedade
                        </button>
                      </div>
                    )}

                    {activeTab === 'radar' && (
                      <div className="space-y-2.5">
                        <p className="text-[11px] font-bold text-rose-200">Decodificador de Atitudes:</p>
                        
                        <div className="space-y-1.5 text-[11px]">
                          <div className="p-2 rounded-lg bg-red-950/40 border border-red-900/40 flex items-center justify-between">
                            <span className="text-slate-200">Some e volta do nada</span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-red-500/20 text-red-300 font-bold">Cilada</span>
                          </div>
                          <div className="p-2 rounded-lg bg-red-950/40 border border-red-900/40 flex items-center justify-between">
                            <span className="text-slate-200">Promete muito no 1º mês</span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">Love Bombing</span>
                          </div>
                          <div className="p-2 rounded-lg bg-emerald-950/40 border border-emerald-900/40 flex items-center justify-between">
                            <span className="text-slate-200">Consistente e claro</span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">Saudável</span>
                          </div>
                        </div>

                        <div className="text-[10px] text-slate-400 text-center pt-1">
                          Mini app com +40 atitudes decodificadas
                        </div>
                      </div>
                    )}

                    {/* Bottom action button inside phone */}
                    <div className="pt-2 border-t border-rose-900/30 text-center">
                      <p className="text-[10px] text-rose-300/80 mb-1.5">Acesse instantaneamente no seu celular</p>
                      <button
                        onClick={onCtaClick}
                        className="w-full py-2.5 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-xl text-xs font-bold shadow-md hover:from-rose-400 hover:to-rose-500 transition-all"
                      >
                        Desbloquear Mini App Completo
                      </button>
                    </div>

                  </div>

                </div>

              </div>

              {/* Float badge */}
              <div className="absolute -bottom-3 -right-2 bg-gradient-to-r from-amber-500 to-rose-500 text-slate-950 text-[11px] font-black px-3.5 py-1.5 rounded-full shadow-lg border-2 border-slate-900 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                <span>SEM INSTALAÇÃO PESADA</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
