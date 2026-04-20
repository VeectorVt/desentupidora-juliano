import { MessageCircle, Phone, Mail, MapPin, CheckCircle, Leaf } from 'lucide-react';
import logoJuliano from '../assets/logo-juliano.png';

const Instagram = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a365d] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/3 rounded-full translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Column 1: Logo + Tagline */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src={logoJuliano} alt="Juliano Desentupidora" className="w-14 h-14 rounded-xl object-contain" />
              <div>
                <span className="text-orange-400 font-extrabold text-lg leading-tight block">Juliano</span>
                <span className="text-white font-bold text-base leading-tight block -mt-0.5">Desentupidora</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Sua desentupidora de confiança em Ilhéus e região Sul da Bahia. Atendimento 24h.
            </p>
            <a
              href="https://wa.me/5573991247631"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-lg shadow-green-500/20 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Column 2: Contato */}
          <div>
            <h4 className="text-orange-400 font-bold text-base uppercase tracking-wider mb-5">
              Contato
            </h4>
            <div className="space-y-3">
              <a href="tel:+5573988499596" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm">
                <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                (73) 98849-9596
              </a>
              <a href="tel:+5573991247631" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm">
                <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                (73) 99124-7631
              </a>
              <a href="tel:+5573999279454" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm">
                <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                (73) 99927-9454
              </a>
              <a href="mailto:contato.julianodesentupidora@gmail.com
" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm min-w-0">
                <Mail className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span className="truncate">contato.julianodesentupidora@gmail.com
</span>
              </a>
              <a href="https://instagram.com/julianodesentupidora" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm">
                <Instagram className="w-4 h-4 text-orange-400 flex-shrink-0" />
                @julianodesentupidora
              </a>
            </div>
          </div>

          {/* Column 3: Address + Badges */}
          <div>
            <h4 className="text-orange-400 font-bold text-base uppercase tracking-wider mb-5">
              Endereço
            </h4>
            <div className="flex items-start gap-3 text-white/60 text-sm mb-8">
              <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
              <span>Rua Lírio nº757, Nelson Costa,<br />Ilhéus/BA</span>
            </div>

            {/* Trust badges */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-3 sm:px-4 py-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-white/70 text-sm font-medium">Empresa Regularizada</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <Leaf className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-white/70 text-sm font-medium">Respeito às Normas Ambientais</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-white/30 text-sm text-center">
            © {currentYear} Juliano Desentupidora. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
