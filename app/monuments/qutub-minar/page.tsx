
"use client";

import { useState } from "react";
import Link from "next/link";

const timelineEvents = [
  {
    year: "1199",
    label: "Construction begins",
    title: "The beginning of Qutub Minar",
    description:
      "Qutb-ud-Din Aibak initiated the construction of Qutub Minar in Delhi. The monument was conceived as a monumental tower associated with the early Delhi Sultanate.",
    tag: "FOUNDATION",
  },
  {
    year: "Early 13th century",
    label: "Further construction",
    title: "Iltutmish continues the work",
    description:
      "Iltutmish, successor to Aibak, added further storeys to the tower. The structure developed into one of the most distinctive examples of early Indo-Islamic architecture.",
    tag: "EXPANSION",
  },
  {
    year: "14th century",
    label: "Repairs and restoration",
    title: "The monument evolves",
    description:
      "Lightning damage and other structural challenges led to repairs during the following centuries. These interventions became part of the monument's long architectural history.",
    tag: "RESTORATION",
  },
  {
    year: "1993",
    label: "World Heritage status",
    title: "Recognized by UNESCO",
    description:
      "The Qutb Minar and its Monuments complex was inscribed on the UNESCO World Heritage List, recognizing its cultural and historical significance.",
    tag: "WORLD HERITAGE",
  },
];

const facts = [
  { label: "LOCATION", value: "Mehrauli, Delhi" },
  { label: "ARCHITECTURAL STYLE", value: "Indo-Islamic" },
  { label: "MONUMENT TYPE", value: "Minaret" },
  { label: "UNESCO STATUS", value: "World Heritage Site" },
];

