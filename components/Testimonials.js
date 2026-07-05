import { copy } from "@/lib/copy";

// Renderiza solo si hay testimonios REALES cargados en copy.testimonials.items.
// No se inventan testimonios; permanece vacío hasta tener reseñas de compradores.
export default function Testimonials() {
  const { testimonials } = copy;
  if (!testimonials.items || testimonials.items.length === 0) return null;

  return (
    <section className="w-full bg-white py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-extrabold text-brand-greenDark text-center mb-12">
          {testimonials.headline}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.items.map((t, i) => (
            <div key={i} className="bg-brand-mint rounded-2xl p-7 border border-brand-green/10">
              <p className="text-[15px] text-gray-700 italic mb-4">“{t.quote}”</p>
              <p className="text-[14px] font-bold text-brand-greenDark">{t.name}</p>
              <p className="text-[13px] text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
