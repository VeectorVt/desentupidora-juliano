import { MessageCircle, Siren, MapPin, Star, CheckCircle, Zap } from 'lucide-react';
import heroBg from '../assets/foto-caminhao-lateral.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* VIDEO: video-caminhao-residencial.mp4 */}
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Caminhão Desentupidora Juliano"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay #1a365d a 60% */}
      <div className="absolute inset-0 bg-[#1a365d]/60"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Location badge */}
        <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/40 text-yellow-300 rounded-full px-3 sm:px-5 py-2 text-xs sm:text-sm font-semibold mb-8 animate-fade-in-up">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          📍 Ilhéus & Região Sul da Bahia
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 animate-fade-in-up delay-100">
          Sua Desentupidora de{' '}
          <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
            Confiança
          </span>{' '}
          em Ilhéus!
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up delay-200">
          Fossas, Caixa de Gordura, Esgoto — Soluções Rápidas e Limpas.
          <br className="hidden sm:block" />
          Atendimento 24h com equipamentos de última geração.
        </p>

        {/* Urgency trigger */}
        <div className="inline-flex items-center gap-2 sm:gap-3 bg-orange-500/10 border-2 border-orange-500 rounded-2xl px-4 sm:px-6 py-3 mb-10 animate-pulse-border animate-fade-in-up delay-300">
          <span className="relative flex items-center justify-center flex-shrink-0">
            <Zap className="w-5 h-5 text-orange-400 animate-pulse" />
            <span className="absolute w-8 h-8 bg-orange-400/20 rounded-full animate-ping-slow"></span>
          </span>
          <span className="text-orange-300 font-bold text-sm sm:text-lg">
            ⚡ Resposta em até 15 min
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-fade-in-up delay-400">
          <a
            href="https://wa.me/5573991247631"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 sm:gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base sm:text-lg px-5 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
          >
            <span className="relative">
              <MessageCircle className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping"></span>
            </span>
            💬 Chamar no WhatsApp
          </a>
          <a
            href="tel:+5573988499596"
            className="group inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-base sm:text-lg px-5 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
          >
            <Siren className="w-6 h-6 animate-pulse" />
            🚨 Emergencial Agora
          </a>
        </div>

        {/* Social proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 animate-fade-in-up delay-500">
          <div className="flex items-center gap-2 text-white/80">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <span className="text-sm font-medium">+500 atendimentos realizados em Ilhéus</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium">4.9 de satisfação dos clientes</span>
          </div>
        </div>

        {/* Coverage area */}
        <div className="animate-fade-in-up delay-500">
          <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-3">Área de Cobertura</p>
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {['Ilhéus', 'Itabuna', 'Uruçuca', 'Olivença', 'Pontal', 'e região'].map((city) => (
              <span
                key={city}
                className="bg-white/10 border border-white/20 text-white/80 text-xs px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full font-medium hover:bg-white/20 transition-colors cursor-default"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
}
