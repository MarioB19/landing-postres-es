import { copy } from "@/lib/copy";
import { UtensilsCrossed, Heart, ShoppingBasket } from "lucide-react";

const ICONS = [UtensilsCrossed, Heart, ShoppingBasket];

export default function Benefits() {
  const { benefits } = copy;
  return (
    <section className="w-full bg-white py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-[12px] uppercase tracking-wide font-semibold text-brand-orange mb-3">
            {benefits.eyebrow}
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-brand-greenDark">
            {benefits.headline}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {benefits.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div
                key={i}
                className="bg-brand-mint rounded-2xl p-7 text-center md:text-left border border-brand-green/10"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-green/10 flex items-center justify-center mb-5 mx-auto md:mx-0">
                  <Icon className="w-7 h-7 text-brand-green" strokeWidth={2} />
                </div>
                <h3 className="text-[19px] font-bold text-brand-greenDark mb-2">{item.title}</h3>
                <p className="text-[15px] text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
