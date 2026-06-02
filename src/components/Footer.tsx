import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-32 px-6 bg-transparent relative z-10 text-white overflow-hidden w-full">
      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-20 flex flex-col items-center">
          <h2 className="inline-block w-fit text-5xl md:text-7xl font-sans font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#5151E3] via-[#67DCF1] to-[#51E3A1]">Contact</h2>
        </header>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-32">
          <div className="flex flex-col sm:flex-row gap-6 md:gap-12 text-lg font-medium tracking-tight">
            <a href="mailto:riyoon0703@gmail.com" className="group flex items-center gap-4 bg-black border border-white/[0.08] hover:border-[#5151E3]/50 hover:shadow-[0_0_40px_rgba(81,81,227,0.2)] backdrop-blur-md px-8 py-6 rounded-2xl transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#5151E3]/20 transition-colors duration-300">
                <Mail size={18} className="opacity-80 group-hover:text-[#51E3A1] transition-colors duration-300" />
              </div>
              <span className="text-white/80 group-hover:text-white transition-colors duration-300">riyoon0703@gmail.com</span>
            </a>
            <div className="group flex items-center gap-4 bg-black border border-white/[0.08] hover:border-[#5151E3]/50 hover:shadow-[0_0_40px_rgba(103,220,241,0.2)] backdrop-blur-md px-8 py-6 rounded-2xl transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#67DCF1]/20 transition-colors duration-300">
                <Phone size={18} className="opacity-80 group-hover:text-[#67DCF1] transition-colors duration-300" />
              </div>
              <span className="text-white/80 group-hover:text-white transition-colors duration-300">010.4428.4636</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/[0.08] gap-6 px-4">
          <div className="text-[10px] uppercase tracking-widest opacity-40 text-white">
            © 2026 Kim Riyoon. All rights reserved.
          </div>
          <button 
            onClick={scrollToTop}
            className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/60 hover:text-[#51E3A1] transition-colors"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
