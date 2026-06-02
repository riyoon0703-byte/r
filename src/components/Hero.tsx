import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black font-sans text-white">
      {/* Ambient Theme Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#5151E3] opacity-[0.07] blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] bg-[#67DCF1] opacity-[0.06] blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute top-[40%] right-[-5%] w-[25vw] h-[25vw] bg-[#51E3A1] opacity-[0.05] blur-[100px] rounded-full mix-blend-screen"></div>
      </div>

      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,10,20,0.7)_0%,#000_60%)] z-0" />

      {/* Neon Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%)] w-full h-full">
        {/* line left1 */}
        <div className="absolute rounded-[100%] blur-[2px] opacity-90 border-[3px] border-[#51E3BB] w-[1300px] h-[2200px] -left-[900px] -top-[600px] -rotate-[25deg] shadow-[0_0_20px_#51E3BB,0_0_60px_#51E3BB] pointer-events-none z-0" />
        {/* line left2 */}
        <div className="absolute rounded-[100%] blur-[2px] opacity-70 border-[3px] border-[#67DCF1] w-[1500px] h-[2400px] -left-[1150px] -top-[700px] rotate-[20deg] shadow-[0_0_20px_#67DCF1,0_0_80px_#67DCF1] pointer-events-none z-0" />
        {/* line right1 */}
        <div className="absolute rounded-full blur-[2px] opacity-90 border-[3px] border-[#51E3A1] w-[1300px] h-[2100px] -right-[1050px] -top-[200px] rotate-[20deg] shadow-[0_0_20px_#51E3A1,0_0_70px_#51E3A1] pointer-events-none z-0" />
        {/* line right2 */}
        <div className="absolute rounded-full blur-[2px] opacity-80 border-[3px] border-[#5151E3] w-[1500px] h-[2000px] -right-[1250px] -top-[300px] -rotate-[20deg] shadow-[0_0_20px_#5151E3,0_0_80px_#5151E3] pointer-events-none z-0" />
      </div>

      {/* Logo */}
      <div className="absolute top-12 left-10 md:left-20 w-12 h-12 rounded-full border-2 border-white/10 flex items-center justify-center backdrop-blur-md z-30 mix-blend-screen hidden lg:flex">
        <span className="text-white text-2xl leading-none">✦</span>
      </div>

      {/* Navigation */}
      <nav className="absolute top-12 w-full flex justify-center gap-4 sm:gap-8 z-30 px-4">
        {[
          { name: 'About me', link: '#about' },
          { name: 'Portfolio', link: '#portfolio' },
          { name: 'Contact', link: '#portfolio' }
        ].map((item) => (
          <a
            key={item.name}
            href={item.link}
            className="px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/[0.05] hover:bg-white/10 text-xs sm:text-[13px] font-medium tracking-wide text-white transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(73,89,255,0.5),0_0_60px_rgba(63,255,224,0.25),inset_0_0_20px_rgba(255,255,255,0.04)] shadow-[inset_0_0_20px_rgba(255,255,255,0.04),0_0_18px_rgba(255,255,255,0.08)]"
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* Main Hero Content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center z-20 w-full px-4">
        
        {/* Glowing Shapes */}
        <div className="flex items-center justify-center gap-6 sm:gap-16 mb-8 mt-4">
          {/* Shape 1: Purple Star */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-[120px] h-[120px] sm:w-[240px] sm:h-[240px]"
          >
            <svg viewBox="0 0 100 100" fill="currentColor" stroke="currentColor" strokeWidth="10" strokeLinejoin="round" strokeLinecap="round" 
                 className="w-full h-full text-[#5151E3] drop-shadow-[0_0_20px_rgba(81,81,227,0.9)] filter blur-[4px] opacity-95">
              <path d="M 50 18 C 50 42, 58 50, 82 50 C 58 50, 50 58, 50 82 C 50 58, 42 50, 18 50 C 42 50, 50 42, 50 18 Z" />
            </svg>
          </motion.div>

          {/* Shape 2: Cyan Sun */}
          <motion.div
            animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[140px] h-[140px] sm:w-[280px] sm:h-[280px]"
          >
            <svg viewBox="0 0 100 100" fill="currentColor" 
                 className="w-full h-full text-[#67DCF1] drop-shadow-[0_0_25px_rgba(103,220,241,0.9)] filter blur-[5px] opacity-95">
              <rect x="42" y="10" width="16" height="80" rx="8" />
              <rect x="42" y="10" width="16" height="80" rx="8" transform="rotate(45 50 50)" />
              <rect x="42" y="10" width="16" height="80" rx="8" transform="rotate(90 50 50)" />
              <rect x="42" y="10" width="16" height="80" rx="8" transform="rotate(135 50 50)" />
              <circle cx="50" cy="50" r="23" />
            </svg>
          </motion.div>

          {/* Shape 3: Green Star */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.5, delay: 1, repeat: Infinity, ease: "easeInOut" }}
            className="w-[120px] h-[120px] sm:w-[240px] sm:h-[240px]"
          >
            <svg viewBox="0 0 100 100" fill="currentColor" stroke="currentColor" strokeWidth="10" strokeLinejoin="round" strokeLinecap="round" 
                 className="w-full h-full text-[#51E3A1] drop-shadow-[0_0_20px_rgba(81,227,161,0.9)] filter blur-[4px] opacity-95">
              <path d="M 50 18 C 50 42, 58 50, 82 50 C 58 50, 50 58, 50 82 C 50 58, 42 50, 18 50 C 42 50, 50 42, 50 18 Z" />
            </svg>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <h1 className="text-[58px] sm:text-[92px] font-sans font-semibold tracking-[-0.04em] text-white leading-[0.95] mb-12">
            WELLCOME
          </h1>
          
          <a
            href="#portfolio"
            className="inline-flex items-center gap-4 px-8 py-[18px] rounded-full bg-[#141423]/75 border border-[#5151E3]/45 backdrop-blur-xl shadow-[0_0_18px_rgba(73,89,255,0.45),inset_0_0_18px_rgba(255,255,255,0.04)] text-white text-[12px] tracking-[1px] transition-all hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(73,89,255,0.8),0_0_80px_rgba(63,255,224,0.35)] font-medium"
          >
            VIEW PORTFOLIO
            <span className="text-[#67DCF1] text-[18px] leading-none mix-blend-screen">✦</span>
          </a>
        </motion.div>
      </div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-16 left-10 md:left-24 z-20 w-[300px] hidden md:block"
      >
        <p className="text-white/45 text-[13px] leading-[1.8] font-light">
          Riyoon isn't just a visual—it's an experience.<br />
          Interact with living geometry, feel the feedback, and dive into a world where every element responds to you.
        </p>
      </motion.div>
      
    </section>
  );
}