export default function QutubMinarPage() {
  const [selectedEvent, setSelectedEvent] = useState(0);
  const [saved, setSaved] = useState(false);
  const [showAllHistory, setShowAllHistory] = useState(false);

  const activeEvent = timelineEvents[selectedEvent];

  return (
    <main className="min-h-screen bg-[#0E1117] text-[#F9F6F0]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0E1117]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link
            href="/"
            className="text-2xl font-semibold tracking-wide text-[#D4AF37]"
          >
            RetroScape<span className="text-white">.</span>
          </Link>

          <div className="flex items-center gap-5 text-sm text-white/70">
            <Link
              href="/monuments"
              className="transition hover:text-[#D4AF37]"
            >
              Monuments
            </Link>
            <button
              onClick={() => setSaved(!saved)}
              className={`rounded-full border px-4 py-2 transition ${
                saved
                  ? "border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]"
                  : "border-white/20 hover:border-[#D4AF37] hover:text-[#D4AF37]"
              }`}
            >
              {saved ? "★ Saved" : "☆ Save"}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-[560px] items-end overflow-hidden md:min-h-[680px]">
        <img
          src="https://cdnbbsr.s3waas.gov.in/s323d2e1578544b172cca332ff74bddf5f/uploads/2019/04/2019040486.jpg"
          alt="Qutub Minar rising above the historic complex in Delhi"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0E1117] via-[#0E1117]/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1117] via-transparent to-[#0E1117]/20" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-28 md:px-8 md:pb-24">
          <p className="mb-5 text-xs font-semibold tracking-[0.35em] text-[#D4AF37]">
            MONUMENT DOSSIER · 01
          </p>

          <h1 className="max-w-3xl text-5xl font-light leading-tight tracking-tight md:text-7xl">
            Qutub
            <br />
            <span className="font-serif italic text-[#D4AF37]">Minar</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/75 md:text-lg">
            A soaring landmark of medieval Delhi, where intricate stonework
            and centuries of history tell the story of an evolving city.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#timeline"
              className="rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#0E1117] transition hover:scale-105 hover:bg-[#E6C75A]"
            >
              Explore the timeline ↓
            </a>
            <a
              href="#history"
              className="rounded-full border border-white/30 bg-black/20 px-6 py-3 text-sm transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              Discover its history
            </a>
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="bg-[#131820] p-5 transition hover:bg-[#191F28] md:p-7"
            >
              <p className="text-[10px] font-semibold tracking-[0.2em] text-[#D4AF37]">
                {fact.label}
              </p>
              <p className="mt-3 text-sm leading-6 text-white/90 md:text-base">
                {fact.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* History */}
      <section
        id="history"
        className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-2 md:gap-16 md:px-8 md:py-20"
      >
        <div>
          <p className="text-xs font-semibold tracking-[0.3em] text-[#D4AF37]">
            A STORY IN STONE
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light leading-tight md:text-5xl">
            More than a
            <br />
            <span className="italic text-[#D4AF37]">monument.</span>
          </h2>
        </div>

        <div className="text-sm leading-8 text-white/65 md:text-base">
          <p>
            Qutub Minar is one of Delhi's most recognizable historical
            landmarks. Its tall, tapering form, carved details, and inscriptions
            reflect the artistic traditions of the period in which it was built.
          </p>
          <p className="mt-5">
            The surrounding Qutb complex contains structures from different
            periods, making it a valuable place to explore how architecture
            and power changed over time.
          </p>

          {showAllHistory && (
            <div className="mt-5 space-y-4 border-l border-[#D4AF37]/40 pl-5">
              <p>
                The tower is built primarily of red sandstone, with marble
                used in parts of its upper structure. Its storeys feature
                distinctive projecting balconies and detailed surface carving.
              </p>
              <p>
                Today, the monument is protected and managed as a significant
                heritage site. Its history includes construction, alterations,
                repairs, and conservation.
              </p>
            </div>
          )}

          <button
            onClick={() => setShowAllHistory(!showAllHistory)}
            className="mt-6 border-b border-[#D4AF37]/60 pb-1 text-sm text-[#D4AF37] transition hover:border-[#D4AF37] hover:text-white"
          >
            {showAllHistory ? "Show less ↑" : "Read more about its history →"}
          </button>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section
        id="timeline"
        className="border-y border-white/10 bg-[#11151C] py-16 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#D4AF37]">
              JOURNEY THROUGH TIME
            </p>
            <h2 className="mt-4 font-serif text-4xl font-light md:text-6xl">
              History, <span className="italic text-[#D4AF37]">unfolded.</span>
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/55 md:text-base">
              Select a milestone to explore a chapter in the monument's story.
            </p>
          </div>

          {/* Timeline event selectors */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {timelineEvents.map((event, index) => {
              const isActive = selectedEvent === index;

              return (
                <button
                  key={event.year}
                  onClick={() => setSelectedEvent(index)}
                  aria-pressed={isActive}
                  className={`group rounded-xl border p-5 text-left transition-all duration-300 hover:-translate-y-1 ${
                    isActive
                      ? "border-[#D4AF37] bg-[#D4AF37]/10 shadow-[0_0_30px_rgba(212,175,55,0.08)]"
                      : "border-white/10 bg-[#171C24] hover:border-[#D4AF37]/50"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-xs font-semibold tracking-wide ${
                        isActive ? "text-[#D4AF37]" : "text-white/50"
                      }`}
                    >
                      {event.tag}
                    </span>
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full border text-xs transition ${
                        isActive
                          ? "border-[#D4AF37] bg-[#D4AF37] text-[#0E1117]"
                          : "border-white/20 text-white/50 group-hover:border-[#D4AF37]"
                      }`}
                    >
                      {index + 1}
                    </span>
                  </div>

                  <p
                    className={`mt-6 font-serif text-2xl ${
                      isActive ? "text-[#D4AF37]" : "text-white"
                    }`}
                  >
                    {event.year}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/65">
                    {event.label}
                  </p>

                  <p
                    className={`mt-5 text-xs ${
                      isActive ? "text-[#D4AF37]" : "text-white/35"
                    }`}
                  >
                    {isActive ? "Currently selected ✓" : "Explore milestone →"}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Selected event detail */}
          <div
            key={selectedEvent}
            className="mt-6 grid gap-6 rounded-2xl border border-[#D4AF37]/25 bg-gradient-to-br from-[#1B2028] to-[#12161D] p-6 md:grid-cols-[180px_1fr] md:gap-10 md:p-10"
          >
            <div className="border-b border-white/10 pb-5 md:border-b-0 md:border-r md:pb-0 md:pr-8">
              <p className="text-xs tracking-[0.2em] text-white/40">
                MILESTONE
              </p>
              <p className="mt-3 font-serif text-3xl text-[#D4AF37]">
                {activeEvent.year}
              </p>
              <div className="mt-5 inline-flex rounded-full border border-[#D4AF37]/30 px-3 py-1 text-[10px] tracking-[0.15em] text-[#D4AF37]">
                {activeEvent.tag}
              </div>
            </div>

            <div className="animate-[fadeIn_0.35s_ease-out]">
              <h3 className="font-serif text-2xl md:text-3xl">
                {activeEvent.title}
              </h3>
              <p className="mt-4 max-w-3xl text-sm leading-8 text-white/65 md:text-base">
                {activeEvent.description}
              </p>

              <div className="mt-7 flex items-center gap-3">
                <button
                  disabled={selectedEvent === 0}
                  onClick={() =>
                    setSelectedEvent((current) => current - 1)
                  }
                  className="rounded-full border border-white/15 px-4 py-2 text-sm transition hover:border-[#D4AF37] hover:text-[#D4AF37] disabled:cursor-not-allowed disabled:opacity-30"
                >
                  ← Previous
                </button>
                <button
                  disabled={selectedEvent === timelineEvents.length - 1}
                  onClick={() =>
                    setSelectedEvent((current) => current + 1)
                  }
                  className="rounded-full bg-[#D4AF37] px-4 py-2 text-sm font-semibold text-[#0E1117] transition hover:bg-[#E6C75A] disabled:cursor-not-allowed disabled:opacity-30"
                >
                  Next event →
                </button>
              </div>
            </div>
          </div>

          <p className="mt-5 text-xs leading-6 text-white/35">
            Historical dates are approximate where indicated. This timeline is
            an introductory overview, not a complete archaeological record.
          </p>
        </div>
      </section>

      
      {/* 3D and AR Experience */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#D4AF37]">
            IMMERSIVE EXPERIENCE
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light md:text-5xl">
            Experience history{" "}
            <span className="italic text-[#D4AF37]">your way.</span>
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/55">
            Explore Qutub Minar through interactive 3D technology and
            augmented reality.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-[#D4AF37]/25 bg-[#131820] p-7 transition hover:border-[#D4AF37]/60 md:p-9">
            <p className="text-xs tracking-[0.25em] text-[#D4AF37]">
              01 · 3D EXPLORATION
            </p>
            <h3 className="mt-5 font-serif text-3xl">
              Explore in Three Dimensions
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/55">
              Rotate, zoom and explore the architecture of Qutub Minar
              using our interactive 3D model.
            </p>
            <Link
              href="/explore/3d"
              className="mt-7 inline-flex rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#0E1117] transition hover:bg-[#E6C75A]"
            >
              Explore in 3D →
            </Link>
          </div>

          <div className="rounded-2xl border border-[#D4AF37]/25 bg-[#131820] p-7 transition hover:border-[#D4AF37]/60 md:p-9">
            <p className="text-xs tracking-[0.25em] text-[#D4AF37]">
              02 · AUGMENTED REALITY
            </p>
            <h3 className="mt-5 font-serif text-3xl">
              Bring History into Your Space
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/55">
              Experience the Qutub Minar model in your surroundings
              using a compatible smartphone.
            </p>
            <Link
              href="/explore/ar"
              className="mt-7 inline-flex rounded-full border border-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#0E1117]"
            >
              View in AR →
            </Link>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t border-white/10 px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="text-xl font-semibold text-[#D4AF37]"
          >
            RetroScape.
          </Link>

          <p className="text-xs leading-6 text-white/40">
            Discover the past. Experience history.
          </p>

          <Link
            href="/monuments"
            className="text-sm text-white/60 transition hover:text-[#D4AF37]"
          >
            ← All monuments
          </Link>
        </div>
      </footer>
    </main>
  );
}
