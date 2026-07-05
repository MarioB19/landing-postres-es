"use client";

import { useState } from "react";
import { copy } from "@/lib/copy";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CarouselSection() {
  const { carouselSection } = copy;
  const images = carouselSection.images;
  const [idx, setIdx] = useState(0);

  const go = (dir) => {
    setIdx((prev) => (prev + dir + images.length) % images.length);
  };

  const scrollToCta = (e) => {
    e.preventDefault();
    const el = document.getElementById("final-cta-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full bg-white py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block text-[12px] uppercase tracking-wide font-semibold text-brand-orange mb-3">
          {carouselSection.eyebrow}
        </span>
        <h2 className="text-2xl md:text-4xl font-extrabold text-brand-greenDark mb-3">
          {carouselSection.headline}
        </h2>
        <p className="text-[16px] text-gray-600 max-w-2xl mx-auto mb-10">
          {carouselSection.subheadline}
        </p>

        <div className="relative max-w-2xl mx-auto">
          <img
            src={images[idx]}
            alt={carouselSection.imageAlts[idx]}
            className="w-full h-auto rounded-2xl shadow-xl"
          />
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full w-11 h-11 flex items-center justify-center shadow-md"
          >
            <ChevronLeft className="w-6 h-6 text-brand-greenDark" />
          </button>
          <button
            type="button"
            aria-label="Siguiente"
            onClick={() => go(1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full w-11 h-11 flex items-center justify-center shadow-md"
          >
            <ChevronRight className="w-6 h-6 text-brand-greenDark" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-5">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Imagen ${i + 1}`}
              onClick={() => setIdx(i)}
              className={`w-2.5 h-2.5 rounded-full transition ${
                i === idx ? "bg-brand-green" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <a
          href="#final-cta-section"
          onClick={scrollToCta}
          className="inline-block mt-10 bg-brand-orange hover:brightness-110 text-white font-bold text-[17px] px-9 py-4 rounded-xl shadow-lg transition cursor-pointer"
        >
          {carouselSection.button}
        </a>
      </div>
    </section>
  );
}
