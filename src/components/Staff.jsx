import { TEAM_DISCIPLINES } from "../constants";

/**
 * Staff Section Component
 * Displays team disciplines and roles
 */
export default function Staff() {
  return (
    <section
      id="staff"
      className="space-y-8 rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-xl"
    >
      {/* Section Header */}
      <div className="space-y-2 text-center">
              <h2 className="text-2xl font-semibold sm:text-3xl">
          Our Commitment doesn't End with Delivery
        </h2>
          <p className=" text-slate-400 text-xl leading-relaxed  font-medium">
          We stay by your side with 24/7 support whenever you need us.
        </p>

        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 mt-[3%]">
          About Us
        </p>
  

      </div>

      {/* Team Disciplines Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM_DISCIPLINES.map((discipline) => (
          <article
            key={discipline}
            className="flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/15"
          >
            {/* Discipline Badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-semibold text-cyan-200">
              {discipline}
            </div>

            <h3 className="text-lg font-semibold text-white">
              {discipline} lead
            </h3>
            <p className="text-sm text-slate-300">
              Seasoned practitioner guiding the craft, mentoring the team,
              and keeping standards high.
            </p>

            {/* View Profiles Link */}
            <button className="mt-auto text-sm font-semibold text-cyan-300 underline-offset-4 hover:underline">
              See profiles
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
