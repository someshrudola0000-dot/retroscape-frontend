
"use client";

import { useState } from "react";
import Link from "next/link";

type Version = "then" | "now";

const historicalFacts = [
  { label: "LOCATION", value: "Mehrauli, Delhi, India" },
  { label: "CONSTRUCTION BEGAN", value: "Around 1199 CE" },
  { label: "WORLD HERITAGE", value: "UNESCO listing in 1993" },
];

const changes = [
  {
    number: "01",
    title: "Construction",
    then: "Construction began under Qutb-ud-Din Aibak. The tower was continued by Iltutmish.",
    now: "The tower stands as a completed historic monument, preserved for visitors to explore.",
  },
  {
    number: "02",
    title: "Architecture",
    then: "The early construction period established the tower's distinctive form and architectural character.",
    now: "Visitors can observe its stonework, carved details, and architectural features in person.",
  },
  {
    number: "03",
    title: "Preservation",
    then: "The historical illustration represents an interpretation of how the monument may have appeared during its earlier period.",
    now: "Conservation efforts help protect the monument and its historic fabric for future generations.",
  },
];

export default function ThenVsNowPage() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeVersion, setActiveVersion] = useState<Version>("then");

  const selectedTitle =
    activeVersion === "then"
      ? "Qutub Minar in its Early Centuries"
      : "Qutub Minar Today";

  const selectedDescription =
    activeVersion === "then"
      ? "Qutub Minar's construction began around 1199 under Qutb-ud-Din Aibak and was continued by Iltutmish. Its early history reflects the development of Indo-Islamic architecture in Delhi."
      : "Today, Qutub Minar stands in Mehrauli, Delhi, as a UNESCO World Heritage Site. Its present appearance reflects centuries of construction, weathering, and conservation.";

  return (
    <main className="min-h-screen bg-[#0E1117] text-[#F9F6F0]">
      {/* NAVBAR */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-xl font-bold tracking-[0.2em] text-[#D4AF37]"
          >
            RETROSCAPE
          </Link>

          <div className="flex gap-5 text-sm text-white/70 sm:gap-8">
            <Link href="/" className="transition hover:text-[#D4AF37]">
              Home
            </Link>
            <Link
              href="/monuments"
              className="transition hover:text-[#D4AF37]"
            >
              Monuments
            </Link>
            <Link
              href="/explore"
              className="transition hover:text-[#D4AF37]"
            >
              Explore
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-16 sm:pt-24">
        <p className="text-xs font-semibold tracking-[0.35em] text-[#D4AF37]">
          EXPERIENCE HISTORY DIFFERENTLY
        </p>

        <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight sm:text-6xl">
          Then <span className="text-[#D4AF37]">vs</span> Now
        </h1>

        <p className="mt-6 max-w-2xl leading-8 text-white/60">
          One monument. Different periods in time. Explore the story of
          Qutub Minar through a visual comparison and discover how its
          history connects to the present.
        </p>
      </section>

      {/* INTERACTIVE COMPARISON SLIDER */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="relative isolate aspect-[4/5] max-h-[680px] overflow-hidden rounded-2xl border border-[#D4AF37]/30 bg-[#151922] sm:aspect-[16/10]">
          {/* Historical image: base layer */}
          <img
            src="/images/qutub-then.png"
            alt="Historical illustration of Qutub Minar"
            draggable={false}
            className="absolute inset-0 h-full w-full select-none object-cover"
          />

          {/* Present-day image revealed from the left */}
          <div
            className="absolute inset-0 z-10 overflow-hidden"
            style={{
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            }}
          >
            <img
              src="/images/qutub-now.jpg"
              alt="Present-day photograph of Qutub Minar"
              draggable={false}
              className="absolute inset-0 h-full w-full max-w-none select-none object-cover"
            />
          </div>

          {/* Image overlay */}
          <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

          <span className="pointer-events-none absolute left-4 top-4 z-30 rounded-full border border-white/30 bg-black/60 px-3 py-2 text-xs tracking-widest sm:left-6 sm:top-6 sm:px-4">
            NOW · PRESENT DAY
          </span>

          <span className="pointer-events-none absolute bottom-20 right-4 z-30 rounded-full border border-[#D4AF37]/60 bg-black/60 px-3 py-2 text-xs tracking-widest text-[#D4AF37] sm:bottom-24 sm:right-6 sm:px-4">
            THEN · HISTORICAL
          </span>

          {/* Slider divider */}
          <div
            className="pointer-events-none absolute bottom-0 top-0 z-40 w-0.5 bg-[#D4AF37]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#D4AF37] bg-[#0E1117] text-lg text-[#D4AF37] shadow-xl">
              ↔
            </div>
          </div>

          {/* Accessible range control */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={(event) =>
              setSliderPosition(Number(event.target.value))
            }
            aria-label="Compare historical and present-day images"
            className="absolute inset-0 z-50 h-full w-full cursor-ew-resize opacity-0"
          />

          <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-30 p-5 text-center sm:p-7">
            <p className="text-sm text-white/90">
              ← Drag to travel through time →
            </p>
          </div>
        </div>

        {/* Slider buttons */}
        <div className="mt-6 flex items-center justify-between gap-3">
          <button
            onClick={() => setSliderPosition(0)}
            className="rounded-full border border-white/15 px-4 py-3 text-sm transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
          >
            Show Then
          </button>

          <span className="text-sm tabular-nums text-[#D4AF37]">
            {sliderPosition}%
          </span>

          <button
            onClick={() => setSliderPosition(100)}
            className="rounded-full border border-white/15 px-4 py-3 text-sm transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
          >
            Show Now
          </button>
        </div>

        <p className="mt-5 text-center text-xs leading-6 text-white/40">
          The historical view is an illustration, not a verified photograph
          of the past.
        </p>
      </section>

      {/* HISTORICAL INFORMATION */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs tracking-[0.3em] text-[#D4AF37]">
              THE STORY BEHIND THE STONE
            </p>

            <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-5xl">
              {selectedTitle}
            </h2>

            <p className="mt-6 leading-8 text-white/60">
              {selectedDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => setActiveVersion("then")}
                className={`rounded-full border px-5 py-3 text-sm transition ${
                  activeVersion === "then"
                    ? "border-[#D4AF37] bg-[#D4AF37] text-black"
                    : "border-white/15 text-white/70 hover:border-[#D4AF37]"
                }`}
              >
                Explore Then
              </button>

              <button
                onClick={() => setActiveVersion("now")}
                className={`rounded-full border px-5 py-3 text-sm transition ${
                  activeVersion === "now"
                    ? "border-[#D4AF37] bg-[#D4AF37] text-black"
                    : "border-white/15 text-white/70 hover:border-[#D4AF37]"
                }`}
              >
                Explore Now
              </button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {historicalFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-xl border border-white/10 bg-[#151922] p-5 transition hover:border-[#D4AF37]/40"
              >
                <p className="text-xs tracking-[0.2em] text-[#D4AF37]">
                  {fact.label}
                </p>
                <p className="mt-3 font-serif text-xl">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT CHANGED OVER TIME */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <p className="text-xs tracking-[0.3em] text-[#D4AF37]">
          A JOURNEY THROUGH TIME
        </p>

        <h2 className="mt-4 font-serif text-3xl sm:text-5xl">
          What Changed Over Time?
        </h2>

        <p className="mt-5 max-w-2xl leading-7 text-white/55">
          Explore the construction, architecture, and preservation of
          Qutub Minar from its historical beginnings to its present-day role.
        </p>

        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {changes.map((item) => (
            <article
              key={item.number}
              className="rounded-2xl border border-white/10 bg-[#151922] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/50"
            >
              <p className="text-sm tracking-widest text-[#D4AF37]">
                {item.number}
              </p>

              <h3 className="mt-4 font-serif text-2xl">{item.title}</h3>

              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-xs tracking-widest text-white/40">THEN</p>
                <p className="mt-2 text-sm leading-7 text-white/60">
                  {item.then}
                </p>
              </div>

              <div className="mt-5 border-t border-white/10 pt-5">
                <p className="text-xs tracking-widest text-[#D4AF37]">NOW</p>
                <p className="mt-2 text-sm leading-7 text-white/60">
                  {item.now}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MONUMENT FACTS */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-2xl border border-[#D4AF37]/20 bg-gradient-to-br from-[#191D25] to-[#0E1117] p-7 sm:p-10">
          <p className="text-xs tracking-[0.3em] text-[#D4AF37]">
            MONUMENT DOSSIER
          </p>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
            Qutub Minar at a Glance
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-sm text-white/40">LOCATION</p>
              <p className="mt-2 text-lg">Mehrauli, Delhi</p>
            </div>

            <div>
              <p className="text-sm text-white/40">CONSTRUCTION BEGAN</p>
              <p className="mt-2 text-lg">Around 1199 CE</p>
            </div>

            <div>
              <p className="text-sm text-white/40">UNESCO RECOGNITION</p>
              <p className="mt-2 text-lg">1993</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-white/40 sm:flex-row">
          <p>RETROSCAPE · Experience history beyond the timeline.</p>

          <Link
            href="/explore"
            className="text-[#D4AF37] transition hover:text-white"
          >
            Back to Explore ↗
          </Link>
        </div>
      </footer>
    </main>
  );
}
