# Guía para Claude Code

## Convenciones de escritura

### Nombres de marca
- **Skytienda** → Correcto (no "SkyTienda")
- **Whatsapp** → Correcto (no "WhatsApp")

## Stack tecnológico
- Framework: Next.js 16 (App Router)
- Documentación: Fumadocs
- Estilos: Tailwind CSS v4
- Idioma: Español (configurado en `lib/i18n.ts`)

## Estructura del contenido
- Los documentos van en `content/docs/`
- Cada sección tiene su carpeta con `meta.json` para navegación
- Usar componentes de Fumadocs: `<Callout>`, `<Cards>`, `<Card>`

## Comandos útiles
- `pnpm dev` → Servidor de desarrollo (puerto 3002)
- `pnpm build` → Build de producción
