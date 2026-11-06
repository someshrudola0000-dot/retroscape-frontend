
"use client";

import { useState } from "react";
import Link from "next/link";

const monuments = [
  {
    title: "Qutub Minar",
    location: "Delhi, India",
    era: "Medieval India",
    category: "ARCHITECTURE",
    description:
      "Discover the story, craftsmanship and heritage of this iconic monument.",
    href: "/monuments/qutub-minar",
    image:
      "https://cdnbbsr.s3waas.gov.in/s323d2e1578544b172cca332ff74bddf5f/uploads/2019/04/2019040486.jpg",
    imageAlt: "Qutub Minar and its historic complex in Delhi",
    featured: true,
  },
  {
    title: "Historic Architecture",
    location: "India",
    era: "Various periods",
    category: "HERITAGE",
    description:
      "Explore the architectural traditions that shaped India's history.",
    href: null,
    image:
      "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Historic Indian architecture",
    featured: false,
  },
  {
    title: "Ancient Wonders",
    location: "India",
    era: "Ancient history",
    category: "ANCIENT INDIA",
    description:
      "Discover the stories and ideas preserved in historic places.",
    href: null,
    image:
      "https://images.unsplash.com/photo-1600100397608-f010d9d4b0a8?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Historic stone architecture",
    featured: false,
  },
];

export default function MonumentsPage() {
  const [search, setSearch] = useState("");

  const filteredMonuments = monuments.filter((monument) =>
    `${monument.title} ${monument.location} ${monument.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#0E1117] px-6 py-14 text-[#F9F6F0] md:px-12 md:py-20">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] transition hover:text-[#F0D77D]"
        >
          ← RETROSCAPE
        </Link>
        <div className="mt-6 flex items-center gap-6 border-b border-white/10 pb-5">
  <Link
    href="/"
    className="text-sm text-white/70 transition hover:text-[#D4AF37]"
  >
    Home
  </Link>

  <Link
    href="/monuments"
    className="text-sm text-[#D4AF37]"
  >
    Monuments
  </Link>

  <Link
    href="/explore"
    className="text-sm text-white/70 transition hover:text-[#D4AF37]"
  >
    Explore →
  </Link>
</div>

        <div className="mt-12 flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
              Discover our heritage
            </p>

            <h1 className="mt-4 font-serif text-5xl sm:text-6xl md:text-7xl">
              Places that
              <br />
              <span className="italic text-[#D4AF37]">tell stories.</span>
            </h1>

            <p className="mt-5 max-w-xl leading-7 text-white/55">
              Explore India's remarkable monuments, discover their past,
              and experience history from a new perspective.
            </p>
          </div>

          <div className="w-full md:max-w-sm">
            <label
              htmlFor="monument-search"
              className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/45"
            >
              Find a monument
            </label>

            <input
              id="monument-search"
              type="search"
              placeholder="Search by name or location..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full border border-white/15 bg-white/[0.04] px-5 py-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#D4AF37]/70"
            />
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-y border-white/10 py-4">
          <p className="text-xs uppercase tracking-[0.2em] text-white/45">
            The heritage collection
          </p>

          <p className="text-sm text-[#D4AF37]">
            {filteredMonuments.length.toString().padStart(2, "0")} entries
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredMonuments.map((monument) => (
            <article
              key={monument.title}
              className="group overflow-hidden border border-white/10 bg-[#14171C] transition duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/50 hover:shadow-[0_15px_50px_rgba(0,0,0,0.3)]"
            >
              <div className="relative h-72 overflow-hidden bg-[#24221D]">
                <img
                  src={monument.image}
                  alt={monument.imageAlt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1117] via-[#0E1117]/20 to-black/20" />

                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent opacity-70" />

                <span className="absolute left-5 top-5 border border-white/30 bg-black/40 px-3 py-2 text-[10px] tracking-[0.2em] text-white backdrop-blur-md">
                  {monument.category}
                </span>

                <span className="absolute right-5 top-5 text-xs tracking-[0.2em] text-white/80">
                  0{monuments.indexOf(monument) + 1}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#E7C96B]">
                    {monument.era}
                  </p>

                  <h2 className="mt-2 font-serif text-3xl text-white sm:text-4xl">
                    {monument.title}
                  </h2>
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.15em] text-white/45">
                  {monument.location}
                </p>

                <p className="mt-4 min-h-14 text-sm leading-7 text-white/65">
                  {monument.description}
                </p>

                {monument.featured && monument.href ? (
                  <Link
                    href={monument.href}
                    className="mt-6 flex items-center justify-between border-t border-white/10 pt-5 text-sm text-[#D4AF37] transition hover:text-[#F0D77D]"
                  >
                    Explore monument
                    <span className="transition duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                ) : (
                  <div className="mt-6 border-t border-white/10 pt-5 text-xs tracking-wide text-white/35">
                    More heritage stories coming soon
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {filteredMonuments.length === 0 && (
          <div className="py-20 text-center">
            <p className="font-serif text-3xl">No stories found.</p>
            <p className="mt-3 text-sm text-white/45">
              Try another monument name or location.
            </p>
          </div>
        )}

        <footer className="mt-20 border-t border-white/10 py-7 text-xs tracking-wide text-white/35">
          RETROSCAPE — Preserving the past. Exploring new perspectives.
        </footer>
      </div>
    </main>
  );
}
