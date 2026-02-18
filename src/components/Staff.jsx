import { TEAM_DISCIPLINES } from "../constants";

export default function Staff() {
  return (
    <section id="staff" className="py-20 px-4 md:px-8">
      {/* 1. العنوان "الخارق" في المنطقة المطلوبة */}
      <div className="mb-16 text-center space-y-4">
        <h2 className="text-4xl font-black text-white mt-2 uppercase italic tracking-tight">
          MEET <span className="text-purple-500">OUR TEAM</span>
        </h2>
      </div>

      {/* 2. حاوية المحتوى الأصلية بتنسيق أرقى */}
      <div className="max-w-7xl mx-auto space-y-12 rounded-[2.5rem] border border-white/10 bg-slate-900/40 backdrop-blur-md p-10 shadow-2xl relative overflow-hidden">
        
        {/* لمسة إضافية: توهج في الخلفية */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full" />

        {/* Section Header الداخلي */}
        <div className="relative z-10 space-y-3 text-center mb-12">
          <h3 className="text-2xl font-bold sm:text-4xl text-white tracking-tight">
            BRIDGING TALENT FROM EGYPT AND PALESTINE
          </h3>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-light max-w-2xl mx-auto">
            Our commitment is absolute: your project is backed by <span className="text-purple-500 font-semibold">24/7 support</span> that never sleeps.
          </p>
        </div>

        {/* Team Disciplines Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
          {TEAM_DISCIPLINES.map((item, index) => (
            <article
              key={index}
              className="group flex h-full flex-col gap-5 rounded-2xl border border-white/5 bg-white/5 p-6 transition-all duration-500 hover:scale-[1.03] hover:bg-white/[0.08] hover:border-purple-500/40 shadow-xl"
            >
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-cyan-400/10 px-4 py-1.5 text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em] border border-cyan-400/20">
                {item.badge}
              </div>

              <h4 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                {item.title}
              </h4>
              
              <p className="text-sm leading-relaxed text-slate-400/90 font-light">
                {item.description}
              </p>

              <button className="mt-auto pt-6 text-sm font-bold text-purple-400 group-hover:text-cyan-400 transition-all flex items-center gap-2">
                SEE PORTFOLIO 
                <span className="transform group-hover:translate-x-2 transition-transform">→</span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}