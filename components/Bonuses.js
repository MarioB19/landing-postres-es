import { copy } from "@/lib/copy";
import { Gift } from "lucide-react";

export default function Bonuses() {
  const { bonuses } = copy;
  return (
    <section className="w-full bg-brand-greenDark text-brand-cream py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <span className="inline-block text-[12px] uppercase tracking-wide font-bold text-brand-greenDark bg-brand-orange rounded-full px-4 py-1.5 mb-5">
          {bonuses.badge}
        </span>
        <h2 className="text-2xl md:text-4xl font-extrabold mb-12">{bonuses.headline}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {bonuses.items.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-orange/20 flex items-center justify-center mb-5">
                <Gift className="w-6 h-6 text-brand-orange" strokeWidth={2} />
              </div>
              <h3 className="text-[18px] font-bold mb-2">{item.title}</h3>
              <p className="text-[15px] text-brand-cream/80 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="text-[14px] text-brand-cream/70 mt-9">{bonuses.footnote}</p>
      </div>
    </section>
  );
}
