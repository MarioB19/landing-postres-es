import { copy } from "@/lib/copy";

export default function Footer() {
  const { footer } = copy;
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-[#0A2A20] text-brand-cream/70 py-12 px-5 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[18px] font-extrabold text-brand-cream mb-1">{footer.brand}</p>
        <p className="text-[14px] text-brand-cream/60 mb-6">{footer.tagline}</p>
        <p className="text-[12px] leading-relaxed text-brand-cream/55 mb-6 max-w-2xl mx-auto">
          {footer.disclaimer}
        </p>
        <p className="text-[12px] text-brand-cream/50">
          © {year} {footer.brand}. {footer.rights}
        </p>
      </div>
    </footer>
  );
}
