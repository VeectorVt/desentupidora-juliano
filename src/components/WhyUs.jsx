import { Shield, MapPin, Leaf, BadgeDollarSign, Star, Quote } from 'lucide-react';
import { useInView, useCountUp } from '../hooks/useInView';

const features = [
  {
    icon: Shield,
    title: 'Profissionais Especializados',
    description: 'Equipe treinada com anos de experiência no mercado',
  },
  {
    icon: MapPin,
    title: 'Atendimento em Toda a Região',
    description: 'Ilhéus e toda região Sul da Bahia',
  },
  {
    icon: Leaf,
    title: 'Respeito às Normas Ecológicas',
    description: 'Descarte responsável seguindo normas ambientais',
  },
  {
    icon: BadgeDollarSign,
    title: 'Preço Transparente',
    description: 'Orçamento sem surpresas. Preço justo e competitivo',
  },
];

function Counter({ end, suffix = '', prefix = '' , label, isInView }) {
  const count = useCountUp(parseInt(end), 2000, isInView);

  return (
    <div className="text-center">
      <div className="text-3xl sm:text-5xl md:text-6xl font-black text-orange-500 mb-2">
        {prefix}{end === '24' ? (isInView ? '24' : '0') : count}{suffix}
      </div>
      <p className="text-gray-500 font-medium text-xs sm:text-sm uppercase tracking-wider">{label}</p>
    </div>
  );
}

export default function WhyUs() {
  const [ref, isInView] = useInView();
  const [counterRef, counterInView] = useInView();

  return (
    <section id="porque" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div ref={ref} className={`text-center mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block bg-blue-100 text-[#1a365d] text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Diferenciais
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a365d] mb-4">
            Por que nos escolher?
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Anos de experiência e compromisso com a qualidade
          </p>
        </div>

        {/* Counters */}
        <div
          ref={counterRef}
          className={`grid grid-cols-3 gap-4 sm:gap-8 mb-20 ${counterInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <Counter end="15" suffix="+" label="Anos de experiência" isInView={counterInView} />
          <Counter end="800" prefix="+" suffix="" label="Clientes atendidos" isInView={counterInView} />
          <Counter end="24" suffix="h" label="Disponibilidade" isInView={counterInView} />
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-orange-200 hover:bg-orange-50/30 transition-all duration-500 ${
                  isInView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 1) * 0.15}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1a365d] to-[#2d4a7a] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-900/10">
                    <Icon className="w-7 h-7 text-orange-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1a365d] mb-1">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured testimonial */}
        <div className={`relative overflow-hidden bg-gradient-to-br from-[#1a365d] to-[#0f2744] rounded-3xl p-8 md:p-12 ${isInView ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
          <div className="absolute top-6 left-8 opacity-10">
            <Quote className="w-20 h-20 text-orange-400" />
          </div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <blockquote className="text-xl sm:text-2xl md:text-3xl text-white font-medium italic leading-relaxed mb-8">
              "Serviço rápido e eficiente! Atenderam em menos de 1 hora. Recomendo demais!"
            </blockquote>
            <div>
              <p className="text-orange-400 font-bold text-lg">Carlos M.</p>
              <p className="text-white/50 text-sm">Centro, Ilhéus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
