"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ARPage() {
  useEffect(() => {
    import("@google/model-viewer");
  }, []);

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
          href="/explore/3d"
          className="text-sm text-white/70 hover:text-[#d4af70]"
        >
          ← Back to 3D Viewer
        </Link>
      </nav>

      <section className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <p className="mb-4 text-xs tracking-[0.35em] text-[#d4af70]">
          AUGMENTED REALITY
        </p>

        <h1 className="mb-6 text-4xl font-light md:text-6xl">
          Explore History
          <span className="mt-2 block font-semibold text-[#d4af70]">
            in Your Space
          </span>
        </h1>

        <p className="mb-10 max-w-2xl leading-8 text-white/60">
          Experience the architecture of Qutub Minar in an augmented reality
          environment.
        </p>

        <div className="overflow-hidden rounded-2xl border border-[#d4af70]/25 bg-[#101010]">
          <div className="border-b border-white/10 px-5 py-4">
            <p className="text-sm font-medium">Qutub Minar</p>
            <p className="mt-1 text-xs text-white/40">
              AR Experience · Present Day
            </p>
          </div>

          <div className="flex h-[450px] items-center justify-center md:h-[600px]">
            <model-viewer
              src="/models/new-qutub-minar.glb"
              alt="3D model of Qutub Minar"
              ar
              ar-modes="scene-viewer webxr quick-look"
              camera-controls
              auto-rotate
              shadow-intensity="1"
              exposure="1"
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#101010",
              }}
            >
              <button
                slot="ar-button"
                className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-[#d4af70] px-7 py-3 text-sm font-semibold text-black hover:bg-[#e8c991]"
              >
                View in Your Space
              </button>
            </model-viewer>
          </div>

          <div className="border-t border-white/10 px-5 py-4 text-center text-xs text-white/50">
            Rotate · Zoom · View in Your Space
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-white/10 p-6">
          <h2 className="mb-3 text-lg text-[#d4af70]">
            How to use AR
          </h2>

          <ol className="list-inside list-decimal space-y-2 text-sm leading-7 text-white/60">
            <li>Open this page on a supported Android phone.</li>
            <li>Tap View in Your Space.</li>
            <li>Follow the phone's instructions to place the monument.</li>
          </ol>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-7 text-center text-xs tracking-widest text-white/35">
        RETROSCAPE · HISTORY REIMAGINED
      </footer>
    </main>
  );
}