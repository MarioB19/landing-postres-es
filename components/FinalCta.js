"use client";

import { useState, useEffect } from "react";
import { copy } from "@/lib/copy";
import { ShieldCheck } from "lucide-react";

// Checkout propio (plataforma Inovaris + Stripe). Alta vía API 06-jul: prod_UprD79aKc3IPsx.
const BASE_CHECKOUT_URL = "https://plataforma.inovaris.online/checkout/postres-mx";

export default function FinalCta() {
  const [checkoutUrl, setCheckoutUrl] = useState(BASE_CHECKOUT_URL);
  const { finalCta } = copy;

  // Prioridad URL > localStorage
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        let src = params.get("src");
        let fbclid = params.get("fbclid");

        if (!src) src = localStorage.getItem("hotmart_src");
        if (!fbclid) fbclid = localStorage.getItem("hotmart_fbclid");

        if (src || fbclid) {
          const urlObj = new URL(BASE_CHECKOUT_URL);
          if (src) urlObj.searchParams.set("src", src);
          if (fbclid) urlObj.searchParams.set("fbclid", fbclid);
          setCheckoutUrl(urlObj.toString());
        }
      }
    } catch (error) {
      console.error("Error construyendo URL:", error);
    }
  }, []);

  const handleBeginCheckout = () => {
    try {
      let priceNum = 0;
      if (finalCta.offerPrice) {
        const cleaned = String(finalCta.offerPrice).replace(/[^\d.,]/g, "").replace(",", ".");
        const parsed = parseFloat(cleaned);
        if (Number.isFinite(parsed)) priceNum = parsed;
      }

      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "begin_checkout",
          value: priceNum,
          currency: "MXN",
          items: [
            {
              item_id: "postres_mx_cta",
              item_name: "Postres para Vender desde Casa",
              price: priceNum,
            },
          ],
        });

        // Meta Pixel: InitiateCheckout en el clic del CTA (compuerta Etapa 0.5)
        if (typeof window.fbq === "function") {
          window.fbq("track", "InitiateCheckout", {
            value: priceNum,
            currency: "MXN",
            content_name: "Postres para Vender desde Casa",
            content_ids: ["postres_mx"],
            content_type: "product",
          });
        }
      }
    } catch (err) {
      console.error("[FinalCTA] Error en analytics:", err);
    }
  };

  return (
    <section
      id="final-cta-section"
      className="w-full bg-brand-mint py-16 md:py-24 px-4 md:px-6 font-sans text-center flex flex-col items-center"
    >
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
        <div className="bg-[#F7DCE6] w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-sm">
          <ShieldCheck className="w-10 h-10 text-brand-green" strokeWidth={2} />
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold text-brand-greenDark mb-4">
          {finalCta.headline}
        </h2>
        <p className="text-[16px] md:text-[18px] text-gray-600 mb-10 max-w-2xl">
          {finalCta.guaranteeText}
        </p>

        <div className="mb-10 flex flex-col items-center text-center font-black text-xl md:text-3xl tracking-tight leading-relaxed">
          {finalCta.bundleList.map((item, index) => (
            <span
              key={index}
              className={index === 0 ? "text-brand-orange mb-3" : "text-brand-greenDark"}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mb-6">
          <p className="text-gray-500 text-[16px] md:text-lg mb-2 font-medium">
            {finalCta.regularPriceLabel}{" "}
            <span className="line-through">{finalCta.regularPrice}</span>
          </p>
          <p className="text-6xl md:text-7xl font-black text-brand-green mb-3 tracking-tighter drop-shadow-sm">
            {finalCta.offerPrice}
          </p>
          <p className="text-[14px] md:text-[15px] font-medium text-gray-500">
            {finalCta.urgencyText}
          </p>
          {finalCta.usdNote && (
            <p className="text-[13px] md:text-[14px] text-gray-400 mt-1">
              {finalCta.usdNote}
            </p>
          )}
        </div>

        <div className="w-full max-w-[500px] mt-6 mb-10">
          <img
            src="/hero-mockup.webp"
            alt={finalCta.imageAlt}
            className="w-full h-auto object-contain drop-shadow-2xl rounded-2xl"
          />
        </div>

        <a
          href={checkoutUrl}
          onClick={handleBeginCheckout}
          className="inline-block bg-brand-orange hover:brightness-110 text-white font-bold py-6 md:py-8 px-6 md:px-12 rounded-xl shadow-xl text-[18px] md:text-[22px] w-full md:w-auto mx-auto h-auto whitespace-normal leading-snug border-b-4 border-[#b8551d] transition cursor-pointer"
        >
          {finalCta.button}
        </a>
      </div>
    </section>
  );
}
