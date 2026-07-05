# Landing — Postres para Vender desde Casa (es / MX)

Landing de venta del pack "Postres para Vender desde Casa" ($249 MXN). Arquitectura
Inovaris estándar (Next.js App Router, JS, Tailwind, copy en `lib/copy.js`).
Clonada de `landing-recetario-es` el 04-jul-2026.

## Pendientes antes de deploy
1. **`BASE_CHECKOUT_URL` (x2: `components/FinalCta.js` y `components/Closing.js`)** —
   URL real de Hotmart (F6, Brandon). Hoy: placeholder `PENDIENTE_CHECKOUT_POSTRES`.
2. **`PIXEL_ID` (`components/FacebookPixel.js`)** — crear pixel "Postres MX" (F7).
   Hoy: placeholder `PENDIENTE_PIXEL_ID_POSTRES_MX`.
3. **Imágenes .webp** — hoy quedan las del recetario como relleno de build.
   Reemplazar: `hero-mockup.webp`, `celular-receta.webp`, `flat-lay.webp`,
   `portada.webp`, `carousel/img-1..3.webp` (prompts en
   `Creativos — Postres MX — 2026-07-04.md`, sección landing). Convertir a webp.

## Novedades vs recetario
- `InitiateCheckout` de Meta Pixel se dispara en el clic de ambos CTAs
  (FinalCta y Closing) además del `begin_checkout` al dataLayer — compuerta Etapa 0.5.
- Precio único $249 MXN, sin nota de USD (Hotmart cobra en MXN).

## Deploy previsto
GitHub (repo `landing-postres-es`) → Netlify → CNAME `postres.inovaris.online`.
