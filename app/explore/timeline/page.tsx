
"use client";

import Link from "next/link";

const events = [
  {
    year: "1199",
    title: "Construction Begins",
    description:
      "Qutb-ud-din Aibak began the construction of Qutub Minar in Delhi. The initial structure included the first storey.",
  },
  {
    year: "Early 13th Century",
    title: "Further Construction",
    description:
      "Iltutmish continued the work and added more storeys, expanding the monument.",
  },
  {
    year: "14th Century",
    title: "Repairs and Restoration",
    description:
      "The monument underwent repairs after damage caused by lightning and other events.",
  },
  {
    year: "Today",
    title: "A Historic Landmark",
    description:
      "Qutub Minar stands as an important monument in Delhi and is part of the UNESCO World Heritage Site.",
  },
];

export default function TimelinePage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-[#f5f0e8]">
      <nav className="flex items-center justify-between border-b border-white/10 px-6 py-5 md:px-16">
        <Link
          href="/"
          className="text-xl font-semibold tracking-[0.2em] text-[#d4af70]"
        >
          RETROSCAPE
        </Link>

        <Link
          href="/explore"
          className="text-sm text-white/70 transition hover:text-[#d4af70]"
        >
          ← Back to Explore
        </Link>
      </nav>

      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
        <p className="mb-4 text-xs tracking-[0.35em] text-[#d4af70]">
          THE STORY OF A MONUMENT
        </p>

        <h1 className="mb-6 text-4xl font-light leading-tight md:text-6xl">
          Qutub Minar
          <span className="block font-semibold text-[#d4af70]">
            Through Time
          </span>
        </h1>

        <p className="mb-16 max-w-2xl text-base leading-8 text-white/60">
          Travel through the important stages in the history of Qutub Minar
          and discover how this remarkable monument developed over the
          centuries.
        </p>

        <div className="relative border-l border-[#d4af70]/40 pl-7 md:pl-12">
          {events.map((event, index) => (
            <article key={event.year} className="relative mb-12 last:mb-0">
              <span className="absolute -left-[34px] top-1 h-3 w-3 rounded-full border-2 border-[#0b0b0b] bg-[#d4af70] md:-left-[50px]" />

              <p className="mb-3 text-sm tracking-widest text-[#d4af70]">
                {event.year}
              </p>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-[#d4af70]/50 md:p-8">
                <p className="mb-3 text-xs tracking-widest text-white/35">
                  CHAPTER {String(index + 1).padStart(2, "0")}
                </p>

                <h2 className="mb-4 text-xl font-semibold md:text-2xl">
                  {event.title}
                </h2>

                <p className="leading-7 text-white/60">
                  {event.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-4">
          <Link
            href="/monuments/qutub-minar"
            className="rounded-full bg-[#d4af70] px-7 py-3 text-sm font-semibold text-black transition hover:bg-[#e8c991]"
          >
            Explore Qutub Minar
          </Link>

          <Link
            href="/explore/then-vs-now"
            className="rounded-full border border-white/20 px-7 py-3 text-sm transition hover:border-[#d4af70] hover:text-[#d4af70]"
          >
            Then vs Now →
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-7 text-center text-xs tracking-widest text-white/35">
        RETROSCAPE · HISTORY REIMAGINED
      </footer>
    </main>
  );
}
