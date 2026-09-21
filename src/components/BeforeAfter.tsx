import React from 'react';
import { ArrowRight, XCircle, CheckCircle2, Sparkles } from 'lucide-react';

interface BeforeAfterProps {
  onCtaClick: () => void;
}

export const BeforeAfter: React.FC<BeforeAfterProps> = ({ onCtaClick }) => {
  return (
    <section id="antes-depois" className="bg-[#FAF6F3] text-slate-900 py-16 md:py-24 border-b border-rose-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100 text-rose-800 text-xs sm:text-sm font-bold tracking-wide">
            <Sparkles className="w-4 h-4 text-rose-600" />
            <span>A TRANSFORMAÇÃO NA PRÁTICA</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            A sua vida <span className="text-slate-500">ANTES</span> vs. A sua vida <span className="text-rose-600">DEPOIS</span> do Mini App Dedo Mágico
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Veja como a sua dinâmica nos relacionamentos muda radicalmente quando você desliga o botão da autossabotagem:
          </p>
        </div>

        {/* 2 Column Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* ANTES */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Como tem sido até hoje</span>
                <h3 className="text-xl font-extrabold text-slate-800 mt-1 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-rose-500" />
                  <span>A sua vida ANTES:</span>
                </h3>
              </div>

              <ul className="space-y-4 text-sm sm:text-base text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-black text-lg leading-none mt-0.5">•</span>
                  <span><strong>Só se envolve com homens que te frustram:</strong> parece que o tipo que te chama atenção é sempre aquele que não quer nada sério.</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-black text-lg leading-none mt-0.5">•</span>
                  <span><strong>Dá tempo e energia demais sem retorno:</strong> passa meses tentando "fazer dar certo" enquanto a outra pessoa mal faz o mínimo.</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-black text-lg leading-none mt-0.5">•</span>
                  <span><strong>Sensação de impotência e descrença:</strong> chega a acreditar que "não existe mais homem decente no mundo" ou que o defeito é com você.</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-black text-lg leading-none mt-0.5">•</span>
                  <span><strong>Coração partido e desgaste crônico:</strong> termina relacionamentos exausta, prometendo que nunca mais vai se apegar... até a próxima recaída.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-400 text-center italic">
              Ciclo vicioso de apego ansioso e frustração
            </div>
          </div>

          {/* DEPOIS */}
          <div className="bg-gradient-to-b from-[#1f091d] to-[#140513] text-white rounded-3xl p-6 sm:p-8 border-2 border-rose-500 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-6">
              <div className="border-b border-rose-900/60 pb-4">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">Com as ferramentas no bolso</span>
                <h3 className="text-xl font-extrabold text-white mt-1 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>A sua vida DEPOIS:</span>
                </h3>
              </div>

              <ul className="space-y-4 text-sm sm:text-base text-rose-100/90">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Vive conexões leves, seguras e recíprocas:</strong> sua mente perde o encanto por homens inconstantes e passa a desejar reciprocidade madura.</span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Detecta sinais de alerta na primeira semana:</strong> com o Decodificador de Sinais, você corta ciladas antes mesmo de se apegar.</span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Sabe exatamente o que merece e não aceita menos:</strong> seus novos critérios inegociáveis impedem você de se contentar com migalhas.</span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Em paz absoluta com suas escolhas:</strong> sensação de controle, soberania emocional e amor-próprio blindado todos os dias.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-rose-900/60">
              <button
                onClick={onCtaClick}
                className="w-full py-3.5 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-400 hover:to-rose-500 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <span>Quero viver essa transformação agora</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
