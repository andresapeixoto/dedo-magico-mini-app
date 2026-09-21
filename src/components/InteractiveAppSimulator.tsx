import React, { useState } from 'react';
import { SAMPLE_QUIZ_QUESTIONS, APP_CONFIG } from '../data/copyData';
import { Sparkles, CheckCircle2, ArrowRight, RotateCcw, ShieldAlert, Heart, ExternalLink } from 'lucide-react';

interface InteractiveAppSimulatorProps {
  onCtaClick: () => void;
}

export const InteractiveAppSimulator: React.FC<InteractiveAppSimulatorProps> = ({ onCtaClick }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const currentQuestion = SAMPLE_QUIZ_QUESTIONS[currentQuestionIndex];
  const totalQuestions = SAMPLE_QUIZ_QUESTIONS.length;

  const handleSelectOption = (optionIndex: number) => {
    const updatedAnswers = { ...answers, [currentQuestionIndex]: optionIndex };
    setAnswers(updatedAnswers);

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setIsCompleted(false);
  };

  return (
    <section id="simulador-interativo" className="bg-[#1a0818] text-white py-16 md:py-24 border-b border-rose-900/50 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-300 text-xs sm:text-sm font-semibold">
            <Sparkles className="w-4 h-4 text-rose-400" />
            <span>TESTE INTERATIVO EM TEMPO REAL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            Experimente uma amostra do <span className="text-rose-400">Mini Aplicativo</span> agora mesmo
          </h2>
          <p className="text-sm sm:text-base text-rose-200/80 max-w-2xl mx-auto">
            Responda às 3 perguntas rápidas abaixo para ter uma prévia do <strong>Teste de Projeção: Você está vivendo algo real ou projetando uma imagem?</strong>
          </p>
        </div>

        {/* Interactive Box */}
        <div className="bg-[#240c21] rounded-3xl p-6 sm:p-8 md:p-10 border border-rose-800/40 shadow-2xl relative">
          
          {!isCompleted ? (
            <div className="space-y-6">
              
              {/* Progress Indicator */}
              <div className="flex items-center justify-between text-xs text-rose-300 font-semibold border-b border-rose-900/40 pb-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                  Pergunta {currentQuestionIndex + 1} de {totalQuestions}
                </span>
                <div className="w-32 bg-slate-900 h-2 rounded-full overflow-hidden border border-rose-900/60">
                  <div 
                    className="bg-gradient-to-r from-rose-500 to-amber-400 h-full transition-all duration-300"
                    style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Text */}
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug">
                  {currentQuestion.question}
                </h3>
                <p className="text-xs text-rose-300/70">
                  Seja 100% sincera com você mesma. Ninguém está vendo suas respostas.
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3 pt-2">
                {currentQuestion.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className="w-full text-left p-4 rounded-xl bg-slate-900/60 hover:bg-rose-900/40 border border-rose-900/40 hover:border-rose-500/80 transition-all group flex items-center justify-between gap-4"
                  >
                    <span className="text-sm sm:text-base text-rose-100 group-hover:text-white font-medium leading-relaxed">
                      {option.text}
                    </span>
                    <span className="w-6 h-6 rounded-full border border-rose-700/60 group-hover:border-rose-400 group-hover:bg-rose-500/20 flex items-center justify-center shrink-0">
                      <span className="w-2 h-2 rounded-full bg-transparent group-hover:bg-rose-400 transition-colors" />
                    </span>
                  </button>
                ))}
              </div>

            </div>
          ) : (
            /* Result State */
            <div className="space-y-6 text-center animate-fadeIn">
              
              <div className="w-16 h-16 rounded-full bg-rose-500/20 border-2 border-rose-500 flex items-center justify-center mx-auto text-rose-400">
                <Sparkles className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-950/80 px-3 py-1 rounded-full border border-rose-800">
                  Diagnóstico Preliminar Gerado
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
                  Seu Padrão: <span className="text-rose-400">Atração por Indisponibilidade & Ansiedade de Validação</span>
                </h3>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/70 border border-rose-900/50 text-left space-y-3 text-sm text-rose-100/90 leading-relaxed">
                <p>
                  <strong>O que suas respostas revelam:</strong> O seu cérebro aprendeu a associar o sentimento de <em>ansiedade, medo de perder e incerteza</em> com <em>amor verdadeiro</em>.
                </p>
                <p>
                  Quando um homem é calmo, previsível e recíproco, você sente tédio e acha que "não teve química". Mas quando ele é inconstante e some, seu coração dispara e você confunde essa adrenalina com "paixão louca".
                </p>
                <div className="pt-2 border-t border-rose-900/40 text-rose-300 font-semibold text-xs flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Isso não é culpa sua: é um código emocional que o Mini App Dedo Mágico reprograma na raiz.</span>
                </div>
              </div>

              {/* Call to Action to unlock full app */}
              <div className="pt-3 space-y-3">
                <button
                  onClick={onCtaClick}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-rose-600 via-rose-500 to-rose-600 hover:from-rose-500 hover:to-rose-500 text-white font-extrabold text-base sm:text-lg rounded-xl shadow-xl shadow-rose-600/40 transition-all flex items-center justify-center gap-3 mx-auto"
                >
                  <span>DESBLOQUEAR O MINI APP E REPROGRAMAR MEU PADRÃO</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <div className="flex items-center justify-center gap-4 text-xs text-rose-300/80 pt-1">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Refazer teste rápido
                  </button>
                  <span>•</span>
                  <a
                    href={APP_CONFIG.appDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-rose-200 underline"
                  >
                    Ver interface em dedomagico.manus.space
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
