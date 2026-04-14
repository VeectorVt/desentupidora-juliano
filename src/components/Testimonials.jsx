import { Star } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const testimonials = [
  {
    name: 'Ana Paula S.',
    neighborhood: 'Bairro Conquista',
    text: 'Esgoto entupiu sábado à noite, atenderam em 40 minutos. Profissionais e organizados.',
    date: 'Março 2026',
    initials: 'AP',
    color: 'from-pink-400 to-rose-500',
  },
  {
    name: 'Roberto M.',
    neighborhood: 'Centro',
    text: 'Fossa cheia há dias. Resolveram rápido e sem deixar bagunça. Super recomendo!',
    date: 'Fevereiro 2026',
    initials: 'RM',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    name: 'Luciana F.',
    neighborhood: 'Olivença',
    text: 'Vieram no mesmo dia, preço justo e serviço caprichado. Já indiquei para vizinhos.',
    date: 'Janeiro 2026',
    initials: 'LF',
    color: 'from-emerald-400 to-teal-500',
  },
];

export default function Testimonials() {
  const [ref, isInView] = useInView();

  return (
    <section id="depoimentos" className="py-16 sm:py-20 md:py-28 bg-[#1a365d] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block bg-white/10 border border-white/20 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            O que dizem nossos clientes
          </h2>
          <p className="text-orange-400 text-lg font-semibold">
            ⭐ 4.9 — Baseado em avaliações reais
          </p>
        </div>

        {/* TODO: Substituir por widget do Google Meu Negócio ou EmbedSocial quando tiver avaliações reais */}

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`bg-white rounded-2xl p-5 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index + 1) * 0.15}s` }}
            >
              {/* Top: avatar + info */}
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="text-[#1a365d] font-bold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.neighborhood}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 leading-relaxed mb-4 italic">
                "{testimonial.text}"
              </p>

              {/* Date */}
              <p className="text-gray-400 text-xs font-medium">{testimonial.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
