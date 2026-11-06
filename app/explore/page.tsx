
import Link from "next/link";

const experiences = [
  {
    number: "01",
    title: "Historical Timeline",
    description:
      "Travel through centuries and discover how India's iconic monuments evolved over time.",
    label: "DISCOVER THE PAST",
    icon: "⌛",
  },
  {
    number: "02",
    title: "Then vs Now",
    description:
      "Compare historical heritage with its present-day appearance and uncover its transformation.",
    label: "PAST MEETS PRESENT",
    icon: "◐",
  },
  {
    number: "03",
    title: "Explore in 3D",
    description:
      "Get ready to experience historical architecture through immersive three-dimensional models.",
    label: "IMMERSIVE EXPERIENCE",
    icon: "◇",
  },
];

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-[#0A0D12] text-[#F9F6F0]">
      <nav className="flex items-center justify-between border-b border-white/10 px-6 py-5 md:px-12">
        <Link href="/" className="text-2xl font-bold tracking-wide text-[#D4AF37]">
          RetroScape<span className="text-white">.</span>
        </Link>

        <div className="flex gap-5 text-sm text-white/70 md:gap-8">
          <Link href="/" className="transition hover:text-[#D4AF37]">
            Home
          </Link>
          <Link href="/monuments" className="transition hover:text-[#D4AF37]">
            Monuments
          </Link>
          <Link href="/explore" className="text-[#D4AF37]">
            Explore
          </Link>
        </div>
      </nav>

      <section className="relative overflow-hidden px-6 py-24 md:px-12 md:py-32">
        <div className="pointer-events-none absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mb-6 text-xs font-semibold tracking-[0.4em] text-[#D4AF37]">
            HISTORY • HERITAGE • DISCOVERY
          </p>

          <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
            History is not
            <br />
            <span className="text-[#D4AF37]">just the past.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            Step beyond the ordinary. Discover the stories, transformations,
            and architecture that have shaped India's incredible heritage.
          </p>

          <Link
            href="/monuments"
            className="mt-9 inline-flex rounded-sm border border-[#D4AF37] bg-[#D4AF37] px-7 py-4 text-sm font-semibold text-[#0A0D12] transition hover:bg-transparent hover:text-[#D4AF37]"
          >
            Discover Monuments ↗
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-12">
        <div className="mb-10">
          <p className="mb-3 text-xs tracking-[0.3em] text-[#D4AF37]">
            YOUR JOURNEY BEGINS HERE
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Explore history, your way.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-white/50">
            Choose an experience and see heritage from a completely new
            perspective.
          </p>
        </div>

        
<div className="grid gap-5 md:grid-cols-3">
  {experiences.map((item) => (
    <Link
      key={item.number}
      href={
        item.title === "Then vs Now"
          ? "/explore/then-vs-now"
          : item.title === "Historical Timeline"
            ? "/explore/timeline"
            : "/explore/3d"
      }
      className="group relative block overflow-hidden border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/60 hover:bg-white/[0.06] md:p-8"
    >
      <div className="mb-12 flex items-center justify-between">
        <span className="text-xs tracking-[0.2em] text-[#D4AF37]">
          {item.number} / 03
        </span>
        <span className="text-3xl text-[#D4AF37] transition duration-300 group-hover:scale-110">
          {item.icon}
        </span>
      </div>

      <p className="mb-3 text-[10px] tracking-[0.2em] text-white/40">
        {item.label}
      </p>

      <h3 className="text-2xl font-semibold">{item.title}</h3>

      <p className="mt-4 min-h-20 text-sm leading-7 text-white/55">
        {item.description}
      </p>

      <div className="mt-7 h-px w-full bg-white/10 transition group-hover:bg-[#D4AF37]/50" />

      <p className="mt-5 text-xs text-[#D4AF37]">
        EXPLORE EXPERIENCE ↗
      </p>
    </Link>
  ))}
</div>


        <div className="mt-16 border border-[#D4AF37]/20 bg-gradient-to-r from-[#D4AF37]/10 to-transparent p-8 md:p-12">
          <p className="text-xs tracking-[0.3em] text-[#D4AF37]">
            EVERY MONUMENT HAS A STORY
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            The past is waiting to be explored.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
            Begin your journey through India's architectural and cultural
            heritage with RetroScape.
          </p>
          <Link
            href="/monuments"
            className="mt-7 inline-block border border-[#D4AF37]/60 px-6 py-3 text-sm transition hover:bg-[#D4AF37] hover:text-[#0A0D12]"
          >
            View All Monuments →
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-7 text-center text-xs text-white/40">
        © 2026 RetroScape · Discover history beyond time.
      </footer>
    </main>
  );
}
