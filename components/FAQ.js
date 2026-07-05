"use client";

import { useState } from "react";
import { copy } from "@/lib/copy";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const { faq } = copy;
  const [open, setOpen] = useState(null);

  return (
    <section className="w-full bg-white py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-extrabold text-brand-greenDark text-center mb-12">
          {faq.headline}
        </h2>
        <div className="space-y-3">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 bg-brand-cream/60 hover:bg-brand-cream transition"
                >
                  <span className="text-[16px] md:text-[17px] font-semibold text-brand-greenDark">
                    {item.q}
                  </span>
                  {isOpen ? (
                    <Minus className="w-5 h-5 text-brand-green flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-brand-green flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 py-4 text-[15px] text-gray-700 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
