import { useState, useEffect, useRef, useCallback } from 'react';
import { Droplets, Trash2, Wrench, Waves, Siren, MessageCircle, Clock, ChevronLeft, ChevronRight, Building2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import desentupimentoImg from '../assets/desentupimento-sonda.jpg';
import hidrojateamento from '../assets/hidrojateamento.jpg';
import caixaDeGordura from '../assets/caixa-de-gordura.jpg';
import limpaFossa from '../assets/limpa-fossa.jpg';
import limpezaCondominioEquipe from '../assets/limpeza-condominio-equipe.jpeg';

const services = [
  {
    icon: Droplets,
    title: 'Limpeza de Fossa',
    description: 'Equipamentos modernos e descarte ecológico',
    badge: 'Atendimento em até 1h',
    whatsappText: 'Preciso%20de%20Limpeza%20de%20Fossa',
    image: limpaFossa,
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
  {
    icon: Building2,
    title: 'Limpeza de Tubulação Aérea',
    description: 'Limpeza especializada de tubulações aéreas em condomínios com equipe técnica qualificada',
    badge: 'Especialistas em condomínios',
    whatsappText: 'Preciso%20de%20Limpeza%20de%20Tubulação%20Aérea%20em%20Condomínio',
    image: limpezaCondominioEquipe,
  },
];

export default function Services() {
  const [ref, isInView] = useInView();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const trackRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Responsive: how many cards visible at once
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const maxIndex = services.length - visibleCount;

  const goTo = useCallback((index) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  }, [maxIndex]);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-play
  useEffect(() => {
    if (isAutoPlaying && isInView) {
      autoPlayRef.current = setInterval(() => {
        goNext();
      }, 4000);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying, isInView, goNext]);

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    clearInterval(autoPlayRef.current);
  };

  const resumeAutoPlay = () => {
    setIsAutoPlaying(true);
  };

  // Drag/Touch support
  const handleDragStart = (e) => {
    pauseAutoPlay();
    setIsDragging(true);
    const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    setDragStartX(clientX);
    setDragOffset(0);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    setDragOffset(clientX - dragStartX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset > 60) goPrev();
    else if (dragOffset < -60) goNext();
    setDragOffset(0);
    setTimeout(resumeAutoPlay, 5000);
  };

  const cardWidthPercent = 100 / visibleCount;
  const translateX = -(currentIndex * cardWidthPercent) + (dragOffset / (trackRef.current?.offsetWidth || 1)) * 100;

  return (
    <section id="servicos" className="py-20 md:py-28 bg-gray-50 overflow-hidden" ref={ref}>
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

        {/* Carousel container */}
        <div
          className={`relative ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}
        >
          {/* Navigation Arrows */}
          <button
            onClick={() => { pauseAutoPlay(); goPrev(); setTimeout(resumeAutoPlay, 5000); }}
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-500 hover:border-orange-500 hover:text-white text-[#1a365d] transition-all duration-300 hover:scale-110 group"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={() => { pauseAutoPlay(); goNext(); setTimeout(resumeAutoPlay, 5000); }}
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-500 hover:border-orange-500 hover:text-white text-[#1a365d] transition-all duration-300 hover:scale-110 group"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
          </button>

          {/* Carousel track */}
          <div className="overflow-hidden rounded-2xl mx-2 sm:mx-4" ref={trackRef}>
            <div
              className="flex"
              style={{
                transform: `translateX(${translateX}%)`,
                transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={() => isDragging && handleDragEnd()}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
            >
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="flex-shrink-0 px-2 sm:px-3"
                    style={{ width: `${cardWidthPercent}%` }}
                  >
                    <div
                      className={`group bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-orange-100/50 border border-gray-100 hover:border-orange-200 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col select-none`}
                    >
                      {/* Card image */}
                      {service.image && (
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                            draggable={false}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent"></div>

                          {/* Floating badge on image */}
                          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
                            <div className="flex items-center gap-1.5">
                              <Clock className="w-3 h-3 text-emerald-500" />
                              <span className="text-emerald-600 text-xs font-semibold">{service.badge}</span>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="p-6 flex-1 flex flex-col">
                        {/* Icon */}
                        <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-orange-500/20">
                          <Icon className="w-7 h-7 text-white" />
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-[#1a365d] mb-2 group-hover:text-orange-600 transition-colors duration-300">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-500 text-sm mb-5 leading-relaxed flex-1">
                          {service.description}
                        </p>

                        {/* WhatsApp button */}
                        <a
                          href={`https://wa.me/5573991247631?text=${service.whatsappText}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white font-semibold text-sm py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/20 hover:scale-[1.02]"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <MessageCircle className="w-4 h-4" />
                          Solicitar via WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => { pauseAutoPlay(); goTo(index); setTimeout(resumeAutoPlay, 5000); }}
                className={`relative transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-3 bg-gradient-to-r from-orange-400 to-orange-600 shadow-md shadow-orange-500/30'
                    : 'w-3 h-3 bg-gray-300 hover:bg-orange-300'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              >
                {index === currentIndex && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 animate-pulse opacity-50"></span>
                )}
              </button>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-4 mx-auto max-w-xs h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Emergency card */}
        <div
          className={`relative overflow-hidden bg-gradient-to-r from-[#1a365d] to-[#0f2744] rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl shadow-blue-900/30 mt-10 ${
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
