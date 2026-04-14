import { MessageCircle, Phone, MapPin, Star, CheckCircle, Zap } from 'lucide-react';
import logoJuliano from '../assets/logo-juliano.png';
import heroBg from '../assets/foto-caminhao-lateral.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background photo — very subtle for texture */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/[0.97] via-[#1a365d]/[0.93] to-[#0f2744]/[0.96]"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/[0.04] via-transparent to-blue-500/[0.03]"></div>

      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      {/* Ambient blobs */}
      <div className="absolute top-16 -left-24 w-80 h-80 bg-orange-500/[0.07] rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-16 right-0 w-64 h-64 bg-blue-400/[0.06] rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Content — fully centered, stacked vertically */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-20 text-center">
        {/* Logo */}
        <div className="relative inline-block mb-8 animate-fade-in-up">
          {/* Glow */}
          <div className="absolute inset-0 bg-orange-500/[0.1] rounded-full blur-3xl scale-125"></div>
          {/* Rotating ring */}
          <div
            className="absolute -inset-6 rounded-full border border-dashed border-white/[0.06]"
            style={{ animation: 'spin 60s linear infinite' }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-orange-400/50 rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-blue-400/30 rounded-full"></div>
          </div>
          <img
            src={logoJuliano}
            alt="Juliano Desentupidora"
            className="relative w-44 h-44 sm:w-52 sm:h-52 object-contain rounded-full animate-float"
            style={{ filter: 'drop-shadow(0 8px 32px rgba(249, 115, 22, 0.2))' }}
          />
        </div>

        {/* Location badge */}
        <div className="mb-6 animate-fade-in-up delay-100">
          <span className="inline-flex items-center gap-2 bg-white/[0.06] backdrop-blur-sm border border-white/10 text-white/90 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold">
            <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0" />
            Ilhéus & Região Sul da Bahia
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] mb-5 animate-fade-in-up delay-100">
          Sua Desentupidora de{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500">
            Confiança
          </span>{' '}
          em Ilhéus!
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-white/50 mb-8 leading-relaxed animate-fade-in-up delay-200 max-w-xl mx-auto">
          Fossas, Caixa de Gordura, Esgoto — Soluções Rápidas e Limpas.
          <br className="hidden sm:block" />
          Atendimento 24h com equipamentos de última geração.
        </p>

        {/* Urgency */}
        <div className="mb-8 animate-fade-in-up delay-300">
          <span className="inline-flex items-center gap-2 bg-orange-500/10 border-2 border-orange-500/40 rounded-xl px-4 py-2.5 animate-pulse-border">
            <Zap className="w-4 h-4 text-orange-400 animate-pulse flex-shrink-0" />
            <span className="text-orange-300 font-bold text-sm sm:text-base">
              ⚡ Resposta em até 15 min
            </span>
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 animate-fade-in-up delay-400">
          <a
            href="https://wa.me/5573991247631"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-2xl shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
          >
            <span className="relative">
              <MessageCircle className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping"></span>
            </span>
            Chamar no WhatsApp
          </a>
          <a
            href="tel:+5573991247631"
            className="group inline-flex items-center gap-2 bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 hover:border-orange-500/40 text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
          >
            <Phone className="w-5 h-5 text-orange-400" />
            (73) 99124-7631
          </a>
        </div>

        {/* Social proof */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10 animate-fade-in-up delay-500">
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span className="font-medium">+500 atendimentos</span>
          </div>
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 flex-shrink-0" />
            <span className="font-medium">4.9 de satisfação</span>
          </div>
        </div>

        {/* Coverage area */}
        <div className="animate-fade-in-up delay-500">
          <p className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-3">Área de Cobertura</p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {['Ilhéus', 'Itabuna', 'Uruçuca', 'Olivença', 'Pontal', 'e região'].map((city) => (
              <span
                key={city}
                className="bg-white/5 border border-white/[0.08] text-white/45 text-xs px-3 py-1.5 rounded-full font-medium hover:bg-white/10 hover:text-white/70 transition-all duration-300 cursor-default"
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
