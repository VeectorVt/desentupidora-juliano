import { Droplets, Trash2, Wrench, Waves, Siren, MessageCircle, Clock } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import desentupimentoImg from '../assets/desentupimento-sonda.jpg';
import hidrojateamento from '../assets/hidrojateamento.jpg'
import caixaDeGordura from '../assets/caixa-de-gordura.jpg'
import limpaFossa from '../assets/limpa-fossa.jpg'



const services = [
  {
    icon: Droplets,
    title: 'Limpeza de Fossa',
    description: 'Equipamentos modernos e descarte ecológico',
    badge: 'Atendimento em até 1h',
    whatsappText: 'Preciso%20de%20Limpeza%20de%20Fossa',
    image:limpaFossa,
  },
  {
    icon: Trash2,
    title: 'Caixa de Gordura',
    description: 'Desobstrução residencial e comercial',
    badge: 'Agendamento rápido',
    whatsappText: 'Preciso%20de%20Limpeza%20de%20Caixa%20de%20Gordura',
    image: caixaDeGordura,
  },
  {
    icon: Wrench,
    title: 'Desentupimento de Esgoto',
    description: 'Pias, vasos, ralos e redes completas',
    badge: 'Solução definitiva',
    whatsappText: 'Preciso%20de%20Desentupimento%20de%20Esgoto',
    image: desentupimentoImg,
  },
  {
    icon: Waves,
    title: 'Hidrojateamento',
    description: 'Alta pressão para tubulações difíceis',
    badge: 'Tecnologia avançada',
    whatsappText: 'Preciso%20de%20Hidrojateamento',
    image: hidrojateamento,
  },
];

export default function Services() {
  const [ref, isInView] = useInView();

  return (
    <section id="servicos" className="py-20 md:py-28 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block bg-orange-100 text-orange-600 text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a365d] mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Atendimento em até 1 hora após o chamado
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-orange-100/50 border border-gray-100 hover:border-orange-200 transition-all duration-500 hover:-translate-y-2 ${
                  isInView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                {/* Card image */}
                {service.image && (
                  <div className="relative h-40 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                  </div>
                )}

                <div className="p-6">
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/20">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#1a365d] mb-2">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{service.description}</p>

                {/* Badge */}
                <div className="flex items-center gap-1.5 mb-5">
                  <Clock className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-600 text-xs font-semibold">{service.badge}</span>
                </div>

                {/* WhatsApp button */}
                <a
                  href={`https://wa.me/5573991247631?text=${service.whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white font-semibold text-sm py-2.5 rounded-xl transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  Solicitar via WhatsApp
                </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency card */}
        <div
          className={`relative overflow-hidden bg-gradient-to-r from-[#1a365d] to-[#0f2744] rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl shadow-blue-900/30 ${
            isInView ? 'animate-fade-in-up delay-500' : 'opacity-0'
          }`}
        >
          {/* Background pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl shadow-orange-500/30">
                  <Siren className="w-10 h-10 text-white animate-pulse" />
                </div>
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full animate-ping"></span>
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full"></span>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-2">
                🚨 Atendimento Emergencial 24h
              </h3>
              <p className="text-white/60 text-base sm:text-lg">
                Fins de semana, feriados e madrugada — estamos sempre disponíveis quando você precisa.
              </p>
            </div>

            <div className="flex-shrink-0">
              <a
                href="tel:+5573988499596"
                className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-base sm:text-lg px-5 sm:px-8 py-3 sm:py-4 rounded-full shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
              >
                <Siren className="w-5 h-5" />
                Chamar Agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
