import React from 'react';
import { Check, X, Sparkles, HeartHandshake, AlertCircle } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  return (
    <section id="publico-alvo" className="bg-[#FFFFFF] text-slate-900 py-16 md:py-24 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-800 text-xs sm:text-sm font-bold tracking-wide">
            <HeartHandshake className="w-4 h-4 text-slate-700" />
            <span>TRANSPARÊNCIA TOTAL</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Para quem é (e para quem NÃO é) o <span className="text-rose-600">Mini App Dedo Mágico</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Nós prezamos pelo seu tempo e pelos seus resultados. Veja com sinceridade se este aplicativo faz sentido para o seu momento atual:
          </p>
        </div>

        {/* 2 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* IS FOR YOU (Green/Rose Positive) */}
          <div className="bg-emerald-50/40 rounded-3xl p-6 sm:p-8 border-2 border-emerald-500/30 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-emerald-200 pb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-black shadow-md">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Perfeito para você</span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">Este Mini App É para você se:</h3>
                </div>
              </div>

              <ul className="space-y-3.5 text-sm sm:text-base text-slate-700">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span>Está <strong>cansada de atrair os mesmos homens errados</strong> que começam cheios de energia e depois esfriam.</span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span>Sente que sempre cai na <strong>mesma dinâmica emocional</strong> e quer desativar essa repetição de vez.</span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span>Deseja um relacionamento <strong>leve, saudável, seguro e verdadeiramente recíproco</strong>.</span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span>Não aguenta mais <strong>perder meses ou anos da sua juventude</strong> investindo em pessoas sem futuro.</span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span>Independentemente de ter <strong>25, 35, 45 ou 55 anos</strong>, quer ferramentas práticas para usar no dia a dia.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-200 text-xs font-semibold text-emerald-800 text-center">
              ✓ Você terá em mãos o método mais rápido para recalibrar sua postura
            </div>
          </div>

          {/* IS NOT FOR YOU (Red Negative) */}
          <div className="bg-rose-50/40 rounded-3xl p-6 sm:p-8 border-2 border-rose-300/40 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-rose-200 pb-4">
                <div className="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center font-black shadow-md">
                  <X className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">Por favor, não adquira</span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">Este Mini App NÃO é para você se:</h3>
                </div>
              </div>

              <ul className="space-y-3.5 text-sm sm:text-base text-slate-700">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-rose-600" />
                  </div>
                  <span>Acredita que o problema são <em>"apenas os homens"</em> e se recusa a olhar para suas próprias escolhas inconscientes.</span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-rose-600" />
                  </div>
                  <span>Está procurando por <strong>fórmulas mágicas de manipulação ou joguinhos de mensagens</strong> para prender homem.</span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-rose-600" />
                  </div>
                  <span>Prefere continuar no papel de vítima e reclamar com as amigas em vez de aplicar ferramentas reais de mudança.</span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-rose-600" />
                  </div>
                  <span>Não está disposta a dedicar <strong>3 a 5 minutos por dia</strong> no aplicativo para transformar sua vida amorosa.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-rose-200 text-xs font-semibold text-rose-800 text-center">
              ⚠️ Buscamos mulheres comprometidas com o próprio valor
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
