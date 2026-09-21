import React from 'react';
import { Smartphone, Check, X, ArrowRight, Zap, Trophy, ShieldAlert, AlertCircle } from 'lucide-react';

interface EvolutionComparisonProps {
  onCtaClick: () => void;
}

export const EvolutionComparison: React.FC<EvolutionComparisonProps> = ({ onCtaClick }) => {
  return (
    <section id="evolution-section" className="bg-[#FAF6F2] text-slate-900 py-16 md:py-24 border-b border-rose-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100 text-rose-800 text-xs sm:text-sm font-bold tracking-wide">
            <Zap className="w-4 h-4 text-rose-600" />
            <span>MÉTODO INTERATIVO DE BOLSO</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Por que <span className="line-through text-slate-400 decoration-rose-500 decoration-3">conselhos soltos</span> não resolvem o seu problema — e como o <span className="text-rose-600">Mini Aplicativo</span> muda o seu jogo
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            A neurociência dos relacionamentos é categórica: você não desativa um padrão inconsciente apenas desabafando com amigas ou ouvindo conselhos vagos na internet. A mudança real exige <strong>intervenção prática imediata</strong> no exato instante em que o gatilho emocional é acionado.
          </p>
        </div>

        {/* 3 Pillars of the App Experience */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-rose-100/80 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Interatividade em Tempo Real</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Em vez de teorias compridas, você usa ferramentas práticas onde responde perguntas dinâmicas e recebe análises personalizadas do seu momento afetivo em segundos.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-rose-100/80 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-4">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Gamificação & Progresso</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Acompanhe seus dias livres de autossabotagem, desbloqueie novos insights de postura e celebre cada marco de amor-próprio com metas claras e visuais.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-rose-100/80 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 mb-4">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Praticidade de Bolso</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Sua bússola emocional onde quer que você esteja. Basta abrir o mini app direto no navegador do celular na hora do encontro ou quando a ansiedade bater.
            </p>
          </div>
        </div>

        {/* Side-by-Side Comparison Cards */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            
            {/* Generic Advice / Trying alone */}
            <div className="bg-white/80 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600">
                      <AlertCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tentativas Sem Método</span>
                      <h4 className="text-base font-bold text-slate-700">Conselhos Soltos & Teoria</h4>
                    </div>
                  </div>
                  <span className="p-1 rounded-full bg-slate-100 text-slate-400">
                    <X className="w-4 h-4" />
                  </span>
                </div>

                <ul className="space-y-4 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span><strong>Desabafos e dicas genéricas de internet:</strong> dão um alívio de 1 hora, mas não alteram o circuito biológico que dita suas escolhas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span><strong>Zero suporte no momento do sufoco:</strong> na hora que ele não responde ou some, você entra em pânico e age por puro impulso.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span><strong>Contar só com a "força de vontade":</strong> você jura que vai se valorizar, mas cai nas mesmas conversas vazias no fim de semana.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span><strong>Repetição crônica do padrão:</strong> você racionalmente sabe que o homem é furada, mas continua sentindo atração irresistível por ele.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium text-center">
                Resultado: Ansiedade contínua e recaída nos mesmos erros
              </div>
            </div>

            {/* New Format: Mini Aplicativo Interativo */}
            <div className="bg-gradient-to-b from-rose-900 to-[#1e071c] text-white rounded-2xl p-6 sm:p-7 border-2 border-rose-500/60 shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-rose-500 to-amber-500 text-slate-950 font-black text-[10px] tracking-wider uppercase px-3 py-1 rounded-bl-xl shadow">
                MÉTODO ATIVO
              </div>

              <div>
                <div className="flex items-center justify-between border-b border-rose-800/60 pb-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-500 flex items-center justify-center text-white shadow-md">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-rose-300 uppercase tracking-wider">Solução Definitiva</span>
                      <h4 className="text-base font-bold text-white">Mini Aplicativo Dedo Mágico</h4>
                    </div>
                  </div>
                  <span className="p-1 rounded-full bg-emerald-500 text-slate-950 font-bold">
                    <Check className="w-4 h-4" />
                  </span>
                </div>

                <ul className="space-y-4 text-sm text-rose-100/90">
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Diagnóstico Dinâmico em 3 min:</strong> descubra o padrão inconsciente que comanda suas escolhas na tela do celular.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Botão SOS "Não Mande Mensagem":</strong> freio anti-ansiedade imediato para salvar sua dignidade no momento de carência.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Decodificador de Sinais no Bolso:</strong> passe o pretendente pelo raio-X emocional antes de entregar seu coração.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Diário Gamificado & Metas de Autoestima:</strong> acumule vitórias de amor-próprio e fortaleça sua postura dia após dia.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-rose-800/60">
                <button
                  onClick={onCtaClick}
                  className="w-full py-3 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-400 hover:to-rose-500 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <span>Quero Acessar o Mini Aplicativo Agora</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Direct Quote Banner */}
        <div className="mt-12 bg-rose-50/70 border border-rose-200/80 p-5 sm:p-6 rounded-2xl max-w-3xl mx-auto text-center">
          <p className="text-slate-800 italic text-sm sm:text-base font-medium">
            "Informação sem ferramenta de intervenção prática é apenas distração. O Mini App foi construído para agir no exato segundo em que seu cérebro tenta te levar para a mesma cilada de sempre."
          </p>
          <p className="text-xs font-bold text-rose-700 mt-2 tracking-wide uppercase">
            — Andresa Schleicher, Criadora do Método Dedo Mágico
          </p>
        </div>

      </div>
    </section>
  );
};
