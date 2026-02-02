import { BUSINESS_PILLARS } from "../constants";

/**
 * About Section Component
 * Showcases company mission and core business pillars
 */
export default function About() {
  return (
    <section
      id="about"
      className="space-y-8 rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-xl"
    >
      {/* Section Header */}
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
          About us
        </p>
        <h2 className="text-2xl font-semibold sm:text-3xl">
          Purpose built for modern brands
        </h2>
        <p className="max-w-3xl text-slate-300">
          We're a multidisciplinary crew of strategists, designers, and
          engineers who believe the best products balance clarity and
          delight. We move fast, communicate clearly, and deliver work that
          lasts.
        </p>
      </div>

      {/* Business Pillars Grid */}
      <div className="grid gap-4 md:grid-cols-3">
        {BUSINESS_PILLARS.map((pillar) => (
          <div
            key={pillar.title}
            className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/15"
          >
            <h3 className="text-lg font-semibold text-white">
              {pillar.title}
            </h3>
            <p className="text-sm text-slate-300">{pillar.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
