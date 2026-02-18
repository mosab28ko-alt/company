import { motion } from "framer-motion";
import { COMPANY_STATS } from "../constants";

/**
 * Hero Section Component - Senior Edition
 * Featuring Framer Motion animations and high-end styling
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="grid grid-cols-1 items-center gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-500/10 md:grid-cols-2 lg:p-12"
    >
      {/* Left Column - Text Content with Initial Fade-in */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
          CODE NEXUS TEAM
        </p>
        
        <h1 className="text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl md:text-6xl">
          We work hand-in-hand with our <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">clients</span> to turn their vision into reality.
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 pt-4 ">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-8 py-4 text-sm font-bold text-slate-950 shadow-xl transition-all hover:scale-105 active:scale-95 "
          >
            Chat with us
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-8 py-4 text-sm font-bold text-slate-100 transition-all hover:bg-white/5 hover:border-white/30"
          >
            Learn more
          </a>
        </div>
      </motion.div>

      {/* Right Column - Animated Statistics Grid (The Senior Touch) */}
{/* Right Column - Animated Statistics Grid */}
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
  {COMPANY_STATS.map((item, index) => (
<motion.div
  key={item.label}
  initial={{ opacity: 0, y: 15 }} 
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ 
    type: "spring",      
    stiffness: 260,      
    damping: 20,        
    duration: 0.4,      
    delay: index * 0.05  
  }}
  whileHover={{ 
    scale: 1.02,         
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderColor: "rgba(34, 211, 238, 0.3)" 
  }}
  className="flex flex-col gap-2 rounded-2xl border border-white/5 bg-white/5 p-6 shadow-lg backdrop-blur-sm transition-all"
>
      {/* النص الكبير صار جرادينت الآن */}
      <span className="text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 md:text-3xl text-center">
        {item.value}
      </span>
      
      {/* النص الصغير خليته أبيض شفاف شوي عشان يبرز الجرادينت اللي فوقه */}
      <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
        {item.label}
      </span>
    </motion.div>
  ))}
</div>
    </section>
  );
}