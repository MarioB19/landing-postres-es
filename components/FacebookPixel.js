"use client";

import Script from "next/script";

// Pixel "Postres MX" — creado 04-jul-2026 a nivel Business Inovaris via Graph API.
const PIXEL_ID = "4306140466264488";

export default function FacebookPixel() {
  return (
    <>
      {/* 1. Snippet oficial de Meta */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('set','autoConfig', false, '${PIXEL_ID}');
            fbq('init', '${PIXEL_ID}', {}, { disablePushState: true });
          `,
        }}
      />

      {/* 2. Filtro Dedupe */}
      <Script
        id="meta-pv-dedupe"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              if (location.pathname === "/brd") return;

              var lastPV = null;

              function installPatch() {
                if (!window.fbq || !window.fbq.callMethod) return false;
                if (window.__pvDedupeInstalled) return true;
                window.__pvDedupeInstalled = true;

                var orig = window.fbq.callMethod;

                window.fbq.callMethod = function() {
                  try {
                    if (arguments[0] === 'track' && arguments[1] === 'PageView') {
                      var currentUrl = location.origin + location.pathname + location.search;
                      if (lastPV === currentUrl) {
                        return;
                      }
                      lastPV = currentUrl;
                    }
                  } catch (e) {}
                  return orig.apply(this, arguments);
                };

                return true;
              }

              var timer = setInterval(function() {
                if (installPatch()) {
                  clearInterval(timer);
                  window.fbq('track', 'PageView');
                }
              }, 50);
            })();
          `,
        }}
      />

      {/* Fallback para navegadores sin JS */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
