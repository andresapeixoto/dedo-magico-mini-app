import React, { useState } from 'react';
import { APP_CONFIG } from '../data/copyData';
import { X, Lock, ShieldCheck, CreditCard, Sparkles, ExternalLink, ArrowRight, Check } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  checkoutUrl: string;
  onUpdateCheckoutUrl: (url: string) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  checkoutUrl,
  onUpdateCheckoutUrl,
}) => {
  const [customUrl, setCustomUrl] = useState(checkoutUrl);
  const [showConfig, setShowConfig] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateCheckoutUrl(customUrl);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
    setShowConfig(false);
  };

  const handleProceedToCheckout = () => {
    if (checkoutUrl && checkoutUrl.startsWith('http')) {
      window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#1a0818] rounded-3xl border-2 border-rose-500/80 shadow-2xl max-w-md w-full p-6 text-white relative overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-900/80 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center mx-auto text-rose-400">
            <Sparkles className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400 bg-rose-950 px-2.5 py-0.5 rounded-full border border-rose-800">
            Acesso Imediato Liberado
          </span>
          <h3 className="text-xl font-extrabold text-white">
            Mini Aplicativo Dedo Mágico
          </h3>
          <p className="text-xs text-rose-200/80">
            Você está a 1 passo de desativar seu padrão de atração inconsciente.
          </p>
        </div>

        {/* Summary Card */}
        <div className="bg-slate-950/80 rounded-2xl p-4 border border-rose-900/50 space-y-3 mb-6">
          <div className="flex justify-between items-center text-xs pb-2 border-b border-rose-900/40">
            <span className="text-slate-300">Mini App Dedo Mágico v2.0</span>
            <span className="text-emerald-400 font-bold">Incluso</span>
          </div>
          <div className="flex justify-between items-center text-xs pb-2 border-b border-rose-900/40">
            <span className="text-slate-300">3 Bônus Integrados (Planners & SOS)</span>
            <span className="text-emerald-400 font-bold">Grátis</span>
          </div>
          <div className="flex justify-between items-center text-sm pt-1">
            <span className="font-bold text-white">Valor Total Hoje:</span>
            <div className="text-right">
              <span className="text-lg font-black text-rose-400">{APP_CONFIG.currentPrice}</span>
              <span className="text-[10px] text-slate-400 block">ou {APP_CONFIG.installments}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleProceedToCheckout}
            className="w-full py-4 bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white font-extrabold text-base rounded-xl shadow-xl shadow-rose-600/40 transition-all flex items-center justify-center gap-2 group"
          >
            <span>IR PARA O PAGAMENTO SEGURO</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={APP_CONFIG.appDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-rose-200 text-xs font-semibold rounded-xl border border-rose-900/60 flex items-center justify-center gap-1.5 transition-colors"
          >
            <span>Ver demonstração do Mini App (dedomagico.manus.space)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Security Seals */}
        <div className="mt-5 pt-4 border-t border-rose-950 flex items-center justify-center gap-4 text-[10px] text-slate-400">
          <span className="flex items-center gap-1">
            <Lock className="w-3 h-3 text-emerald-400" />
            256-Bit SSL
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            7 Dias de Garantia
          </span>
          <span>•</span>
          <button
            onClick={() => setShowConfig(!showConfig)}
            className="text-[10px] text-slate-500 hover:text-rose-300 underline"
          >
            Configurar link
          </button>
        </div>

        {/* Optional Checkout Link Config drawer for the user */}
        {showConfig && (
          <form onSubmit={handleSaveUrl} className="mt-4 p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-left animate-fadeIn">
            <label className="text-[11px] font-bold text-slate-300 block">
              Link do seu Checkout (Hotmart, Kiwify, Eduzz, etc):
            </label>
            <div className="flex gap-2">
              <input
                type="url"
                value={customUrl}
                onChange={(e) => setCustomUrl(e.target.value)}
                placeholder="https://pay.hotmart.com/..."
                className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-rose-500"
              />
              <button
                type="submit"
                className="px-3 py-1.5 bg-rose-600 text-white rounded-lg text-xs font-bold hover:bg-rose-500"
              >
                Salvar
              </button>
            </div>
            {savedSuccess && (
              <p className="text-[10px] text-emerald-400 flex items-center gap-1">
                <Check className="w-3 h-3" /> Link atualizado com sucesso!
              </p>
            )}
          </form>
        )}

      </div>
    </div>
  );
};
