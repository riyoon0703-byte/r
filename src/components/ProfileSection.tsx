import { motion } from 'motion/react';
import { EXPERIENCES, SKILL_SETS } from '../constants';

interface ProfileSectionProps {
  profileImage?: string;
}

export default function ProfileSection({ profileImage }: ProfileSectionProps) {
  return (
    <section id="about" className="relative py-48 bg-transparent text-white z-10 w-full">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-32 flex flex-col items-center lg:items-stretch"
        >
          {/* Top Section: Identity & Work History */}
          <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 w-full justify-between items-start">
            <div className="lg:w-1/2 flex flex-col">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-12">
                {/* Profile Image Container */}
                <div className="relative group shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border border-[#5151E3]/20 bg-white/5 backdrop-blur-md shadow-[0_0_30px_rgba(81,81,227,0.1)] group-hover:border-[#5151E3]/60 group-hover:shadow-[0_0_50px_rgba(81,81,227,0.3)] transition-all duration-700">
                    <img 
                      src={profileImage || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600"} 
                      alt="Kim Riyoon"
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col items-center md:items-start text-center md:text-left mt-4 md:mt-0">
                  <h2 className="text-4xl md:text-6xl font-sans font-bold leading-none text-white mb-4 tracking-tight">Kim Riyoon</h2>
                  <div className="w-12 h-px bg-white/20 mb-6" />
                </div>
              </div>

              <p className="text-[10pt] leading-relaxed font-light text-white/70 max-w-xl text-center md:text-left">
                알고리즘을 움직이는 스토리텔링, 크리에이티브 PD 김리윤입니다.<br />
                데이터 기반의 정교한 기획과 제작까지 책임지는 정교한 프로세스로 브랜드의 가치를 시각화합니다
              </p>
            </div>

            <div className="lg:w-1/2 flex flex-col w-full">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                id="experience"
              >
                <span className="text-[10px] uppercase tracking-widest opacity-50 block mb-10 font-bold text-white">WORK HISTORY</span>
                <div className="space-y-10 border-l border-white/10 pl-6 md:pl-10">
                  {EXPERIENCES.map((exp) => (
                    <div key={exp.company} className="flex flex-col gap-1 relative group">
                      <div className="absolute -left-[29px] md:-left-[45px] top-2 w-[9px] h-[9px] rounded-full bg-white/20 group-hover:bg-[#5151E3] group-hover:shadow-[0_0_15px_#5151E3] border border-[#000] transition-colors" />
                      <h3 className="text-lg md:text-xl font-bold text-white tracking-tight leading-tight group-hover:text-[#5151E3] transition-colors">{exp.company}</h3>
                      <span className="text-xs font-mono text-white/40 mb-1">
                        {exp.startDate} — {exp.endDate}
                      </span>
                      <p className="text-sm font-medium text-white/60">{exp.role}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="pt-24 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
              {/* Production Capability */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 md:p-12 rounded-[2rem] bg-black border border-white/[0.08] hover:border-[#5151E3]/40 hover:shadow-[0_0_40px_rgba(81,81,227,0.1)] backdrop-blur-md transition-all duration-300 group/capability"
              >
                <h4 className="text-xs uppercase tracking-widest font-semibold opacity-50 text-white mb-12 group-hover/capability:text-[#5151E3] transition-colors">Production Capability</h4>
                <div className="space-y-10">
                  {SKILL_SETS[0].items.map((item) => {
                    const [title, desc] = item.split(': ');
                    return (
                      <div key={title} className="relative pl-6">
                        <div className="absolute left-0 top-2 w-1 h-3 rounded-full bg-white/20" />
                        <span className="text-base font-bold tracking-tight text-white block mb-2">{title}</span>
                        <p className="text-sm leading-relaxed text-white/50 font-light max-w-lg whitespace-pre-line">{desc}</p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Software Skills */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 md:p-12 rounded-[2rem] bg-black border border-white/[0.08] hover:border-[#5151E3]/40 hover:shadow-[0_0_40px_rgba(81,81,227,0.1)] backdrop-blur-md transition-all duration-300 group/software"
              >
                <h4 className="text-xs uppercase tracking-widest font-semibold opacity-50 text-white mb-12 group-hover/software:text-[#5151E3] transition-colors">Software Skills</h4>
                <div className="grid grid-cols-1 gap-12">
                  {SKILL_SETS[1].items.map((item) => {
                    const [category, tools] = item.split(': ');
                    return (
                      <div key={category} className="space-y-4">
                        <span className="text-xs uppercase tracking-widest font-bold text-white/40 block pb-2 border-b border-white/[0.05]">{category}</span>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {tools.split(', ').map(tool => (
                            <span key={tool} className="text-[11px] px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white/60 font-medium hover:bg-[#5151E3]/10 hover:border-[#5151E3]/40 hover:text-[#5151E3] transition-colors cursor-default">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
