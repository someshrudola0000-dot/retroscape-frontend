
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

const features = [
  {
    number: "01",
    icon: "🏛",
    title: "Discover Heritage",
    description:
      "Explore India's remarkable monuments and uncover the stories hidden within their walls.",
    label: "EXPLORE MONUMENTS",
    href: "/monuments",
  },
  {
    number: "02",
    icon: "⌛",
    title: "Travel Through Time",
    description:
      "Journey across centuries and discover how India's historic monuments have changed over time.",
    label: "HISTORY REIMAGINED",
    href: "/explore/then-vs-now",
  },
  {
    number: "03",
    icon: "✧",
    title: "Experience History",
    description:
      "Explore heritage through immersive experiences and discover the possibilities of 3D and augmented reality.",
    label: "A NEW PERSPECTIVE",
    href: "/explore",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;

      const rect = hero.getBoundingClientRect();

      hero.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
      hero.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
    };

    hero.addEventListener("pointermove", handleMouseMove);

    return () => {
      hero.removeEventListener("pointermove", handleMouseMove);
    };
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#0A0D12] text-[#F9F6F0] selection:bg-[#D4AF37] selection:text-[#0A0D12]">
      {/* Ambient Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-[20%] left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#D4AF37]/15 to-transparent blur-[140px]" />
        <div className="absolute top-[40%] -left-[10%] h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[160px]" />
      </div>

      {/* Navbar */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0A0D12]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10 md:py-5">
          <Link
            href="/"
            aria-label="RetroScape home"
            className="group flex items-center text-2xl font-semibold tracking-wide"
          >
            <span className="text-[#F9F6F0] transition-colors group-hover:text-[#D4AF37]">
              Retro
            </span>
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] bg-clip-text text-transparent">
              Scape
            </span>
            <span className="text-[#D4AF37]">.</span>
          </Link>

          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/"
              aria-current="page"
              className="hidden text-sm text-[#D4AF37] sm:block"
            >
              Home
            </Link>

            <Link
              href="/monuments"
              className="text-sm text-white/75 transition-colors hover:text-[#D4AF37]"
            >
              Monuments
            </Link>

            <Link
              href="/explore"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E8CA62] px-4 py-2.5 text-sm font-semibold text-[#0E1117] shadow-[0_0_20px_rgba(212,175,55,0.3)] transition duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] sm:px-5"
            >
              Explore
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative isolate flex min-h-[85vh] items-center overflow-hidden pt-24 md:min-h-[92vh]"
        style={
          {
            "--mouse-x": "50%",
            "--mouse-y": "50%",
          } as React.CSSProperties
        }
      >
        <div className="absolute inset-0 -z-20">
          <Image
            src="/hero-fort.png"
            alt="Historic Indian fort illuminated by warm evening light"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_35%] transition-transform duration-[12000ms] ease-out motion-safe:hover:scale-110"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0A0D12] via-[#0A0D12]/80 to-[#0A0D12]/20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0A0D12] via-[#0A0D12]/25 to-black/60" />

        {/* Cursor-following golden glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 hidden md:block"
          style={{
            background:
              "radial-gradient(350px circle at var(--mouse-x) var(--mouse-y), rgba(212,175,55,0.10), transparent 70%)",
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-[#D4AF37]/20 blur-[140px] md:h-[500px] md:w-[500px]"
        />

        <div className="mx-auto w-full max-w-7xl px-5 py-24 md:px-10 md:py-32">
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/40 bg-black/50 px-4 py-2.5 shadow-[0_0_20px_rgba(212,175,55,0.15)] backdrop-blur-md">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full motion-safe:animate-[blackGoldBlink_1s_steps(1,end)_infinite]"
              />

              <span className="text-[10px] font-medium tracking-[0.2em] text-[#E8D59A] sm:text-xs sm:tracking-[0.25em]">
                HISTORY · TECHNOLOGY · DISCOVERY
              </span>
            </div>

            <h1 className="font-serif text-5xl font-light leading-[1.12] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              The past is
              <br />
              <span className="bg-gradient-to-r from-[#F9F6F0] via-[#D4AF37] to-[#E8CA62] bg-clip-text italic text-transparent drop-shadow-[0_0_25px_rgba(212,175,55,0.3)]">
                never
              </span>{" "}
              far away.
            </h1>

            <p className="mt-7 max-w-xl text-base font-light leading-8 text-white/85 sm:text-lg">
              Journey through India&apos;s legendary monuments. Discover
              forgotten stories, explore the passage of time, and experience
              history beyond the pages of a book.
            </p>

            {/* Hero Buttons: Monuments, 3D and AR */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/monuments"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E8CA62] px-6 py-4 text-sm font-semibold text-[#0E1117] shadow-[0_0_25px_rgba(212,175,55,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] sm:px-7"
              >
                Explore Monuments
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1.5"
                >
                  →
                </span>
              </Link>

              <Link
                href="/explore/3d"
                className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/70 bg-black/40 px-6 py-4 text-sm text-[#E8D59A] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-[#D4AF37]/15"
              >
                <span aria-hidden="true">◇</span>
                Explore in 3D
              </Link>

              <Link
                href="/explore/ar"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/40 px-6 py-4 text-sm text-white/90 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/80 hover:text-[#D4AF37]"
              >
                <span aria-hidden="true">⌖</span>
                View in AR
              </Link>

              <a
                href="#discover"
                className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-black/40 px-6 py-4 text-sm text-white/90 backdrop-blur-xl transition duration-300 hover:border-[#D4AF37]/80 hover:bg-white/10 hover:text-[#D4AF37]"
              >
                Discover RetroScape
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div className="mt-12 border-l-2 border-[#D4AF37]/80 pl-4">
              <p className="max-w-sm text-xs leading-6 text-white/65 sm:text-sm">
                Every monument holds a story.
                <span className="block font-medium text-white/90">
                  Let&apos;s bring those stories to life.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 right-6 hidden items-center gap-3 text-[10px] tracking-[0.25em] text-white/60 md:flex md:right-10">
          <span className="h-px w-10 bg-[#D4AF37]/80" />
          INDIA · A JOURNEY THROUGH TIME
        </div>
      </section>

      {/* Introduction */}
      <section
        id="discover"
        className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-20 md:px-10 md:py-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[120px]"
        />

        <div className="relative grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-end md:gap-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-[#D4AF37] sm:tracking-[0.3em]">
              A DIFFERENT WAY TO DISCOVER
            </p>

            <h2 className="mt-5 font-serif text-4xl font-light leading-tight sm:text-5xl md:text-6xl">
              History deserves
              <br />
              to be <span className="italic text-[#D4AF37]">experienced.</span>
            </h2>
          </div>

          <p className="max-w-xl font-light leading-8 text-white/65 md:justify-self-end md:text-base">
            RetroScape brings heritage and technology together, creating a
            space to explore India&apos;s historic places, understand their
            past, and discover new ways to experience their legacy.
          </p>
        </div>

        {/* Clickable Feature Cards */}
        <div className="relative mt-14 grid gap-5 md:mt-16 md:grid-cols-3">
          {features.map((feature) => (
            <Link
              key={feature.number}
              href={feature.href}
              className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#191F28] to-[#11151C] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/60 hover:shadow-[0_20px_55px_rgba(212,175,55,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0A0D12] md:p-8"
            >
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#D4AF37]/0 blur-3xl transition duration-500 group-hover:bg-[#D4AF37]/25"
              />

              <div className="relative flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-2xl text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.15)] transition duration-300 group-hover:border-[#D4AF37]/80 group-hover:bg-[#D4AF37]/20">
                  {feature.icon}
                </div>

                <span className="font-serif text-lg text-white/25 transition-colors group-hover:text-[#D4AF37]">
                  {feature.number}
                </span>
              </div>

              <h3 className="relative mt-8 font-serif text-2xl font-medium">
                {feature.title}
              </h3>

              <p className="relative mt-3 flex-1 text-sm leading-7 text-white/60">
                {feature.description}
              </p>

              <div className="relative mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-[9px] font-semibold tracking-[0.2em] text-[#D4AF37]/80">
                  {feature.label}
                </span>
                <span
                  aria-hidden="true"
                  className="text-lg text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1.5"
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-5 pb-20 md:px-10 md:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#202019] via-[#151914] to-[#10141B] px-6 py-14 text-center shadow-[0_0_50px_rgba(0,0,0,0.4)] sm:px-12 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#D4AF37]/15 blur-[100px]"
          />

          <div className="relative z-10">
            <p className="text-xs font-semibold tracking-[0.25em] text-[#D4AF37] sm:tracking-[0.3em]">
              YOUR JOURNEY STARTS HERE
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-light leading-tight sm:text-5xl md:text-6xl">
              Discover the stories
              <br />
              <span className="italic text-[#D4AF37]">
                time left behind.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/60 md:text-base">
              Begin your journey through India&apos;s rich architectural and
              cultural heritage.
            </p>

            <Link
              href="/monuments"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-7 py-4 text-sm font-semibold text-[#E8D59A] backdrop-blur-md transition duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0E1117] hover:shadow-[0_0_35px_rgba(212,175,55,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-4 focus-visible:ring-offset-[#10141B]"
            >
              Begin Exploring
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#070A0F]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between md:px-10">
          <Link href="/" className="text-xl font-semibold">
            Retro<span className="text-[#D4AF37]">Scape.</span>
          </Link>

          <p className="text-xs leading-6 text-white/40">
            Discover the past. Experience history.
          </p>

          <Link
            href="/monuments"
            className="text-sm text-white/60 transition-colors hover:text-[#D4AF37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            Explore Monuments →
          </Link>
        </div>
      </footer>
    </main>
  );
}
