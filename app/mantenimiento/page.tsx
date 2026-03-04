import Link from 'next/link';

export default function MantenimientoPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#101414] px-4">
      <div className="mx-auto max-w-lg text-center">
        {/* Ícono de mantenimiento */}
        <div className="mb-8 flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#1a2f2a]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#27eaa6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
          </div>
        </div>

        {/* Título */}
        <h1 className="mb-4 font-heading text-4xl font-bold text-[#e8eeed]">
          Sitio en mantenimiento
        </h1>

        {/* Descripción */}
        <p className="mb-8 text-lg text-[#a0a5a4]">
          Estamos actualizando nuestra documentación para brindarte mejor contenido.
          Estaremos de vuelta pronto.
        </p>

        {/* Separador */}
        <div className="mx-auto mb-8 h-px w-16 bg-[#27eaa6]" />

        {/* Contacto */}
        <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-[#e8eeed]">
          ¿Necesitas ayuda? Contáctanos
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          {/* Whatsapp */}
          <Link
            href="https://wa.me/573002182405"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#27eaa6] px-6 py-3 text-sm font-bold text-[#193133] transition-transform hover:scale-105 active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Whatsapp
          </Link>

          {/* Correo */}
          <Link
            href="mailto:soporte@skytienda.co"
            className="inline-flex items-center gap-2 rounded-full border border-[#2a2f2e] bg-[#1a1f1e] px-6 py-3 text-sm font-bold text-[#e8eeed] transition-transform hover:scale-105 active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            soporte@skytienda.co
          </Link>
        </div>
      </div>
    </div>
  );
}
