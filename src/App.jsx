import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "The Staff", href: "#staff" },
  { label: "Call Us", href: "#contact" },
];

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-16 pt-6 md:px-6 lg:px-8">
        <header className="sticky top-4 z-20 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 backdrop-blur">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500" />
              <span className="text-lg font-semibold tracking-tight">
                Aurora Studio
              </span>
            </div>

            <nav
              className={`${
                open ? "flex" : "hidden"
              } absolute left-4 right-4 top-16 flex-col gap-2 rounded-2xl border border-white/10 bg-slate-900/95 p-3 shadow-2xl md:static md:flex md:flex-row md:items-center md:gap-3 md:border-none md:bg-transparent md:p-0 md:shadow-none`}
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/10"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:translate-y-[-1px]"
              >
                Get in touch
              </a>
            </nav>

            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-100 md:hidden"
              aria-expanded={open}
              aria-label="Toggle navigation"
              onClick={() => setOpen((prev) => !prev)}
            >
              <div className="h-4 w-4">
                <span className="block h-0.5 w-4 rounded bg-current transition-transform" />
                <span className="mt-1 block h-0.5 w-3 rounded bg-current transition-transform" />
                <span className="mt-1 block h-0.5 w-5 rounded bg-current transition-transform" />
              </div>
            </button>
          </div>
        </header>

        <main className="flex flex-col gap-14 md:gap-16">
          <section
            id="home"
            className="grid grid-cols-1 items-center gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-500/10 md:grid-cols-2"
          >
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Boutique creative team
              </p>
              <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
                We craft digital experiences that feel effortless.
              </h1>
              <p className="text-base text-slate-300">
                From concept to launch, we align strategy, design, and technology
                to help brands move confidently into what’s next.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:translate-y-[-1px]"
                >
                  Schedule a call
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-white/30 hover:bg-white/5"
                >
                  Learn more
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[ 
                { value: "120+", label: "projects delivered" },
                { value: "98%", label: "client satisfaction" },
                { value: "14", label: "specialists on staff" },
                { value: "24/7", label: "global support window" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left shadow-lg shadow-black/20"
                >
                  <span className="block text-2xl font-semibold text-white">
                    {item.value}
                  </span>
                  <span className="text-sm text-slate-300">{item.label}</span>
                </div>
              ))}
            </div>
          </section>

          <section
            id="about"
            className="space-y-8 rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-xl"
          >
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                About us
              </p>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Purpose built for modern brands
              </h2>
              <p className="max-w-3xl text-slate-300">
                We’re a multidisciplinary crew of strategists, designers, and
                engineers who believe the best products balance clarity and
                delight. We move fast, communicate clearly, and deliver work that
                lasts.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Strategy first",
                  copy: "We translate business goals into crisp product direction.",
                },
                {
                  title: "Design with intent",
                  copy: "Interfaces that feel premium, considered, and on brand.",
                },
                {
                  title: "Delivery obsessed",
                  copy: "Reliable sprints, transparent communication, measurable results.",
                },
              ].map((pillar) => (
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

          <section
            id="staff"
            className="space-y-8 rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-xl"
          >
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                The staff
              </p>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Meet the team behind the work
              </h2>
              <p className="max-w-3xl text-slate-300">
                A flexible bench of specialists means the right people on every
                project, no bloated overhead.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {["Product", "Design", "Engineering", "Delivery"].map(
                (discipline) => (
                  <article
                    key={discipline}
                    className="flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/15"
                  >
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
                    <button className="mt-auto text-sm font-semibold text-cyan-300 underline-offset-4 hover:underline">
                      See profiles
                    </button>
                  </article>
                )
              )}
            </div>
          </section>

          <section
            id="contact"
            className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-xl"
          >
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Call us
              </p>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Let’s plan your next launch
              </h2>
              <p className="max-w-3xl text-slate-300">
                Tell us where you’re headed and we’ll assemble the right team to
                get you there.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">Direct line</h3>
                <p className="text-2xl font-semibold text-white">(555) 312-0412</p>
                <p className="text-sm text-slate-300">Mon–Fri · 9:00a–6:00p EST</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:5553120412"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:translate-y-[-1px]"
                >
                  Call now
                </a>
                <a
                  href="mailto:hello@aurorastudio.com"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-white/30 hover:bg-white/5"
                >
                  Email the team
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-slate-400">
          <div className="font-semibold text-slate-100">Aurora Studio</div>
          <div className="flex flex-wrap items-center gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-1 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p>© {new Date().getFullYear()} Aurora Studio. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
