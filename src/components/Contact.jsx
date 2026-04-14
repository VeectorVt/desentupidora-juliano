import { useState } from 'react';
import { MessageCircle, Phone, MapPin, Clock, Mail, Send } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const [ref, isInView] = useInView();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: integrate with email service or backend
    alert('Mensagem enviada! Retornaremos em breve.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center mb-12 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block bg-blue-100 text-[#1a365d] text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Contato
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#1a365d] mb-4">
            Entre em Contato
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Atendimento 24h — 7 dias por semana, incluindo feriados
          </p>
        </div>

        {/* WhatsApp highlight box */}
        <div className={`mb-12 ${isInView ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
          <div className="bg-[#25D366]/5 border-2 border-[#25D366]/30 rounded-2xl p-6 md:p-8 text-center">
            <p className="text-[#1a365d] text-xl font-bold mb-4">
              Para urgências, chame direto no WhatsApp
            </p>
            <a
              href="https://wa.me/5573991247631"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base sm:text-lg px-5 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 animate-pulse"
            >
              <MessageCircle className="w-6 h-6" />
              💬 Chamar no WhatsApp Agora
            </a>
          </div>
        </div>

        {/* Two columns: Info + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Info */}
          <div className={`${isInView ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            <h3 className="text-xl font-bold text-[#1a365d] mb-6">Informações</h3>
            {/* Hours */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h4 className="font-bold text-[#1a365d]">Horário de Atendimento</h4>
                <p className="text-gray-500">24h / 7 dias por semana</p>
              </div>
            </div>
            {/* Phones */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h4 className="font-bold text-[#1a365d] mb-1">Telefones</h4>
                <div className="space-y-1">
                  <a href="tel:+5573988499596" className="flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors">
                    📞 (73) 98849-9596
                  </a>
                  <a href="tel:+5573991247631" className="flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors">
                    📱 (73) 99124-7631
                  </a>
                  <a href="tel:+5573999279454" className="flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors">
                    📱 (73) 99927-9454
                  </a>
                </div>
              </div>
            </div>
            {/* Address */}
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h4 className="font-bold text-[#1a365d]">Endereço</h4>
                <p className="text-gray-500">Rua Lírio nº757, Nelson Costa, Ilhéus/BA</p>
              </div>
            </div>
          </div>

          {/* Right: Google Maps embed */}
          <div className={`${isInView ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            <div className="w-full h-full min-h-[320px] rounded-2xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.5!2d-39.03717481861235!3d-14.81996157058354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQ5JzExLjkiUyAzOcKwMDInMTMuOCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
                title="Localização Desentupidora Juliano"
              ></iframe>
            </div>
          </div>
        </div>

          {/* Right: Form */}
          {/* <div className={`${isInView ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            <h3 className="text-xl font-bold text-[#1a365d] mb-6">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-semibold text-[#1a365d] mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all duration-300 text-gray-700"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-semibold text-[#1a365d] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all duration-300 text-gray-700"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-semibold text-[#1a365d] mb-2">
                  Mensagem
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all duration-300 text-gray-700 resize-none"
                  placeholder="Descreva o serviço que precisa..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-base py-4 rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300 hover:scale-[1.02]"
              >
                <Send className="w-5 h-5" />
                Enviar Mensagem
              </button>
              <p className="text-center text-gray-400 text-sm">
                Ou chame direto no WhatsApp para atendimento imediato
              </p>
            </form>
          </div> */}
      </div>
    </section>
  );
}
