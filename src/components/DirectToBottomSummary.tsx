import React from 'react';
import { APP_CONFIG } from '../data/copyData';
import { Heart, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface DirectToBottomSummaryProps {
  onCtaClick: () => void;
}

export const DirectToBottomSummary: React.FC<DirectToBottomSummaryProps> = ({ onCtaClick }) => {
  return (
    <section id="resumo-final" className="bg-[#FAF5EF] text-slate-900 py-16 md:py-24 border-b border-rose-200/60">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-8">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100 text-rose-800 text-xs sm:text-sm font-bold tracking-wide">
          <Heart className="w-4 h-4 text-rose-600 fill-rose-600" />
          <span>PARA QUEM VEIO DIRETO PARA O FINAL</span>
        </div>

        {/* Emotion-driven headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
          Imagina você daqui a 30 dias com a sua mente em <span className="text-rose-600">paz absoluta</span>...
        </h2>

        {/* Story copy based on user's original sales text */}
        <div className="space-y-4 text-left text-sm sm:text-base text-slate-700 leading-relaxed bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm">
          <p>
            Se você rolou a página direto até aqui, eu sei exatamente o que você está sentindo no peito.
          </p>

          <p>
            Você está cansada. Cansada de promessas vazias, cansada de começar uma conversa com o coração aberto e terminar com a sensação de que foi boba de novo. Cansada de parecer que só atrai homens que te tratam como opção enquanto você os tratava como prioridade.
          </p>

          <p>
            Você não quer um príncipe encantado de conto de fadas. <strong>Você só quer paz de espírito.</strong>
          </p>

          <p className="border-l-4 border-rose-500 pl-4 py-1 italic text-slate-800 font-medium">
            "Você quer amor, mas sem ansiedade. Quer intensidade, mas com segurança. Quer alguém que olhe nos seus olhos e te faça sentir valorizada, sem jogos mentais nem sumiços."
          </p>

          <p>
            E agora você tem diante de você dois caminhos:
          </p>

          <div className="space-y-2 py-2">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 text-xs sm:text-sm">
              <strong>1. O caminho de sempre:</strong> Fechar esta página, continuar confiando apenas na "sorte", torcer para que o próximo homem seja diferente e arriscar passar mais 6 meses ou 1 ano sofrendo pelas mesmas ciladas.
            </div>
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-950 text-xs sm:text-sm">
              <strong>2. O novo caminho:</strong> Colocar o <strong>Mini Aplicativo Dedo Mágico</strong> no seu bolso hoje por apenas R$ 17, fazer o teste do seu padrão e ter uma bússola inabalável para nunca mais aceitar migalhas na sua vida.
            </div>
          </div>

          <p className="font-semibold text-slate-900 pt-1">
            A decisão está inteiramente nas suas mãos. E nós garantimos que você não tem nenhum risco nos próximos 7 dias.
          </p>
        </div>

        {/* Quick price recap and button */}
        <div className="space-y-3 pt-2">
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Apenas <strong className="text-slate-900 font-black text-lg">{APP_CONFIG.currentPrice} à vista</strong> ou {APP_CONFIG.installments}
          </p>

          <a
            href={APP_CONFIG.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onCtaClick}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-rose-600 via-rose-500 to-rose-600 hover:from-rose-500 hover:to-rose-400 text-white font-extrabold text-base sm:text-lg rounded-xl shadow-xl shadow-rose-600/30 transition-all inline-flex items-center justify-center gap-3 animate-pulse-subtle cursor-pointer"
          >
            <span>SIM, EU QUERO MUDAR MEU PADRÃO AGORA</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <p className="text-xs text-slate-500">
            Acesso digital imediato no celular • Pagamento único • Sem renovação automática
          </p>
        </div>

      </div>
    </section>
  );
};
