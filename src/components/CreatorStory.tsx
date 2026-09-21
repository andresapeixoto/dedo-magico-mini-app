import React from 'react';
import { Heart, Sparkles, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const CreatorStory: React.FC = () => {
  return (
    <section id="autor-section" className="bg-[#F7F2EC] text-slate-900 py-16 md:py-24 border-b border-stone-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Creator Photo / Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              
              {/* Outer decorative card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-100">
                <img
                  src="https://i.postimg.cc/Hs76jNkL/FOTO-ANDRESA-NOTEBOOK-CAFETERIA.jpg"
                  alt="Andresa Schleicher - Criadora do Método Dedo Mágico"
                  className="w-full h-[420px] object-cover object-center"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating badge inside photo */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-5 text-white">
                  <p className="text-xs font-bold text-rose-300 uppercase tracking-wider">Especialista em Padrões Afetivos</p>
                  <h3 className="text-xl font-extrabold text-white">Andresa Schleicher</h3>
                  <p className="text-xs text-stone-300 mt-0.5">Criadora do Método e Mini App Dedo Mágico</p>
                </div>
              </div>

              {/* Floating Authority Pill */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-white px-4 py-2.5 rounded-2xl shadow-xl border border-stone-200 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-800 leading-tight">+10 Anos de Estudo</p>
                  <p className="text-[10px] text-slate-500">Neurociência e Relacionamentos</p>
                </div>
              </div>

            </div>
          </div>

          {/* Bio Text Column */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100 text-rose-800 text-xs sm:text-sm font-bold tracking-wide">
              <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
              <span>QUEM ESTÁ POR TRÁS DO MÉTODO</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              "Eu já estive exatamente no mesmo lugar onde você está hoje..."
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Eu vivi relacionamentos frustrantes. Me empolgava loucamente no início com promessas lindas, dava tempo e energia demais, e depois ficava me perguntando o que eu tinha feito de errado quando a frieza e o sumiço começavam.
              </p>
              
              <p>
                Durante anos, eu realmente acreditei na mentira de que eu tinha <em>"dedo podre"</em> ou que <em>"homem nenhum prestava"</em>. Mas ao me recusar a aceitar menos do que eu merecia, resolvi parar de culpar a sorte e decidi estudar a fundo a ciência das escolhas humanas.
              </p>

              <p>
                Foram <strong>mais de 10 anos mergulhando na psicologia comportamental, apego emocional e neurociência da atração</strong>. Descobri que nós não nos apaixonamos pelo que é saudável, mas pelo que é <strong>familiar ao nosso cérebro inconsciente</strong>.
              </p>

              <div className="p-4 rounded-xl bg-white border border-rose-200/80 shadow-sm space-y-2">
                <p className="font-semibold text-rose-900 text-sm">
                  🚀 Por que criei o Mini Aplicativo Dedo Mágico?
                </p>
                <p className="text-xs sm:text-sm text-slate-600">
                  "Percebi que conselhos teóricos não salvam ninguém na hora do sufoco. Quando o homem sumia ou mandava uma mensagem ambígua às 23h, a carência e o pânico falavam mais alto. O Mini App nasceu para ser a sua <strong>bússola prática de bolso</strong>: você abre com 1 toque, checa o sinal no decodificador, aperta o botão SOS e toma a decisão com dignidade em menos de 1 minuto."
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                +14.000 mulheres impactadas
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Método 100% Prático e Validado
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
