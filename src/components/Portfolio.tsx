import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PortfolioItem } from '../types';
import { PORTFOLIO_CATEGORIES } from '../constants';

const CATEGORIES = [...PORTFOLIO_CATEGORIES];

const getYouTubeId = (url: string) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const getVimeoId = (url: string) => {
  if (!url) return null;
  const regExp = /vimeo\.com\/(?:video\/)?(\d+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

export default function Portfolio({ items }: { items: PortfolioItem[] }) {
  const [activeCategory, setActiveCategory] = useState(PORTFOLIO_CATEGORIES[0]);

  const filteredItems = items.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-32 bg-transparent text-white w-full">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Header with Title and Filter Tabs */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <h2 className="inline-block w-fit text-4xl md:text-5xl font-sans font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#5151E3] via-[#67DCF1] to-[#51E3A1] mb-4">
                Works
              </h2>
              <p className="text-lg text-white/50 font-light leading-relaxed">
                A showcase of strategic planning and visual execution, crafted to connect brands with their audiences.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 lg:mb-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-md text-xs font-medium transition-all duration-300 ${
                    activeCategory === cat 
                      ? 'bg-transparent text-white border border-[#5151E3] shadow-[0_0_15px_rgba(103,220,241,0.2)]' 
                      : 'bg-white/5 text-white/50 border border-white/10 hover:bg-white/10 hover:border-[#5151E3] hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => {
                const ytId = item.youtubeUrl ? getYouTubeId(item.youtubeUrl) : null;
                const vimeoId = item.vimeoUrl ? getVimeoId(item.vimeoUrl) : null;
                const dynamicThumb = ytId ? `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg` : item.thumbnailUrl;

                return (
                <motion.a
                  key={item.id}
                  layout
                  href={item.youtubeUrl || item.vimeoUrl || item.videoUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="group block cursor-pointer h-full"
                >
                  {/* Card Container aligned with Resend subtle styling */}
                  <div className="bg-black backdrop-blur-md rounded-2xl border border-white/[0.08] overflow-hidden hover:border-[#5151E3]/40 hover:shadow-[0_0_40px_rgba(81,81,227,0.15)] transition-all duration-300 h-full flex flex-col group/card">
                    
                    {/* Image Container */}
                    <div className="relative aspect-[16/9] overflow-hidden bg-black/50 border-b border-white/[0.08] shrink-0">
                      {item.youtubeUrl ? (
                        <div className="w-full h-full relative">
                          <img 
                            src={dynamicThumb}
                            alt={item.title}
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <div className="w-16 h-16 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 transform scale-90 group-hover:scale-100 transition-all duration-300">
                              <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                            </div>
                          </div>
                        </div>
                      ) : item.vimeoUrl ? (
                        <div className="w-full h-full relative">
                          <img 
                            src={item.thumbnailUrl}
                            alt={item.title}
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <div className="w-16 h-16 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 transform scale-90 group-hover:scale-100 transition-all duration-300">
                              <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                            </div>
                          </div>
                        </div>
                      ) : item.videoUrl ? (
                        <video 
                          src={item.videoUrl} 
                          poster={item.thumbnailUrl}
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      ) : (
                        <img 
                          src={item.thumbnailUrl} 
                          alt={item.title}
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                        />
                      )}
                      
                      {/* Floating Identity Tag */}
                      <div className="absolute z-30 top-4 left-4">
                        <span className="bg-black/80 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-semibold text-white border border-white/20 uppercase tracking-wide shadow-sm">
                          {item.category}
                        </span>
                      </div>

                      {/* Hover Overlay for Role & Year */}
                      <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          {item.role && (
                            <span className="text-white font-medium text-sm sm:text-base tracking-wide drop-shadow-lg">
                              {item.role}
                            </span>
                          )}
                          {item.year && (
                            <span className="text-white/80 font-mono text-xs mt-1 drop-shadow-md">
                              {item.year}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#67DCF1] group-hover:shadow-[0_0_15px_#67DCF1] transition-all duration-300" />
                        <h3 className="text-xl font-bold text-white tracking-tight leading-tight group-hover:text-white transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      {item.subText && (
                        <p className="text-sm font-medium text-white/50 mb-3 leading-relaxed tracking-tight group-hover:text-white/70 transition-colors whitespace-pre-line">
                          {item.subText}
                        </p>
                      )}
                      <p className="text-sm font-light text-white/40 leading-relaxed group-hover:text-white/60 transition-colors whitespace-pre-line">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.a>
              );})}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
