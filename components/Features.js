import { copy } from "@/lib/copy";
import { Check } from "lucide-react";

export default function Features() {
  const { features } = copy;
  return (
    <section className="w-full bg-brand-cream py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="order-2 md:order-1">
          <img
            src="/celular-receta.webp"
            alt={features.imageAlt}
            className="w-full max-w-[420px] mx-auto h-auto rounded-2xl shadow-xl"
          />
        </div>
        <div className="order-1 md:order-2">
          <span className="inline-block text-[12px] uppercase tracking-wide font-semibold text-brand-green mb-3">
            {features.eyebrow}
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-brand-greenDark mb-7 leading-snug">
            {features.headline}
          </h2>
          <ul className="space-y-4">
            {features.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-brand-green" strokeWidth={3} />
                </span>
                <span className="text-[16px] text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
