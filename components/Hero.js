"use client";

import { useState, useEffect } from "react";
import { copy } from "@/lib/copy";

function getTimeLeft() {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  const diff = Math.max(0, midnight - now);
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { hours, minutes, seconds };
}

function pad(n) {
  return String(n).padStart(2, "0");
}

export default function Hero() {
  const { hero } = copy;
  const [isMounted, setIsMounted] = useState(false);
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setIsMounted(true);
    setTime(getTimeLeft());
    const t = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(t);
  }, []);

  const scrollToCta = (e) => {
    e.preventDefault();
    const el = document.getElementById("final-cta-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full bg-brand-greenDark text-brand-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-20 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* Texto */}
        <div className="text-center md:text-left">
          <span className="inline-block text-[12px] md:text-[13px] tracking-wide uppercase font-semibold text-brand-orange bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
            {hero.banner}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] mb-5">
            {hero.headline.line1}
            <br />
            <span className="text-brand-orange">{hero.headline.accent}</span>
          </h1>
          <p className="text-[16px] md:text-[19px] text-brand-cream/85 leading-relaxed mb-6 max-w-xl mx-auto md:mx-0">
            {hero.subheadline}
          </p>

          <a
            href="#final-cta-section"
            onClick={scrollToCta}
            className="inline-block bg-brand-orange hover:brightness-110 text-white font-bold text-[17px] md:text-[19px] px-8 py-4 md:px-10 md:py-5 rounded-xl shadow-xl transition cursor-pointer"
          >
            {hero.cta}
          </a>
          <p className="text-[14px] text-brand-cream/70 mt-4">{hero.priceNote}</p>

          {/* Timer */}
          <div className="mt-8 inline-flex flex-col items-center md:items-start">
            <span className="text-[12px] uppercase tracking-wide text-brand-cream/60 mb-2">
              {hero.timerHeading}
            </span>
            <div className="flex gap-3" suppressHydrationWarning>
              {[
                { v: time.hours, l: hero.timerLabels.hours },
                { v: time.minutes, l: hero.timerLabels.minutes },
                { v: time.seconds, l: hero.timerLabels.seconds },
              ].map((b, i) => (
                <div key={i} className="bg-white/10 rounded-lg px-3 py-2 min-w-[64px] text-center">
                  <div className="text-2xl md:text-3xl font-bold tabular-nums">
                    {isMounted ? pad(b.v) : "00"}
                  </div>
                  <div className="text-[11px] uppercase text-brand-cream/60">{b.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Imagen */}
        <div className="relative">
          <img
            src="/hero-mockup.webp"
            alt={hero.imageAlt}
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
          <span className="block text-center mt-5 text-[14px] text-brand-cream/75 font-medium">
            {hero.socialProof}
          </span>
        </div>
      </div>
    </section>
  );
}
