import { useRef } from 'react';
import { ImageIcon, ExternalLink, Play } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Instagram = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

// Assets
import videoFossa from '../assets/video-de-fundo-caminhao.mp4';
import videoDesentupimento from '../assets/desentupimento-sonda.mp4';
import videoCaminhaoNovo from '../assets/video-caminhao-novo.mp4';
import imgCaixaGordura from '../assets/caixa-de-gordura.jpg';
import imgHidrojateamento from '../assets/foto-caminhao-lateral.jpg';
import imgAntesDepois from '../assets/foto-de-fundo.jpg';
import imgEquipeCondominio from '../assets/equipe-limpeza de condominio.jpeg';
import videoLimpezaQuimico from '../assets/limpeza-quimico.mp4';

const galleryItems = [
  { id: 1, label: '', video: videoFossa },
  { id: 2, label: 'Desentupimento', video: videoDesentupimento },
  { id: 3, label: 'Caminhão Novo', video: videoCaminhaoNovo },
  { id: 4, label: '', image: imgHidrojateamento },
  { id: 5, label: 'Antes e Depois', image: imgCaixaGordura },
  { id: 6, label: '', image: imgAntesDepois },
  { id: 7, label: 'Limpeza Química', video: videoLimpezaQuimico },
  { id: 8, label: 'Limpeza em Condomínio', image: imgEquipeCondominio, objectPosition: 'top' },
];

function GalleryCard({ item, index, isInView }) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className={`group relative aspect-[4/3] bg-gradient-to-br from-[#1a365d] to-[#0f2744] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 ${
        isInView ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${(index + 1) * 0.1}s` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video */}
      {item.video && (
        <>
          <video
            ref={videoRef}
            src={item.video}
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {/* Play icon overlay - hidden on hover when video plays */}
          <div className="absolute inset-0 flex items-center justify-center z-10 group-hover:opacity-0 transition-opacity duration-300">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
              <Play className="w-6 h-6 text-white ml-1" fill="white" />
            </div>
          </div>
        </>
      )}

      {/* Image */}
      {item.image && !item.video && (
        <img
          src={item.image}
          alt={item.label}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
        />
      )}

      {/* Placeholder (fallback) */}
      {!item.image && !item.video && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <ImageIcon className="w-12 h-12 text-white/20" />
          <span className="text-white/30 text-sm font-medium">{item.label}</span>
        </div>
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6 z-20">
        <div className="flex items-center gap-2 text-white font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {/* <ExternalLink className="w-5 h-5" /> */}
          {/* {item.video ? 'Assistir' : 'Ver foto'} */}
        </div>
      </div>

      {/* Top label */}
      <div className="absolute top-3 left-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        {item.video && '▶ '}{item.label}
      </div>
    </div>
  );
}

export default function Gallery() {
  const [ref, isInView] = useInView();

  return (
    <section className="py-20 md:py-28 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block bg-orange-100 text-orange-600 text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Galeria
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a365d] mb-4">
            Veja Nosso Trabalho em Ação
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Antes e depois de cada atendimento
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {galleryItems.map((item, index) => (
            <GalleryCard key={item.id} item={item} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Instagram CTA */}
        <div className={`text-center ${isInView ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-[#1a365d]">
              <Instagram className="w-6 h-6" />
              <span className="font-bold text-lg">@julianodesentupidora</span>
            </div>
            <a
              href="https://www.instagram.com/julianodesentupidora/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold text-sm px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Instagram className="w-4 h-4" />
              Seguir no Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
