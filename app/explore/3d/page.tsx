
"use client";

import Link from "next/link";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Bounds,
  Center,
  OrbitControls,
  useGLTF,
  useProgress,
} from "@react-three/drei";

function QutubMinarModel() {
  const { scene } = useGLTF("/models/new-qutub-minar.glb");

  return <primitive object={scene} />;
}

function LoadingScreen() {
  const { active, progress } = useProgress();

  if (!active) return null;

  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#101010]">
      <div className="mb-4 h-2 w-48 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-[#d4af70] transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-sm text-[#d4af70]">
        Loading Qutub Minar... {Math.round(progress)}%
      </p>
    </div>
  );
}

export default function ThreeDPage() {
  const [viewerKey, setViewerKey] = useState(0);

  const resetView = () => {
    setViewerKey((current) => current + 1);
  };

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

      <section className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
        <p className="mb-4 text-xs tracking-[0.35em] text-[#d4af70]">
          IMMERSIVE HERITAGE
        </p>

        <h1 className="mb-6 text-4xl font-light md:text-6xl">
          Experience History
          <span className="mt-2 block font-semibold text-[#d4af70]">
            in Three Dimensions
          </span>
        </h1>

        <p className="mb-10 max-w-2xl leading-8 text-white/60">
          Discover the architecture of Qutub Minar through RetroScape and
          explore its present-day 3D structure.
        </p>

        {/* 3D Viewer */}
        <div className="overflow-hidden rounded-2xl border border-[#d4af70]/25 bg-[#101010]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
            <div>
              <p className="text-sm font-medium">Qutub Minar</p>
              <p className="mt-1 text-xs text-white/40">
                3D Exploration Studio · Present Day
              </p>
            </div>

            <span className="rounded-full border border-green-400/20 bg-green-400/5 px-3 py-1.5 text-[10px] tracking-widest text-green-400">
              3D VIEWER
            </span>
          </div>

          <div className="relative h-[400px] w-full md:h-[550px]">
            <LoadingScreen />

            <Canvas
              key={viewerKey}
              camera={{ position: [0, 2, 8], fov: 45 }}
              dpr={[1, 1.5]}
            >
              <color attach="background" args={["#101010"]} />

              <ambientLight intensity={1.5} />
              <directionalLight position={[5, 8, 5]} intensity={2} />
              <directionalLight position={[-5, 3, -5]} intensity={1} />

              <Suspense fallback={null}>
                <Bounds fit clip observe margin={1.3}>
                  <Center>
                    <QutubMinarModel />
                  </Center>
                </Bounds>
              </Suspense>

              <OrbitControls
                makeDefault
                enableDamping
                minDistance={2}
                maxDistance={30}
              />
            </Canvas>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 px-5 py-4">
            <p className="text-xs text-white/50">
              Drag to rotate · Scroll to zoom
            </p>

            <button
              onClick={resetView}
              className="rounded-full border border-[#d4af70]/50 px-5 py-2 text-xs text-[#d4af70] transition hover:bg-[#d4af70] hover:text-black"
            >
              ↻ Reset View
            </button>
          </div>
        </div>

        {/* Monument Overview */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-[#101010] p-6 md:p-8">
          <p className="mb-3 text-xs tracking-[0.3em] text-[#d4af70]">
            MONUMENT OVERVIEW
          </p>

          <h2 className="mb-4 text-2xl font-light md:text-3xl">
            Discover <span className="font-semibold text-[#d4af70]">Qutub Minar</span>
          </h2>

          <p className="max-w-3xl text-sm leading-7 text-white/60">
            Qutub Minar is a historic minaret located in Delhi, India.
            Construction began in the early 13th century. It is part of the
            Qutb Minar and its Monuments complex, a UNESCO World Heritage Site.
          </p>

          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 p-4">
              <p className="text-xs text-white/40">LOCATION</p>
              <p className="mt-2 text-sm text-[#d4af70]">Delhi, India</p>
            </div>

            <div className="rounded-xl border border-white/10 p-4">
              <p className="text-xs text-white/40">PERIOD</p>
              <p className="mt-2 text-sm text-[#d4af70]">Early 13th Century</p>
            </div>

            <div className="rounded-xl border border-white/10 p-4">
              <p className="text-xs text-white/40">RECOGNITION</p>
              <p className="mt-2 text-sm text-[#d4af70]">UNESCO World Heritage</p>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 p-6 transition hover:border-[#d4af70]/40">
            <p className="mb-3 text-xs tracking-widest text-[#d4af70]">
              01 · 3D EXPLORATION
            </p>

            <h3 className="mb-2 text-lg">Explore the Architecture</h3>

            <p className="text-sm leading-6 text-white/50">
              Rotate and zoom the Qutub Minar model to explore its architecture.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 p-6 transition hover:border-[#d4af70]/40">
            <p className="mb-3 text-xs tracking-widest text-[#d4af70]">
              02 · AUGMENTED REALITY
            </p>

            <h3 className="mb-2 text-lg">View in Your Space</h3>

            <p className="text-sm leading-6 text-white/50">
              Experience the monument in your surroundings through AR on a
              supported device.
            </p>

            <Link
              href="/explore/ar"
              className="mt-4 inline-block text-sm text-[#d4af70] hover:text-white"
            >
              Explore AR →
            </Link>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
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
            Compare Then vs Now →
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-7 text-center text-xs tracking-widest text-white/35">
        RETROSCAPE · HISTORY REIMAGINED
      </footer>
    </main>
  );
}
