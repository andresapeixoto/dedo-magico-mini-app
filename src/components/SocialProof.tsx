import React from 'react';
import { TESTIMONIALS } from '../data/copyData';
import { Star, CheckCircle2, MessageCircle, Heart } from 'lucide-react';

export const SocialProof: React.FC = () => {
  return (
    <section id="depoimentos-alunas" className="bg-[#180717] text-white py-16 md:py-24 border-b border-rose-950/70 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs sm:text-sm font-semibold tracking-wide">
            <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
            <span>RESULTADOS DE QUEM JÁ QUEBROU O PADRÃO</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
            Elas também achavam que tinham <span className="text-rose-400">"dedo podre"</span>... até colocarem o Mini App no bolso
          </h2>

          <p className="text-sm sm:text-base text-rose-200/80">
            Veja o que acontece quando uma mulher substitui a teoria passiva por ferramentas de intervenção diária:
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#230c21] rounded-2xl p-6 border border-rose-900/50 shadow-xl flex flex-col justify-between hover:border-rose-500/60 transition-all"
            >
              <div className="space-y-4">
                
                {/* User Info Header */}
                <div className="flex items-center gap-3.5 border-b border-rose-900/40 pb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-rose-500 shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-bold text-white text-base leading-snug">{testimonial.name}</h4>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <p className="text-xs text-rose-300/80">
                      {testimonial.age} anos • {testimonial.city}
                    </p>
                  </div>
                </div>

                {/* Tag & Rating */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-rose-500/25 text-rose-300 border border-rose-500/40">
                    {testimonial.tag}
                  </span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* WhatsApp Style Message Bubble */}
                <div className="bg-[#170616] p-4 rounded-xl border border-rose-950 text-xs sm:text-sm text-slate-200 leading-relaxed relative">
                  <p className="italic">"{testimonial.quote}"</p>
                  <div className="flex items-center justify-end gap-1 text-[10px] text-slate-400 mt-2">
                    <span>{testimonial.whatsappTime}</span>
                    <span className="text-emerald-400 font-bold">✓✓</span>
                  </div>
                </div>

              </div>

              {/* Before vs After Pill Footer */}
              <div className="mt-5 pt-3 border-t border-rose-900/40 space-y-1.5 text-xs">
                <div className="flex items-center gap-1.5 text-rose-400">
                  <span className="font-bold">Antes:</span>
                  <span className="text-rose-200/80 truncate">{testimonial.before}</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <span className="font-bold">Depois:</span>
                  <span className="text-emerald-200 font-medium truncate">{testimonial.after}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Social Metrics Bar */}
        <div className="mt-12 bg-rose-950/40 border border-rose-900/50 rounded-2xl p-6 text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-around gap-6">
          <div>
            <p className="text-2xl sm:text-3xl font-black text-rose-400">97.4%</p>
            <p className="text-xs text-rose-200 font-medium mt-0.5">Taxa de aprovação do mini app</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-rose-900/60" />
          <div>
            <p className="text-2xl sm:text-3xl font-black text-white">+14.000</p>
            <p className="text-xs text-rose-200 font-medium mt-0.5">Padrões inconscientes revelados</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-rose-900/60" />
          <div>
            <p className="text-2xl sm:text-3xl font-black text-emerald-400">24/7</p>
            <p className="text-xs text-rose-200 font-medium mt-0.5">Acesso no bolso para agir na hora</p>
          </div>
        </div>

      </div>
    </section>
  );
};
