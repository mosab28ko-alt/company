import { CONTACT_INFO } from "../constants";

/**
 * Contact Section Component
 * Displays contact information and call-to-action buttons
 */
export default function Contact() {
  return (
    <section
      id="contact"
      className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-xl"
    >
      {/* Section Header */}
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Call us
        </p>
        <h2 className="text-2xl font-semibold sm:text-3xl">
          Let's plan your next launch
        </h2>
        <p className="max-w-3xl text-slate-300">
          Tell us where you're headed and we'll assemble the right team to
          get you there.
        </p>
      </div>

      {/* Contact Details Card */}
      <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 md:flex-row md:items-center md:justify-between">
        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold text-white">Direct line</h3>
          <p className="text-2xl font-semibold text-white">
            {CONTACT_INFO.phone}
          </p>
          <p className="text-sm text-slate-300">{CONTACT_INFO.hours}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <a
            href={CONTACT_INFO.phoneHref}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:translate-y-[-1px]"
          >
            Call now
          </a>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-white/30 hover:bg-white/5"
          >
            Email the team
          </a>
        </div>
      </div>
    </section>
  );
}
