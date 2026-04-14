import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import logoJuliano from '../assets/logo-juliano.png';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Por que nós', href: '#porque' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#1a365d]/95 backdrop-blur-md shadow-2xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center gap-3 group">
            <div className="relative">
              <img src={logoJuliano} alt="Juliano Desentupidora" className="w-10 h-10 md:w-12 md:h-12 rounded-xl object-contain transform group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-orange-400 font-extrabold text-base md:text-lg leading-tight tracking-tight">
                Juliano
              </span>
              <span className="text-white font-bold text-sm md:text-base leading-tight -mt-0.5">
                Desentupidora
              </span>
            </div>
          </a>

          {/* Badge 24h */}
          <div className="hidden md:flex items-center bg-emerald-500/15 border border-emerald-500/30 rounded-full px-3 py-1.5 ml-4">
            <span className="relative flex h-2.5 w-2.5 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-300 text-xs font-semibold tracking-wide">Atendimento 24h</span>
          </div>

          {/* Nav - Desktop */}
          <nav className="hidden lg:flex items-center gap-1 ml-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="relative text-white/80 hover:text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+5573988499596"
              className="hidden md:flex items-center gap-2 text-white/90 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-semibold">(73) 98849-9596</span>
            </a>
            <a
              href="tel:+5573988499596"
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              Ligue Agora
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#1a365d]/98 backdrop-blur-xl border-t border-white/10 px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="block text-white/80 hover:text-white hover:bg-white/10 rounded-lg px-4 py-3 text-sm font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="tel:+5573988499596"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-sm px-5 py-3 rounded-full"
            >
              <Phone className="w-4 h-4" />
              (73) 98849-9596
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
