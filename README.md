# Skytienda Docs

Documentación oficial de Skytienda construida con [Fumadocs](https://fumadocs.dev/).

## Tech Stack

- **Framework**: Next.js 16
- **UI**: Fumadocs UI
- **Content**: MDX con Fumadocs MDX
- **Styling**: Tailwind CSS v4

## Setup

```bash
# Instalar dependencias (requiere pnpm)
pnpm install

# Desarrollo local
pnpm dev

# La documentación estará disponible en http://localhost:3002
```

## Estructura

```
├── app/                  # Next.js App Router
│   ├── [[...slug]]/      # Páginas de documentación dinámicas
│   ├── api/search/       # API de búsqueda
│   └── layout.tsx        # Layout principal
├── components/           # Componentes React personalizados
├── content/docs/         # Contenido MDX de la documentación
│   ├── empezar/          # Guías de inicio
│   └── conceptos/        # Conceptos clave
├── lib/                  # Utilidades
├── public/               # Assets estáticos
├── source.config.ts      # Configuración de Fumadocs MDX
└── next.config.mjs       # Configuración de Next.js
```

## Agregar contenido

1. Crea un archivo `.mdx` en `content/docs/`
2. Añade frontmatter con `title` y `description`
3. Actualiza `meta.json` en la carpeta correspondiente para ordenar páginas

```mdx
---
title: Mi Nueva Página
description: Descripción para SEO
---

# Contenido aquí
```

## Deploy

Configurado para deploy automático en Vercel. Conecta este repo a un nuevo proyecto en Vercel.

## Comandos

| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Servidor de desarrollo en puerto 3002 |
| `pnpm build` | Build de producción |
| `pnpm start` | Servidor de producción |
| `pnpm typecheck` | Verificación de tipos |
