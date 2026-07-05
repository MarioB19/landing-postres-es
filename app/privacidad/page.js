export const metadata = {
  title: "Política de Privacidad | Inovaris",
  description: "Política de privacidad de Inovaris y del sitio postres.inovaris.online.",
  robots: { index: false },
};

const H2 = ({ children }) => (
  <h2 className="text-xl md:text-2xl font-bold text-brand-greenDark mt-10 mb-3">{children}</h2>
);

export default function Privacidad() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-14 font-sans text-gray-700 leading-relaxed">
      <h1 className="text-3xl md:text-4xl font-extrabold text-brand-greenDark mb-2">
        Política de Privacidad
      </h1>
      <p className="text-sm text-gray-500 mb-8">Última actualización: 1 de julio de 2026</p>

      <p>
        Esta política describe cómo <strong>Inovaris</strong> (&quot;nosotros&quot;) trata la
        información en este sitio web y en los productos digitales que comercializa, incluido el
        pack digital &quot;Postres para Vender desde Casa&quot;.
      </p>

      <H2>1. Información que recopilamos</H2>
      <p>
        Este sitio no tiene formularios de registro propios y no almacena directamente tus datos
        personales. La información que puede recopilarse es: (a) datos de navegación de forma
        automática mediante cookies y píxeles de seguimiento (como el píxel de Meta), por ejemplo
        páginas visitadas, dispositivo, navegador y origen de la visita; y (b) datos de compra
        (nombre, correo electrónico y método de pago) que proporcionas directamente a nuestra
        plataforma de pago cuando decides comprar.
      </p>

      <H2>2. Procesamiento de pagos</H2>
      <p>
        Las compras se procesan a través de <strong>Hotmart</strong> (hotmart.com), que actúa como
        comerciante de registro. Inovaris no recibe ni almacena los datos de tu tarjeta. El
        tratamiento de tus datos de pago se rige por la política de privacidad de Hotmart, disponible en hotmart.com/es/privacy. Los cargos se muestran y procesan en pesos mexicanos (MXN).
      </p>

      <H2>3. Uso de la información</H2>
      <p>
        Usamos los datos de navegación para medir el rendimiento de nuestra publicidad, mejorar el
        sitio y mostrar anuncios relevantes en plataformas como Facebook e Instagram. Usamos el
        correo de compra para entregarte el producto digital y darte soporte relacionado con tu
        compra.
      </p>

      <H2>4. Cookies y píxeles</H2>
      <p>
        Este sitio utiliza el píxel de Meta (Facebook) para medición y publicidad. Puedes limitar
        el uso de cookies desde la configuración de tu navegador y gestionar tus preferencias de
        anuncios en la configuración de tu cuenta de Facebook (facebook.com/adpreferences).
      </p>

      <H2>5. Compartir información</H2>
      <p>
        No vendemos tu información personal. Solo se comparte con los proveedores necesarios para
        operar: la plataforma de pago (Hotmart), servicios de análisis y publicidad (Meta) y el
        proveedor de alojamiento del sitio.
      </p>

      <H2>6. Tus derechos</H2>
      <p>
        Puedes solicitar acceso, corrección o eliminación de tus datos personales escribiéndonos.
        Si estás en México, esto incluye los derechos ARCO previstos en la LFPDPPP.
      </p>

      <H2>7. Contacto</H2>
      <p>
        Para cualquier duda sobre esta política o sobre tus datos, escríbenos a{" "}
        <a href="mailto:brandonmuro.contacto@gmail.com" className="text-brand-green underline">
          brandonmuro.contacto@gmail.com
        </a>
        .
      </p>

      <H2>8. Cambios a esta política</H2>
      <p>
        Podemos actualizar esta política ocasionalmente. La versión vigente estará siempre
        publicada en esta página con su fecha de actualización.
      </p>

      <p className="mt-10 text-sm text-gray-500">
        Este sitio y sus productos tienen fines informativos y de cocina; no sustituyen la
        indicación de un profesional de la salud.
      </p>
    </main>
  );
}
