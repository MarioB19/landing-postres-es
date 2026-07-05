import { copy } from "@/lib/copy";

export default function Story() {
  const { story } = copy;
  return (
    <section className="w-full bg-brand-cream py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[12px] uppercase tracking-wide font-semibold text-brand-green mb-4">
          {story.eyebrow}
        </span>
        <h2 className="text-2xl md:text-4xl font-extrabold text-brand-greenDark mb-8 leading-snug">
          {story.headline}
        </h2>
        <div className="space-y-5">
          {story.paragraphs.map((p, i) => (
            <p key={i} className="text-[16px] md:text-[18px] text-gray-700 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
        <p className="text-[17px] md:text-[20px] font-semibold text-brand-green mt-8">
          {story.closingLine}
        </p>
      </div>
    </section>
  );
}
