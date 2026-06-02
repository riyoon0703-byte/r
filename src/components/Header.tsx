import { motion } from 'motion/react';
import { Eye } from 'lucide-react';

export default function Header({ isAdminOpen, setIsAdminOpen }: { isAdminOpen: boolean, setIsAdminOpen: (v: boolean) => void }) {
  return (
    <motion.header 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 p-2 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto flex justify-end items-start px-2">
        <div className="pointer-events-auto">
          <button 
            onClick={() => setIsAdminOpen(!isAdminOpen)}
            className="flex items-center gap-2 opacity-15 hover:opacity-100 transition-opacity text-[7px] uppercase tracking-[0.5em] font-black text-white"
          >
            <Eye size={8} />
            Admin Mode
          </button>
        </div>
      </div>
    </motion.header>
  );
}
