import React from 'react';
import { APP_CONFIG } from '../data/copyData';
import { ShieldCheck, Lock, ExternalLink, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0e040d] text-slate-400 text-xs py-12 px-4 sm:px-6 border-t border-rose-950">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Top Info Grid */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1.5">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-6 h-6 rounded-lg bg-rose-600 flex items-center justify-center text-xs font-black text-white">
                DM
              </div>
              <span className="text-base font-extrabold text-white tracking-tight">Dedo Mágico</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-rose-950 text-rose-300 font-semibold border border-rose-800">
                Mini App
              </span>
            </div>
            <p className="text-slate-400 text-xs max-w-sm">
              Método interativo de reprogramação de padrões inconscientes nos relacionamentos.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-300">
            <a
              href={APP_CONFIG.appDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rose-400 transition-colors inline-flex items-center gap-1 underline underline-offset-4 decoration-rose-500/40"
            >
              Conheça o Mini App (dedomagico.manus.space)
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>•</span>
            <a href="#faq-duvidas" className="hover:text-rose-400 transition-colors">
              Dúvidas Frequentes
            </a>
            <span>•</span>
            <a href="#garantia-incondicional" className="hover:text-rose-400 transition-colors">
              Garantia 7 Dias
            </a>
          </div>
        </div>

        {/* Security Seals */}
        <div className="py-4 border-y border-slate-900 flex flex-wrap items-center justify-center gap-6 text-[11px] text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Plataforma de Pagamento 100% Criptografada
          </span>
          <span className="flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-rose-400" />
            Privacidade e Sigilo Absoluto dos seus Dados
          </span>
          <span className="flex items-center gap-1.5">
            <Heart className="w-4 h-4 text-rose-400" />
            Acesso Imediato no seu E-mail e Celular
          </span>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="text-center space-y-3 text-[11px] text-slate-500 max-w-3xl mx-auto leading-relaxed">
          <p>
            Aviso Legal: Os resultados obtidos com o uso do Mini Aplicativo Dedo Mágico podem variar de pessoa para pessoa de acordo com a sua aplicação prática e dedicação às ferramentas. Este produto não substitui acompanhamento médico psiquiátrico ou psicológico clínico individualizado.
          </p>
          <p>
            © {new Date().getFullYear()} Dedo Mágico • Andresa Schleicher. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};
