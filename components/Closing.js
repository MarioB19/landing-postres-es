"use client";

import { useState, useEffect } from "react";
import { copy } from "@/lib/copy";

// Misma lógica de checkout que FinalCta. ⚠️ PENDIENTE F6: URL real de Hotmart.
const BASE_CHECKOUT_URL = "https://pay.hotmart.com/PENDIENTE_CHECKOUT_POSTRES";

export default function Closing() {
  const [checkoutUrl, setCheckoutUrl] = useState(BASE_CHECKOUT_URL);
  const { closing } = copy;

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
      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "begin_checkout",
          value: 249,
          currency: "MXN",
          items: [
            {
              item_id: "postres_mx_closing",
              item_name: "Postres para Vender desde Casa",
              price: 249,
            },
          ],
        });

        // Meta Pixel: InitiateCheckout en el clic del CTA (compuerta Etapa 0.5)
        if (typeof window.fbq === "function") {
          window.fbq("track", "InitiateCheckout", {
            value: 249,
            currency: "MXN",
            content_name: "Postres para Vender desde Casa",
            content_ids: ["postres_mx"],
            content_type: "product",
          });
        }
      }
    } catch (err) {
      console.error("[Closing] Error en analytics:", err);
    }
  };

  return (
    <section className="w-full bg-brand-greenDark text-brand-cream py-16 md:py-24 px-5 md:px-8 text-center">
      <div className="max-w-3xl mx-auto">
        <span className="inline-block text-[12px] uppercase tracking-wide font-semibold text-brand-orange mb-4">
          {closing.eyebrow}
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5">{closing.headline}</h2>
        <p className="text-[16px] md:text-[18px] text-brand-cream/85 leading-relaxed mb-9 max-w-2xl mx-auto">
          {closing.text}
        </p>
        <a
          href={checkoutUrl}
          onClick={handleBeginCheckout}
          className="inline-block bg-brand-orange hover:brightness-110 text-white font-bold text-[18px] md:text-[20px] px-9 py-5 rounded-xl shadow-xl transition cursor-pointer"
        >
          {closing.button}
        </a>
        <p className="text-[14px] text-brand-cream/70 mt-5">{closing.reassurance}</p>
      </div>
    </section>
  );
}
