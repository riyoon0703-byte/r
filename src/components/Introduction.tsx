import { motion } from 'motion/react';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Introduction() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center bg-transparent text-white pt-32 pb-20 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl px-4 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="relative flex flex-col items-center w-full"
        >
          {/* Subtle badge */}
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#5151E3]/30 bg-[#5151E3]/10 text-xs font-semibold text-[#5151E3] hover:bg-[#5151E3]/20 hover:border-[#5151E3]/50 transition-all duration-300 cursor-default shadow-[0_0_15px_rgba(103,220,241,0.15)] backdrop-blur-md">
            <span>Production Planner & Editor</span>
            <ArrowRight size={12} className="opacity-80" />
          </div>

          {/* Main Typography */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-sans font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Visual storytelling <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5151E3] via-[#67DCF1] to-[#51E3A1]">for modern brands.</span>
          </h1>

          <p className="text-[20pt] text-white/80 max-w-2xl font-light leading-snug mb-10">
            단순히 보기 좋은 영상이 아닌,<br />
            목적지에 정확히 도달하는 영상을 만듭니다.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#portfolio" className="relative group overflow-hidden bg-white text-black hover:bg-transparent hover:text-white border px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:border-[#5151E3] hover:shadow-[0_0_30px_rgba(103,220,241,0.4)] flex items-center gap-2 z-10" onClick={(e) => {
                e.preventDefault();
                const port = document.getElementById('portfolio');
                if (port) {
                    port.scrollIntoView({ behavior: 'smooth' });
                }
            }}>
              View Portfolio
            </a>
            <a href="#about" className="bg-transparent border border-white/20 hover:bg-white/5 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200 flex items-center gap-2" onClick={(e) => {
                e.preventDefault();
                const about = document.getElementById('about');
                if (about) {
                    about.scrollIntoView({ behavior: 'smooth' });
                }
            }}>
              <PlayCircle size={18} className="opacity-70" />
              Read my story
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
